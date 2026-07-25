import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in | Lyra Pixelmon",
  description: "Log in to Lyra forums (UI clone).",
  robots: { index: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
