export interface ServiceFormData {
  id?: number;
  name: string;
  price: string;
  description: string;
  poster: File | null;
  dental: string;
}

export interface AppointmentPayloadType {
  booking_dt: string;
  service: string;
  notes: string;
  user: number;
  dental: number;
  status: "pending" | "canceled" | "completed" | "confirmed";
}

export interface ReviewPayloadType {
  user: number;
  dental: number;
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
