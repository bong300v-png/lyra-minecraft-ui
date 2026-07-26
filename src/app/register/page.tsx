import type { Metadata } from "next";
import { PageShell } from "@/components/lyra/PageShell";
import { AuthCard } from "../login/AuthCard";

export const metadata: Metadata = {
  title: "Đăng ký — Lyra",
  description:
    "Tạo tài khoản Lyra. Tài khoản game tạo trực tiếp trong server bằng /register khi vào play.lyra.host — cổng web sẽ mở sau.",
};

export default function RegisterPage() {
  return (
    <PageShell>
      <div
        style={{
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 0 40px",
        }}
      >
        <AuthCard initialTab="register" />
      </div>
    </PageShell>
  );
}
