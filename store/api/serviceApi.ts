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
  tagTypes: ["Appointments", "Services", "Reviews"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    createService: builder.mutation<ServiceFormData, ServiceFormData>({
      query: (data) => ({
        url: "services/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Services"],
    }),
    getServices: builder.query<ServiceFormData[], number>({
      query: (dentalID) => `services/?dental_id${dentalID}`,
      providesTags: ["Services"],
    }),

    createReview: builder.mutation<ServiceFormData, ReviewPayloadType>({
      query: (data) => ({
        url: "reviews/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Reviews"],
    }),
    getReviews: builder.query<ReviewPayloadType[], number>({
      query: (dentalID) => `reviews/?dental_id${dentalID}`,
      providesTags: ["Reviews"],
    }),

    createAppointment: builder.mutation<Appointment, AppointmentPayloadType>({
      query: (data) => ({
        url: "appointments/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Appointments"],
    }),
    getAppointments: builder.query<AppointmentPayloadType[], number>({
      query: (dentalID) => `appointments/?dental_id${dentalID}`,
      providesTags: ["Appointments"],
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
