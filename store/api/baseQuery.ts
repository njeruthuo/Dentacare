import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  BaseQueryApi,
} from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../slices/authSlice";
import type { RootState } from "../store";

const base = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    // Prefer Redux state, fallback to localStorage safely
    const token =
      state.auth.accessToken ||
      (typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null);

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await base(args, api, extraOptions);

  // Check if we got a 401 and we aren't already trying to refresh
  const isRefreshRequest =
    typeof args !== "string" && args.url === "/token/refresh/";

  if (result.error?.status === 401 && !isRefreshRequest) {
    const state = api.getState() as RootState;
    const refreshToken =
      state.auth.refreshToken ||
      (typeof window !== "undefined"
        ? localStorage.getItem("refreshToken")
        : null);

    if (!refreshToken) {
      handleLogout(api);
      return result;
    }

    // Attempt to get a new access token
    const refreshResult = await base(
      {
        url: "/token/refresh/",
        method: "POST",
        body: { refresh: refreshToken },
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      const { access } = refreshResult.data as { access: string };
      const currentUser = (api.getState() as RootState).auth.user;

      // Update Redux
      api.dispatch(
        setCredentials({
          user: currentUser!,
          accessToken: access,
          refreshToken: refreshToken,
        }),
      );

      // Update LocalStorage safely
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", access);
      }

      // Retry the original request
      result = await base(args, api, extraOptions);
    } else {
      handleLogout(api);
    }
  }

  return result;
};

// Helper to keep code DRY
const handleLogout = (api: BaseQueryApi) => {
  api.dispatch(logout());
  if (typeof window !== "undefined") {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
};
