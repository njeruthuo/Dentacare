import { User } from "@/types/user";

export function userIsAuthenticated() {
  return (
    Boolean(
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken"),
    ) || false
  );
}

export function getDentalID() {
  return Number(localStorage.getItem("dentalID"));
}

export function getUserID() {
  const data = JSON.parse(localStorage.getItem("userInfo") || "") as User;
  return data.id;
}
