"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

type ModeKey = "java" | "bedrock" | "tips";

interface ModeTab {
  key: ModeKey;
  name: string;
}

interface StepCard {
  n: string;
  t: string;
  d: string;
}

const MODE_TABS: readonly ModeTab[] = [
  { key: "java", name: "Java" },
  { key: "bedrock", name: "Bedrock (sắp mở)" },
  { key: "tips", name: "Mẹo mới vào" },
];

const STEPS_BY_MODE: Record<Exclude<ModeKey, "bedrock">, readonly StepCard[]> =
  {
    java: [
      {
        n: "01",
        t: "Mở Minecraft",
        d: `Java Edition — server chạy ${SITE.version}, client 1.26.x vào mượt nhờ ViaVersion. Bản crack vào được, không cần premium.`,
      },
      {
        n: "02",
        t: "Thêm server",
        d: `Multiplayer → Add Server → dán ${SITE.ip} (port ${SITE.javaPort}) rồi Done.`,
      },
      {
        n: "03",
        t: "Đăng nhập AuthMe",
        d: `Lần đầu gõ /register <mật khẩu> <mật khẩu>, lần sau chỉ cần /login. Beta kín ${SITE.maxSlots} slot — hẹn gặp giữa thiên hà.`,
      },
    ],
    tips: [
      {
        n: "01",
        t: "Đăng ký & nhận kit",
        d: "/register rồi /login xong là nhận ngay kit starter — đủ đồ nghề cho đêm đầu tiên giữa thiên hà.",
      },
      {
        n: "02",
        t: "Kiếm tiền với Jobs",
        d: "/jobs browse để chọn nghề. Đào mỏ, làm nông, chặt gỗ… làm gì cũng ra $ in-game.",
      },
      {
        n: "03",
        t: "Gom $1000 lập town",
        d: "Đủ $1000 là lập town riêng, claim $25/plot 16x16. Rủ ≥3 bạn liên kết Discord để được hoàn 50% phí lập town.",
      },
    ],
  };

export function PlayTabs() {
  const [mode, setMode] = useState<ModeKey>("java");

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginBottom: 30,
          flexWrap: "wrap",
        }}
      >
        {MODE_TABS.map((tab) => {
          const active = mode === tab.key;
          const dim = tab.key === "bedrock" && !active;
          return (
            <button
              key={tab.key}
              onClick={() => setMode(tab.key)}
              style={{
                border: "none",
                background: active ? "#8B5CF6" : "rgba(230,235,244,.05)",
                color: active ? "#fff" : dim ? "#626b7a" : "#9aa3b5",
                borderRadius: 999,
                padding: "10px 26px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: ".1em",
                cursor: "pointer",
                transition: "background .25s ease, color .25s ease",
              }}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      {mode === "bedrock" ? (
        <div
          style={{
            background: "rgba(139,92,246,.08)",
            border: "1px dashed rgba(139,92,246,.4)",
            borderRadius: 20,
            padding: "40px 30px",
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".25em",
              color: "#8B5CF6",
              border: "1px solid rgba(139,92,246,.5)",
              borderRadius: 999,
              padding: "6px 14px",
              marginBottom: 16,
            }}
          >
            SẮP MỞ
          </div>
          <div
            className="font-display"
            style={{ fontWeight: 900, fontSize: 22, marginBottom: 10 }}
          >
            Bedrock chưa vào được — nhưng sắp rồi
          </div>
          <p
            style={{
              fontSize: 14,
              color: "#9aa3b5",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Cổng Geyser cho Bedrock / MCPE đang được thử nghiệm và chưa hoạt
            động. Theo dõi{" "}
            <a
              href={SITE.discord}
              style={{ color: "#8B5CF6", fontWeight: 700 }}
            >
              Discord
            </a>{" "}
            để nhận thông báo ngay khi mở — trong lúc chờ, mời bạn vào bằng Java
            Edition nhé.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
            marginBottom: 60,
          }}
        >
          {STEPS_BY_MODE[mode].map((s) => (
            <div
              key={s.n}
              className="card-dark"
              style={{ borderRadius: 20, padding: "30px 26px" }}
            >
              <div
                className="font-display"
                style={{
                  fontWeight: 900,
                  fontSize: 34,
                  color: "#8B5CF6",
                  marginBottom: 14,
                }}
              >
                {s.n}
              </div>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>
                {s.t}
              </div>
              <div
                style={{ fontSize: 13.5, color: "#9aa3b5", lineHeight: 1.6 }}
              >
                {s.d}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
