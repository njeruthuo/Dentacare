"use client";

import { useState } from "react";
import Link from "next/link";
import { useLoginMutation } from "@/store/api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/slices/authSlice";

export default function LoginPage() {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login(formData).unwrap();

      dispatch(
        setCredentials({
          user: result.user,
          accessToken: result.access,
          refreshToken: result.refresh,
          dental: result.dental,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-display text-3xl text-slate-800 dark:text-white mb-2">
        Welcome back
      </h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
        Sign in to your DentaCare account
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="label-text block mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="input-field"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="label-text">Password</label>
            <a
              href="#"
              className="text-xs text-sky-600 dark:text-sky-400 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="input-field"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>

        <button type="submit" className="btn-primary w-full py-3 mt-2">
          Sign In
        </button>
      </form>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-6">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="text-sky-600 dark:text-sky-400 font-medium hover:underline"
        >
          Create one
        </Link>
      </p>
    </div>
  );
}
