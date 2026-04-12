export function userIsAuthenticated() {
  return (
    Boolean(
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken"),
    ) || false
  );
}

export function getDentalID() {
  return localStorage.getItem("dentalID") || "";
}
