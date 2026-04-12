import type { Metadata } from "next";
import GlobalLayout from "./GlobalLayout";

export const metadata: Metadata = {
  title: "DentaCare | Your Smile, Our Passion",
  description: "Premium dental care management",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GlobalLayout>{children}</GlobalLayout>;
}
