"use client";

import Link from "next/link";
import { useState } from "react";

const adminActions = [
  {
    href: "/addservice",
    icon: (
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
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    ),
    label: "Add Service",
    description: "List a new dental service",
    accent: "sky",
  },
  {
    href: "/addworker",
    icon: (
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
          d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
        />
      </svg>
    ),
    label: "Add Worker",
    description: "Register a dental team member",
    accent: "cyan",
  },
  {
    href: "/appointments",
    icon: (
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
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>
    ),
    label: "Appointments",
    description: "Manage bookings & schedule",
    accent: "indigo",
  },
];

export default function AdminPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Action cards — slide up when open */}
      <div
        className={[
          "flex flex-col gap-2 transition-all duration-300 origin-bottom",
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none",
        ].join(" ")}
      >
        {adminActions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700/60 rounded-2xl px-4 py-3 shadow-lg hover:shadow-brand-sm hover:-translate-y-0.5 transition-all duration-200 group min-w-[220px]"
          >
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-${action.accent}-50 dark:bg-${action.accent}-950/50 border border-${action.accent}-100 dark:border-${action.accent}-900/50 text-${action.accent}-600 dark:text-${action.accent}-400 group-hover:bg-${action.accent}-600 group-hover:border-${action.accent}-600 group-hover:text-white transition-colors duration-200`}
            >
              {action.icon}
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-none mb-0.5">
                {action.label}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500">
                {action.description}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close admin panel" : "Open admin panel"}
        className={[
          "w-14 h-14 rounded-2xl flex items-center justify-center shadow-brand transition-all duration-300",
          open
            ? "bg-slate-800 dark:bg-slate-700 rotate-45"
            : "bg-sky-600 hover:bg-sky-700",
        ].join(" ")}
      >
        {/* Shield icon — admin feel */}
        {open ? (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
        )}
      </button>

      {/* Tooltip label */}
      {!open && (
        <span className="absolute right-16 bottom-3.5 text-xs font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-lg px-2.5 py-1.5 shadow-sm pointer-events-none">
          Admin Panel
        </span>
      )}
    </div>
  );
}
