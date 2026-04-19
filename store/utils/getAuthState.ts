import { User } from "@/types/user";

export function userIsAuthenticated() {
  return (
    Boolean(
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken"),
    ) || false
  );
}

export const getDefaultValues = (): Map<string, string | null> => {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo") || "null",
  ) as User;

  const authMap = new Map<string, string | null>();

  authMap.set("user", userInfo as unknown as string);
  authMap.set("accessToken", localStorage.getItem("accessToken"));
  authMap.set("dental", localStorage.getItem("dental"));
  authMap.set("refreshToken", localStorage.getItem("refreshToken"));

  return authMap;
};
export const authData = getDefaultValues();

export function getDentalID() {
  return Number(localStorage.getItem("dentalID"));
}

export function getUserID() {
  const data = JSON.parse(localStorage.getItem("userInfo") || "") as User;
  return data.id;
}
