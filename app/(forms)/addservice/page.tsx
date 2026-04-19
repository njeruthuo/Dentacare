"use client";

import { initialServiceState } from "@/data/service";
import { useCreateServiceMutation } from "@/store/api/serviceApi";
import { getDentalID } from "@/store/utils/getAuthState";
import { ServiceFormData } from "@/types/service";
import { useState } from "react";

const AddService = () => {
  const [createService, { isLoading }] = useCreateServiceMutation();
  const [formData, setFormData] =
    useState<ServiceFormData>(initialServiceState);

  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFormData((prev) => ({ ...prev, poster: file }));
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const clearState = () => {
    setFormData(initialServiceState);
    setPreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("price", formData.price);
      payload.append("dental", getDentalID().toString());
      payload.append("description", formData.description);
      if (formData.poster) {
        payload.append("poster", formData.poster);
      }

      console.log("Submitting service:", formData);
      await createService(payload as unknown as ServiceFormData).unwrap();
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
        {/* Corner accents */}
        {/* <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-sky-200 dark:border-sky-800 rounded-tl-lg" />
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-sky-200 dark:border-sky-800 rounded-br-lg" /> */}

        {/* Card */}
        <div className="card p-8">
          {/* Header */}
          <div className="mb-8">
            <span className="label-text">Clinic Management</span>
            <h1 className="font-display text-3xl text-slate-800 dark:text-white mt-2">
              Add New Service
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Fill in the details below to list a new dental service.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Service Name */}
            <div>
              <label className="label-text block mb-1.5">Service Name</label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Teeth Whitening"
                className="input-field"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="label-text block mb-1.5">Price (KSH)</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-sm font-medium">
                  KSH
                </span>
                <input
                  type="number"
                  name="price"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="input-field pl-14"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="label-text block mb-1.5">Description</label>
              <textarea
                name="description"
                placeholder="Describe what this service involves, duration, and any preparation required..."
                rows={4}
                className="input-field resize-none"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* Poster Upload */}
            <div>
              <label className="label-text block mb-1.5">
                Service Poster{" "}
                <span className="text-slate-400 normal-case font-normal">
                  (optional)
                </span>
              </label>

              {/* Drop zone */}
              <label
                htmlFor="poster"
                className={[
                  "flex flex-col items-center justify-center gap-2 w-full rounded-xl border-2 border-dashed cursor-pointer transition-colors duration-200",
                  "border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-600",
                  preview ? "p-3" : "p-8",
                ].join(" ")}
              >
                {preview ? (
                  <div className="relative w-full">
                    <img
                      src={preview}
                      alt="Poster preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                      <span className="text-white text-sm font-medium">
                        Click to change
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/50 border border-sky-100 dark:border-sky-900/50 flex items-center justify-center">
                      <span className="text-2xl">🖼️</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Click to upload poster
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        PNG, JPG, WEBP up to 5MB
                      </p>
                    </div>
                  </>
                )}
                <input
                  id="poster"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
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
                {isSubmitting ? "Saving..." : "Add Service"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
