"use client";

import { useCreateReviewMutation } from "@/store/api/serviceApi";
import { getDentalID, getUserID } from "@/store/utils/getAuthState";
import { ReviewFormData } from "@/types/service";
import { useState } from "react";

const initialReviewState: ReviewFormData = {
  description: "",
  rating: 0,
};

const STAR_LABELS = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

const AddReview = () => {
  const [createReview] = useCreateReviewMutation();
  const [formData, setFormData] = useState<ReviewFormData>(initialReviewState);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleStarClick = (star: number) => {
    setFormData((prev) => ({ ...prev, rating: star }));
  };

  const clearState = () => {
    setFormData(initialReviewState);
    setHoveredStar(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) return;
    setIsSubmitting(true);
    try {
      await createReview({
        ...formData,
        dental: getDentalID(),
        user: getUserID(),
      }).unwrap();
      clearState();
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayRating = hoveredStar || formData.rating;

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
              Leave a Review
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Share your experience to help others make informed decisions.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Star Rating */}
            <div>
              <label className="label-text block mb-3">Your Rating</label>
              <div className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/40 px-6 py-5">
                {/* Stars row */}
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="transition-transform duration-100 hover:scale-110 focus:outline-none"
                      aria-label={`Rate ${star} out of 5`}
                    >
                      <svg
                        className="w-9 h-9 transition-colors duration-100"
                        viewBox="0 0 24 24"
                        fill={star <= displayRating ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth={1.5}
                        style={{
                          color:
                            star <= displayRating
                              ? "#f59e0b"
                              : "var(--color-slate-300, #cbd5e1)",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    </button>
                  ))}
                </div>

                {/* Label */}
                <div className="h-5">
                  {displayRating > 0 ? (
                    <p className="text-sm font-medium text-amber-500">
                      {displayRating}/5 —{" "}
                      <span className="text-slate-600 dark:text-slate-300">
                        {STAR_LABELS[displayRating]}
                      </span>
                    </p>
                  ) : (
                    <p className="text-sm text-slate-400 dark:text-slate-500">
                      Click a star to rate
                    </p>
                  )}
                </div>
              </div>
              {formData.rating === 0 && (
                <p className="text-xs text-rose-500 mt-1.5 pl-1">
                  A rating is required.
                </p>
              )}
            </div>

            {/* Review Text */}
            <div>
              <label className="label-text block mb-1.5">Your Review</label>
              <textarea
                name="description"
                placeholder="Tell others about your experience — the quality of care, staff friendliness, wait times, facilities…"
                rows={5}
                className="input-field resize-none"
                value={formData.description}
                onChange={handleChange}
                required
              />
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
                disabled={isSubmitting || formData.rating === 0}
                className="btn-primary flex-1 py-3 shadow-brand disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting…" : "Submit Review"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
