import type { Metadata } from "next";
import { PageShell, PageKicker } from "@/components/lyra/PageShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vote — Lyra",
  description:
    "Hệ thống vote của Lyra mở cùng beta công khai (G1). Chuỗi vote đổi cosmetic + tiền in-game nhỏ — không bao giờ là sức mạnh.",
};

type VoteSite = {
  readonly n: string;
  readonly name: string;
  readonly lockNote: string;
};

const VOTE_SITES: readonly VoteSite[] = [
  { n: "01", name: "Site vote #1 — công bố khi mở", lockNote: "Mở khi beta công khai" },
  { n: "02", name: "Site vote #2 — công bố khi mở", lockNote: "Mở khi beta công khai" },
  { n: "03", name: "Site vote #3 — công bố khi mở", lockNote: "Mở khi beta công khai" },
];

type StreakReward = {
  readonly label: string;
  readonly color: string;
  readonly desc: string;
};

const STREAK_REWARDS: readonly StreakReward[] = [
  {
    label: "Mỗi vote",
    color: "#8B5CF6",
    desc: "một ít tiền in-game + điểm chuỗi",
  },
  {
    label: "Chuỗi 7 ngày",
    color: "#f0c96b",
    desc: "cosmetic (trail / danh hiệu) — không sức mạnh",
  },
  {
    label: "Top bảng tháng",
    color: "#c0c8d8",
    desc: "danh hiệu cosmetic độc quyền của tháng",
  },
];

type BoardSlot = { readonly rank: string; readonly color: string };

const BOARD_SLOTS: readonly BoardSlot[] = [
  { rank: "01", color: "#f0c96b" },
  { rank: "02", color: "#c0c8d8" },
  { rank: "03", color: "#a08556" },
  { rank: "04", color: "#626b7a" },
  { rank: "05", color: "#626b7a" },
];

export default function VotePage() {
  return (
    <PageShell>
      <div style={{ textAlign: "center" }}>
        <PageKicker>VOTE MỖI NGÀY — SẮP MỞ</PageKicker>
        <h1
          className="font-display text-gradient-hero"
          style={{
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 48px)",
            margin: "0 0 12px",
          }}
        >
          Vote thắp sáng thiên hà Lyra
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#9aa3b5",
            maxWidth: 520,
            margin: "0 auto 44px",
            lineHeight: 1.6,
          }}
        >
          Hệ thống vote mở cùng beta công khai (G1). Khi mở: chuỗi vote đổi
          lấy cosmetic + một ít tiền in-game — không bao giờ là sức mạnh.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          alignItems: "start",
        }}
      >
        {/* Cột trái — danh sách site vote (khóa) */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 12,
              color: "#9aa3b5",
              letterSpacing: ".2em",
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            SITE VOTE — MỞ Ở BETA CÔNG KHAI (G1)
          </div>
          {VOTE_SITES.map((site) => (
            <div
              key={site.name}
              style={{
                background:
                  "linear-gradient(180deg, rgba(16,16,22,.92), rgba(11,15,26,.92))",
                border: "1px solid #23232b",
                borderRadius: 16,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                opacity: 0.82,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "rgba(154,163,181,.08)",
                  border: "1px solid #23232b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  color: "#626b7a",
                }}
              >
                {site.n}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14.5,
                    color: "#b9c1d1",
                  }}
                >
                  {site.name}
                </div>
                <div style={{ fontSize: 11.5, color: "#626b7a" }}>
                  🔒 {site.lockNote}
                </div>
              </div>
              <button
                disabled
                style={{
                  border: "1px solid #23232b",
                  background: "rgba(230,235,244,.05)",
                  color: "#626b7a",
                  borderRadius: 10,
                  padding: "10px 22px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  cursor: "not-allowed",
                }}
              >
                SẮP MỞ
              </button>
            </div>
          ))}
          <div
            style={{
              background: "rgba(139,92,246,.08)",
              border: "1px solid rgba(139,92,246,.35)",
              borderRadius: 14,
              padding: "14px 18px",
              fontSize: 12.5,
              color: "#9aa3b5",
              lineHeight: 1.6,
            }}
          >
            ✦ Lyra đang closed beta ({SITE.maxSlots} slot) nên chưa đăng ký
            site vote. Khi mở, danh sách site sẽ cập nhật ngay tại đây và
            thông báo trên Discord.
          </div>
        </div>

        {/* Cột phải — bảng xếp hạng chờ + phần thưởng */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(16,16,22,.92), rgba(11,15,26,.92))",
              border: "1px solid #23232b",
              borderRadius: 18,
              padding: "24px 26px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: "#f0c96b",
                fontWeight: 700,
                letterSpacing: ".24em",
                marginBottom: 16,
              }}
            >
              🏆 BẢNG XẾP HẠNG VOTE THÁNG
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              {BOARD_SLOTS.map((slot) => (
                <div
                  key={slot.rank}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: slot.color,
                      width: 28,
                    }}
                  >
                    {slot.rank}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      borderBottom: "1px dashed #23232b",
                      height: 1,
                    }}
                  />
                  <span style={{ fontSize: 12.5, color: "#626b7a" }}>
                    chờ mở
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 14,
                fontSize: 12,
                color: "#626b7a",
                lineHeight: 1.6,
              }}
            >
              Bảng xếp hạng bắt đầu đếm từ khi vote mở — chưa có số liệu nào
              trước đó.
            </div>
          </div>

          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(16,16,22,.92), rgba(11,15,26,.92))",
              border: "1px solid #23232b",
              borderRadius: 18,
              padding: "24px 26px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: "#8B5CF6",
                fontWeight: 700,
                letterSpacing: ".24em",
                marginBottom: 14,
              }}
            >
              PHẦN THƯỞNG KHI VOTE MỞ
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontSize: 13.5,
                color: "#b9c1d1",
              }}
            >
              {STREAK_REWARDS.map((reward) => (
                <div key={reward.label}>
                  <span style={{ color: reward.color, fontWeight: 700 }}>
                    {reward.label}
                  </span>{" "}
                  — {reward.desc}
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 14,
                borderTop: "1px solid #23232b",
                paddingTop: 12,
                fontSize: 12,
                color: "#626b7a",
                lineHeight: 1.6,
              }}
            >
              Đúng cam kết non-P2W: thưởng vote chỉ là cosmetic + tiền
              in-game nhỏ, không gear, không sức mạnh.
            </div>
          </div>
        </div>
      </div>

      {/* CTA — theo dõi Discord */}
      <div
        style={{
          marginTop: 44,
          background:
            "linear-gradient(180deg, rgba(16,16,22,.92), rgba(11,15,26,.92))",
          border: "1px solid rgba(139,92,246,.35)",
          borderRadius: 18,
          padding: "30px 26px",
          textAlign: "center",
        }}
      >
        <div
          className="font-display"
          style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}
        >
          Muốn biết ngay khi vote mở?
        </div>
        <p
          style={{
            fontSize: 13.5,
            color: "#9aa3b5",
            maxWidth: 440,
            margin: "0 auto 18px",
            lineHeight: 1.6,
          }}
        >
          Mọi mốc của beta công khai — gồm ngày mở vote — đều thông báo trước
          trên Discord của Lyra.
        </p>
        <a
          href={SITE.discord}
          className="btn-vega"
          style={{
            display: "inline-block",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 13,
            padding: "13px 28px",
            borderRadius: 12,
            letterSpacing: ".08em",
          }}
        >
          THEO DÕI TRÊN DISCORD ↗
        </a>
      </div>
    </PageShell>
  );
}
