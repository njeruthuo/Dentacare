// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authReducer from "./slices/authSlice";
import { serviceApi } from "./api/serviceApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, serviceApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
