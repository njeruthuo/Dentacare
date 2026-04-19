// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, DM_Serif_Display } from "next/font/google";
import "./globals.css";

import ReduxProvider from "@/store/provider";

// Body font — clean, modern, medical-grade feel
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Display font — elegant for headings
const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "DentaCare | Your Smile, Our Passion",
    template: "%s | DentaCare",
  },
  description:
    "World-class dental care with a gentle touch. Combining advanced technology with compassionate care.",
  keywords: ["dental", "dentist", "clinic", "oral care", "smile"],
  authors: [{ name: "DentaCare Clinic" }],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

<Script
  id="theme-init"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function () {
        try {
          var stored = localStorage.getItem('theme');
          var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (stored === 'dark' || (!stored && prefersDark)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } catch (_) {}
      })();
    `,
  }}
/>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // `class` instead of className because this is the html element.
      // Tailwind's dark mode via 'class' strategy — add 'dark' to toggle.
      className={`${outfit.variable} ${dmSerif.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Inline script to apply dark/light class before first paint
          — prevents flash of wrong theme.
        */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        /> */}
      </head>
      <body
        className={[
          "min-h-full flex flex-col",
          // Base background & text
          "bg-white dark:bg-slate-950",
          "text-slate-800 dark:text-slate-100",
          // Font
          "font-sans",
          // Smooth color transitions when toggling dark mode
          "transition-colors duration-300",
        ].join(" ")}
      >
        {/* Global ambient glow — top left */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/60 dark:bg-sky-950/40 blur-3xl z-0"
        />

        {/* Global ambient glow — bottom right */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed bottom-0 right-0 w-[500px] h-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-100/50 dark:bg-cyan-950/30 blur-3xl z-0"
        />

        {/* Page content sits above glows */}
        <ReduxProvider>
          <div className="relative z-10 flex flex-col flex-1">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
