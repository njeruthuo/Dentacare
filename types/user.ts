export interface User {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  role: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string;
  refreshToken: string;
  isAuthenticated?: boolean;
  dental: number;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  user: User;
  dental: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

export interface RegisterResponse {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
}

export interface WorkerFormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  dental: number;
  is_active: boolean;
}
