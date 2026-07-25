import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập | Lyra Pixelmon",
  description: "Đăng nhập diễn đàn Lyra (UI demo).",
  robots: { index: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
