import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập | Lyra Survival",
  description: "Đăng nhập Lyra Survival.",
  robots: { index: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
