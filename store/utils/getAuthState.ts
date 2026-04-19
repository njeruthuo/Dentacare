import { User } from "@/types/user";

const isBrowser = typeof window !== "undefined";

const safeGetJSON = <T>(key: string): T | null => {
  if (!isBrowser) return null;
  try {
    const raw = localStorage.getItem(key);
    if (!raw || raw === "null" || raw === "undefined") return null;
    return JSON.parse(raw) as T;
  } catch {
    try {
      localStorage.removeItem(key);
    } catch {
      /* unavailable */
    }
    return null;
  }
};

const safeGetString = (key: string): string | null => {
  if (!isBrowser) return null;
  try {
    const value = localStorage.getItem(key);
    if (!value || value === "null" || value === "undefined") return null;
    return value;
  } catch {
    return null;
  }
};

export const getDefaultValues = (): Map<string, string | User | null> => {
  const authMap = new Map<string, string | User | null>();
  authMap.set("user", safeGetJSON<User>("userInfo"));
  authMap.set("accessToken", safeGetString("accessToken"));
  authMap.set("dental", safeGetString("dental"));
  authMap.set("refreshToken", safeGetString("refreshToken"));
  return authMap;
};

export const authData = getDefaultValues();

export function userIsAuthenticated(): boolean {
  if (!isBrowser) return false;
  return Boolean(safeGetString("accessToken") && safeGetString("refreshToken"));
}

export function getDentalID(): number {
  return Number(safeGetString("dentalID")) || 0;
}

export function getUserID(): number | null {
  const user = safeGetJSON<User>("userInfo");
  return user?.id ?? null;
}
