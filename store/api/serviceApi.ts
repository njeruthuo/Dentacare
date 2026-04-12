import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQuery";
import { ServiceFormData } from "@/types/service";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    createService: builder.mutation<ServiceFormData, ServiceFormData>({
      query: (data) => ({
        url: "services/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateServiceMutation } = serviceApi;
