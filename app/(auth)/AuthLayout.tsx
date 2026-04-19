"use client";

import LogoHead, { ToothIcon } from "@/components/LogoHead";
import MobileLogo from "@/components/MobileLogo";
import { RootState } from "@/store/store";
import type { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const metadata: Metadata = {
  title: "DentaCare | Your Smile, Our Passion",
  description: "Premium dental care management",
};

export default function AuthLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  return (
    <section className="relative min-h-screen flex bg-white dark:bg-slate-950 overflow-hidden">
      {/* ── Left panel (decorative) ── */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 bg-sky-950 dark:bg-slate-900 overflow-hidden">
        {/* Subtle geometric background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large soft circle */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-sky-800/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-700/20 blur-3xl" />

          {/* Decorative tooth SVG pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="tooth-pattern"
                x="0"
                y="0"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="40" cy="40" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tooth-pattern)" />
          </svg>

          {/* Decorative arcs */}
          <svg
            className="absolute bottom-0 left-0 w-full opacity-10"
            viewBox="0 0 600 200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 Q150,0 300,100 Q450,200 600,100 L600,200 L0,200 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <LogoHead />
        </div>

        {/* Center illustration */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Large decorative tooth */}
          <div className="relative mb-10">
            <div className="w-48 h-48 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
              <div className="w-36 h-36 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <ToothIcon className="w-20 h-20 text-white/80" />
              </div>
            </div>
            {/* Orbiting badges */}
            <div className="absolute -top-2 -right-2 bg-cyan-400 text-sky-950 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              ✓ Trusted
            </div>
            <div className="absolute -bottom-2 -left-2 bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20 backdrop-blur">
              Est. 2010
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white leading-snug mb-4">
            Your Perfect Smile
            <br />
            <span className="text-cyan-300">Starts Here</span>
          </h1>
          <p className="text-sky-200/70 text-sm leading-relaxed max-w-xs">
            World-class dental care with a gentle touch. We combine advanced
            technology with compassionate care for every patient.
          </p>
        </div>

        {/* Stats row */}
        <div className="relative z-10 grid grid-cols-3 gap-4">
          {[
            { value: "15K+", label: "Happy Patients" },
            { value: "98%", label: "Satisfaction" },
            { value: "25+", label: "Specialists" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-sky-200/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right panel (form) ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 sm:px-12 lg:px-16 bg-white dark:bg-slate-950">
        {/* Mobile logo */}
        <MobileLogo />

        {/* Subtle top accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100 dark:bg-sky-950/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

        {/* Form container */}
        <div className="relative w-full max-w-md">
          {/* Decorative corner marks */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-sky-200 dark:border-sky-800 rounded-tl-lg" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-sky-200 dark:border-sky-800 rounded-br-lg" />

          {children}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-xs text-slate-400 dark:text-slate-600 text-center">
          © {new Date().getFullYear()} DentaCare Clinic. All rights reserved.
          <br />
          <span className="text-slate-300 dark:text-slate-700">
            Secure & HIPAA Compliant
          </span>
        </p>
      </div>
    </section>
  );
}
