"use client";

import {
  useCreateAppointmentMutation,
  useGetServicesQuery,
} from "@/store/api/serviceApi";
import { getDentalID, getUserID } from "@/store/utils/getAuthState";
import { AppointmentFormData } from "@/types/service";
import { useState } from "react";

const initialAppointmentState: AppointmentFormData = {
  booking_dt: "",
  service: "",
  notes: "",
};

const AddAppointment = () => {
  const [createAppointment, { isLoading }] = useCreateAppointmentMutation();
  const { data: services } = useGetServicesQuery(Number(getDentalID()));
  const [formData, setFormData] = useState<AppointmentFormData>(
    initialAppointmentState,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const clearState = () => {
    setFormData(initialAppointmentState);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createAppointment({
        ...formData,
        dental: getDentalID(),
        user: getUserID(),
        status: "pending",
      }).unwrap();
      clearState();
    } finally {
      setIsSubmitting(false);
    }
  };

  const minDateTime = (() => {
    const d = new Date();
    d.setMinutes(Math.ceil(d.getMinutes() / 15) * 15, 0, 0);
    return d.toISOString().slice(0, 16);
  })();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center px-6 py-16">
      {/* Ambient glows */}
      <div className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/60 dark:bg-sky-950/40 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 right-0 w-[400px] h-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-100/50 dark:bg-cyan-950/30 blur-3xl" />

      <div className="relative w-full max-w-xl">
        {/* Card */}
        <div className="card p-8">
          {/* Header */}
          <div className="mb-8">
            <span className="label-text">Clinic Management</span>
            <h1 className="font-display text-3xl text-slate-800 dark:text-white mt-2">
              Book Appointment
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Select a service and choose a convenient date and time.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Service */}
            <div>
              <label className="label-text block mb-1.5">Service</label>
              <select
                name="service"
                className="input-field"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a dental service…
                </option>
                {services?.map((svc) => (
                  <option key={svc.id} value={svc.id}>
                    {svc.name} — KSH {svc.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time */}
            <div>
              <label className="label-text block mb-1.5">
                Appointment Date &amp; Time
              </label>
              <input
                type="datetime-local"
                name="booking_dt"
                min={minDateTime}
                className="input-field"
                value={formData.booking_dt}
                onChange={handleChange}
                required
              />
            </div>

            {/* Notes */}
            <div>
              <label className="label-text block mb-1.5">
                Notes{" "}
                <span className="text-slate-400 normal-case font-normal">
                  (optional)
                </span>
              </label>
              <textarea
                name="notes"
                placeholder="Any special requests, allergies, or information for the dentist…"
                rows={4}
                className="input-field resize-none"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            {/* Info pill */}
            <div className="flex items-start gap-2.5 rounded-xl border border-sky-100 dark:border-sky-900/50 bg-sky-50/60 dark:bg-sky-950/30 px-4 py-3">
              <span className="text-sky-500 mt-0.5">ℹ️</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Your appointment will be marked as{" "}
                <span className="font-medium text-sky-600 dark:text-sky-400">
                  Pending
                </span>{" "}
                until confirmed by the clinic. You&apos;ll receive a
                notification once it&apos;s approved.
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
                {isSubmitting ? "Booking…" : "Book Appointment"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
