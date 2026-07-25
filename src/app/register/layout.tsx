import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Lyra Pixelmon",
  description: "Register on Lyra forums (UI clone).",
  robots: { index: false },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
