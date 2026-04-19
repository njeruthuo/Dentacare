import { Middleware } from "@reduxjs/toolkit";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const REDIRECT_ENDPOINTS = new Set([
  "createService",
  "createAppointment",
  "createReview",
  "createWorker",
]);

export const createRedirectMiddleware =
  (router: AppRouterInstance, redirectTo = "/"): Middleware =>
  () =>
  (next) =>
  (action: unknown) => {
    const result = next(action);

    if (
      typeof action === "object" &&
      action !== null &&
      "type" in action &&
      typeof (action as { type: unknown }).type === "string"
    ) {
      const { type } = action as {
        type: string;
        meta?: { arg?: { endpointName?: string } };
      };
      const endpointName = (
        action as { meta?: { arg?: { endpointName?: string } } }
      ).meta?.arg?.endpointName;

      if (
        type.endsWith("/fulfilled") &&
        endpointName &&
        REDIRECT_ENDPOINTS.has(endpointName)
      ) {
        router.push(redirectTo);
      }
    }

    return result;
  };
