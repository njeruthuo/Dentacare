import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQuery";
import {
  Appointment,
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
      query: (dentalID) => `services/?dental_id${dentalID}`,
    }),

    createReview: builder.mutation<ServiceFormData, ReviewPayloadType>({
      query: (data) => ({
        url: "reviews/",
        method: "POST",
        body: data,
      }),
    }),
    getReviews: builder.query<ReviewPayloadType[], number>({
      query: (dentalID) => `review/${dentalID}`,
    }),

    createAppointment: builder.mutation<Appointment, AppointmentPayloadType>({
      query: (data) => ({
        url: "appointments/",
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
