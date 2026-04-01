import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DentaCare | Your Smile, Our Passion",
  description: "Premium dental care management",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
              <ToothIcon className="w-5 h-5 text-cyan-300" />
            </div>
            <span className="text-white font-semibold text-lg tracking-wide">
              DentaCare
            </span>
          </div>
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
        <div className="lg:hidden flex items-center gap-2 mb-10">
          <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center">
            <ToothIcon className="w-4 h-4 text-white" />
          </div>
          <span className="text-sky-700 dark:text-sky-400 font-semibold text-base tracking-wide">
            DentaCare
          </span>
        </div>

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

// Inline tooth SVG icon so no extra dependency needed
function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 4.5 4 4 3 5C1.5 6.5 2 9 3 11C4 13 4 15 4.5 17C5 19 6 22 7.5 22C9 22 9.5 20 10 18.5C10.5 17 11 16 12 16C13 16 13.5 17 14 18.5C14.5 20 15 22 16.5 22C18 22 19 19 19.5 17C20 15 20 13 21 11C22 9 22.5 6.5 21 5C20 4 18.5 4.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" />
    </svg>
  );
}
