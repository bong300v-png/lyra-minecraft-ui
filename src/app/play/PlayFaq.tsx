"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: readonly FaqItem[] = [
  {
    q: "Có cần tài khoản Minecraft premium không?",
    a: "Không. Lyra hỗ trợ bản crack qua AuthMe — vào server gõ /register <mật khẩu> <mật khẩu> lần đầu, các lần sau chỉ cần /login.",
  },
  {
    q: "Bedrock / MCPE khi nào vào được?",
    a: "Sắp mở — cổng Geyser đang thử nghiệm, chưa hoạt động. Theo dõi Discord để nhận thông báo ngay khi mở.",
  },
  {
    q: "Server có reset không?",
    a: `Town và công trình không bao giờ bị reset. Chỉ resource world reset theo mùa — mùa ${SITE.season.name} reset ${SITE.season.ends}, luôn báo trước ít nhất 7 ngày.`,
  },
  {
    q: "Lyra có P2W không?",
    a: "Không. Lyra không bao giờ bán đồ/enchant/crate sức mạnh, fly, đất, tiền in-game hay unban. Cam kết đầy đủ nằm ở trang Store.",
  },
  {
    q: "Server chạy phiên bản nào?",
    a: `${SITE.version} — client Java 1.26.x vào bình thường nhờ ViaVersion.`,
  },
];

export function PlayFaq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            style={{
              background: "rgba(16,16,22,.92)",
              border: `1px solid ${isOpen ? "rgba(139,92,246,.45)" : "#23232b"}`,
              borderRadius: 14,
              transition: "border-color .3s ease",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 14.5,
                color: "#E6EBF4",
                padding: "18px 22px",
              }}
            >
              {f.q}
              <span
                style={{
                  color: "#8B5CF6",
                  fontSize: 18,
                  lineHeight: 1,
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform .25s ease",
                  flexShrink: 0,
                }}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  fontSize: 13.5,
                  color: "#9aa3b5",
                  lineHeight: 1.6,
                  padding: "0 22px 18px",
                }}
              >
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
