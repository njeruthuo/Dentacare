"use client";

import { useCreateWorkerMutation } from "@/store/api/serviceApi";
import { getDentalID } from "@/store/utils/getAuthState";
import { WorkerFormData } from "@/types/user";
import { useState } from "react";
import { initialState, ROLES } from "./data";

export default function AddWorker() {
  const [createWorker] = useCreateWorkerMutation();
  const [formData, setFormData] = useState<WorkerFormData>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const clearState = () => setFormData(initialState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createWorker({
        ...formData,
        dental: Number(getDentalID()) || -1,
        is_active: true,
      }).unwrap();
      clearState();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center px-6 py-16">
      {/* Ambient glows */}
      <div className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/60 dark:bg-sky-950/40 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 right-0 w-[400px] h-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-100/50 dark:bg-cyan-950/30 blur-3xl" />

      <div className="relative w-full max-w-xl">
        <div className="card p-8">
          {/* Header */}
          <div className="mb-8">
            <span className="label-text">Clinic Management</span>
            <h1 className="font-display text-3xl text-slate-800 dark:text-white mt-2">
              Add Team Member
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Register a new worker to your dental unit. They&apos;ll receive
              login credentials via email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label-text block mb-1.5">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Amina"
                  className="input-field"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="label-text block mb-1.5">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Osei"
                  className="input-field"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="label-text block mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="amina.osei@dentacare.co.ke"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="label-text block mb-1.5">Role</label>
              <select
                name="role"
                className="input-field"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a role…
                </option>
                {ROLES.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Temporary password */}
            <div>
              <label className="label-text block mb-1.5">
                Temporary Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Min. 8 characters"
                  className="input-field pr-11"
                  value={formData.password}
                  onChange={handleChange}
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1.5 pl-1">
                The worker should change this on first login.
              </p>
            </div>

            {/* Info pill */}
            <div className="flex items-start gap-2.5 rounded-xl border border-sky-100 dark:border-sky-900/50 bg-sky-50/60 dark:bg-sky-950/30 px-4 py-3">
              <span className="text-sky-500 mt-0.5">ℹ️</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                This worker will be linked to{" "}
                <span className="font-medium text-sky-600 dark:text-sky-400">
                  your dental unit
                </span>{" "}
                and granted access to the clinic portal based on their assigned
                role.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                className="btn-secondary flex-1 py-3"
                onClick={clearState}
              >
                Clear
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex-1 py-3 shadow-brand"
              >
                {isSubmitting ? "Adding…" : "Add Worker"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
