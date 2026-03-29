"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering with:", formData);
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-display text-3xl text-slate-800 dark:text-white mb-2">
        Create an account
      </h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
        Join DentaCare and take control of your dental health
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* First & Last name row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label-text block mb-1.5">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Jane"
              className="input-field"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label-text block mb-1.5">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              className="input-field"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="label-text block mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="input-field"
            onChange={handleChange}
          />
        </div>

        {/* Username */}
        <div>
          <label className="label-text block mb-1.5">Username</label>
          <input
            type="text"
            name="username"
            placeholder="janedoe"
            className="input-field"
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div>
          <label className="label-text block mb-1.5">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="input-field"
            onChange={handleChange}
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="label-text block mb-1.5">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            className="input-field"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-primary w-full py-3 mt-2">
          Create Account
        </button>
      </form>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-6">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-sky-600 dark:text-sky-400 font-medium hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
