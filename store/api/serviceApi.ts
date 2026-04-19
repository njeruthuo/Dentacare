import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQuery";
import {
  AppointmentPayloadType,
  ReviewPayloadType,
  ServiceFormData,
} from "@/types/service";

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
    getServices: builder.query<ServiceFormData[], number>({
      query: (dentalID) => `services/${dentalID}`,
    }),

    createReview: builder.mutation<ServiceFormData, ReviewPayloadType>({
      query: (data) => ({
        url: "review/",
        method: "POST",
        body: data,
      }),
    }),
    getReviews: builder.query<ReviewPayloadType[], number>({
      query: (dentalID) => `review/${dentalID}`,
    }),

    createAppointment: builder.mutation<
      ServiceFormData,
      AppointmentPayloadType
    >({
      query: (data) => ({
        url: "appointment/",
        method: "POST",
        body: data,
      }),
    }),
    getAppointments: builder.query<AppointmentPayloadType[], number>({
      query: (dentalID) => `appointments/${dentalID}`,
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useCreateReviewMutation,
  useCreateAppointmentMutation,

  useGetServicesQuery,
  useGetAppointmentsQuery,
  useGetReviewsQuery,
} = serviceApi;
