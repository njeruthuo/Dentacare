import { getDentalID } from "@/store/utils/getAuthState";

export const initialServiceState = {
  name: "",
  price: "",
  description: "",
  poster: null,
  dental: Number(getDentalID()),
};
