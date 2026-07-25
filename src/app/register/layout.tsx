import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký | Lyra Pixelmon",
  description: "Đăng ký diễn đàn Lyra (UI demo).",
  robots: { index: false },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
