"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export type AuthTab = "login" | "register";

interface TabCopy {
  title: string;
  subtitle: string;
  cta: string;
}

const TAB_COPY: Record<AuthTab, TabCopy> = {
  login: {
    title: "Chào mừng trở lại",
    subtitle: "Đăng nhập bằng tên trong game của bạn",
    cta: "VÀO THIÊN HÀ ✦",
  },
  register: {
    title: "Tạo tài khoản Lyra",
    subtitle: "Một tài khoản cho cả ba thế giới",
    cta: "TẠO TÀI KHOẢN ✦",
  },
};

const DEMO_NOTICE = `Tài khoản game tạo trực tiếp trong server bằng /register khi vào ${SITE.ip} — cổng web sẽ mở sau.`;

const TAB_BUTTON_BASE: CSSProperties = {
  flex: 1,
  border: "none",
  borderRadius: 9,
  padding: "9px 0",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: ".08em",
  cursor: "pointer",
  transition: "background .25s ease, color .25s ease",
};

export function AuthCard({ initialTab = "login" }: { initialTab?: AuthTab }) {
  const [tab, setTab] = useState<AuthTab>(initialTab);
  const [showNotice, setShowNotice] = useState(false);
  const isRegister = tab === "register";
  const copy = TAB_COPY[tab];

  const switchTab = (next: AuthTab) => {
    setTab(next);
    setShowNotice(false);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowNotice(true);
  };

  return (
    <div style={{ width: 420, maxWidth: "100%" }}>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(16,16,22,.94), rgba(11,15,26,.94))",
          border: "1px solid rgba(139,92,246,.3)",
          borderRadius: 24,
          padding: "40px 38px",
          backdropFilter: "blur(10px)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <Image
            src="/images/lyra-logo-transparent.svg"
            alt="Lyra"
            width={64}
            height={64}
            style={{
              borderRadius: 16,
              marginBottom: 14,
              boxShadow: "0 0 40px rgba(139,92,246,.35)",
            }}
          />
          <h1
            className="font-display"
            style={{ fontWeight: 700, fontSize: 22, margin: "0 0 6px" }}
          >
            {copy.title}
          </h1>
          <p style={{ fontSize: 13, color: "#9aa3b5", margin: 0 }}>
            {copy.subtitle}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            background: "rgba(230,235,244,.06)",
            borderRadius: 12,
            padding: 4,
            marginBottom: 24,
          }}
        >
          <button
            type="button"
            onClick={() => switchTab("login")}
            style={{
              ...TAB_BUTTON_BASE,
              background: isRegister ? "transparent" : "#8B5CF6",
              color: isRegister ? "#9aa3b5" : "#fff",
            }}
          >
            ĐĂNG NHẬP
          </button>
          <button
            type="button"
            onClick={() => switchTab("register")}
            style={{
              ...TAB_BUTTON_BASE,
              background: isRegister ? "#8B5CF6" : "transparent",
              color: isRegister ? "#fff" : "#9aa3b5",
            }}
          >
            ĐĂNG KÝ
          </button>
        </div>

        <form
          onSubmit={onSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          <input
            type="text"
            name="ign"
            placeholder="Tên trong game (IGN)"
            autoComplete="username"
            className="input-dark"
          />
          {isRegister && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              className="input-dark"
            />
          )}
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            autoComplete={isRegister ? "new-password" : "current-password"}
            className="input-dark"
          />
          <button
            type="submit"
            className="btn-vega"
            style={{
              borderRadius: 12,
              padding: "14px 0",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14,
              letterSpacing: ".12em",
              boxShadow: "0 8px 30px rgba(139,92,246,.4)",
              marginTop: 6,
            }}
          >
            {copy.cta}
          </button>
          {showNotice && (
            <div
              role="status"
              style={{
                background: "rgba(139,92,246,.1)",
                border: "1px solid rgba(139,92,246,.4)",
                borderRadius: 12,
                padding: "12px 16px",
                fontSize: 12.5,
                color: "#9aa3b5",
                lineHeight: 1.7,
                animation: "modalin .35s ease",
              }}
            >
              {DEMO_NOTICE}
            </div>
          )}
        </form>

        <div
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 12,
            color: "#626b7a",
            lineHeight: 1.7,
          }}
        >
          Cổng web sắp mở — nơi nhận thưởng vote,
          <br />
          quản lý hồ sơ và đồng bộ cosmetic trên toàn thiên hà.
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 26 }}>
        <Link
          href="/"
          style={{ fontSize: 13, color: "#9aa3b5", letterSpacing: ".06em" }}
        >
          ← Về trang chủ
        </Link>
        <div style={{ marginTop: 10, fontSize: 12.5, color: "#626b7a" }}>
          Cần trợ giúp? Ghé{" "}
          <a href={SITE.discord} style={{ color: "#8B5CF6", fontWeight: 700 }}>
            Discord
          </a>{" "}
          của Lyra nhé.
        </div>
      </div>
    </div>
  );
}
