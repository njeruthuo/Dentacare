export function userIsAuthenticated() {
  return (
    Boolean(
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken"),
    ) || false
  );
}
