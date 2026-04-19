import { AuthState, User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authData, userIsAuthenticated } from "../utils/getAuthState";

const initialState: AuthState = {
  user: (authData.get("user") as unknown as User) ?? null,
  accessToken: authData.get("accessToken") ?? null,
  dental: (authData.get("dental") as unknown as number) ?? null,
  refreshToken: authData.get("refreshToken") ?? null,
  isAuthenticated: userIsAuthenticated(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: User;
        accessToken: string;
        refreshToken: string;
        dental: number;
      }>,
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      state.dental = action.payload.dental;

      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
      localStorage.setItem("dentalID", action.payload.dental.toString());
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.dental = null;

      localStorage.removeItem("accessToken");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("dentalID");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
