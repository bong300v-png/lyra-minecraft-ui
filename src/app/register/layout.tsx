import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký | Lyra Pixelmon",
  description: "Đăng ký Lyra Pixelmon.",
  robots: { index: false },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
