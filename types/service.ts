import { User } from "./user";

export interface ServiceFormData {
  id?: number;
  name: string;
  price: string;
  description: string;
  poster: File | null;
  dental: number;
}

export interface AppointmentPayloadType {
  booking_dt: string;
  service: string;
  notes: string;
  user: number;
  dental: number;
  status: "pending" | "canceled" | "completed" | "confirmed";
}

export interface Appointment {
  id: number;
  user: User;
  user_details: User;
  dental: number;
  dental_name: string;
  service: number;
  service_name: string;
  booking_dt: string;
  notes: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ReviewPayloadType {
  user: number;
  dental: number;
  user_details?: User;
  description: string;
  rating: number;
}

export interface ReviewFormData {
  description: string;
  rating: number;
}

export interface AppointmentFormData {
  booking_dt: string;
  service: string;
  notes: string;
}
