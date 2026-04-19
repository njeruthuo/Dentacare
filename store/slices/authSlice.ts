import { AuthState, User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authData, userIsAuthenticated } from "../utils/getAuthState";

const initialState: AuthState = {
  user: (authData.get("user") as unknown as User) ?? null,
  accessToken: (authData.get("accessToken") as string) ?? "",
  dental: (authData.get("dental") as unknown as number) ?? null,
  refreshToken: (authData.get("refreshToken") as string) ?? "",
  isAuthenticated: userIsAuthenticated(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      state.dental = action.payload.dental;

      localStorage.setItem("role", action.payload?.user?.role || "");
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
      localStorage.setItem("dentalID", action.payload.dental.toString());
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
    logout: (state) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("dentalID");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("role");

      state.user = null;
      state.accessToken = "";
      state.refreshToken = "";
      state.isAuthenticated = false;
      state.dental = -1;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
