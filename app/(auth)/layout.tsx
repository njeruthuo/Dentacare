import type { Metadata } from "next";
import AuthLayoutClient from "./AuthLayout";

export const metadata: Metadata = {
  title: "DentaCare | Your Smile, Our Passion",
  description: "Premium dental care management",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayoutClient>{children}</AuthLayoutClient>;
}
