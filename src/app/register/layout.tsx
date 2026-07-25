import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký | Lyra Survival",
  description: "Đăng ký Lyra Survival.",
  robots: { index: false },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
