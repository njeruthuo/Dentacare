import { WorkerFormData } from "@/types/user";

export const ROLES = [
  { value: "admin", label: "Admin" },
  { value: "dentist", label: "Dentist" },
  { value: "staff", label: "Staff" },
];

export const initialState: WorkerFormData = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  role: "",
  dental: -1,
  is_active: true,
};
