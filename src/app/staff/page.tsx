import type { Metadata } from "next";
import { PageShell, PageKicker } from "@/components/lyra/PageShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Đội Ngũ — Lyra",
  description:
    "Đội ngũ tình nguyện vận hành thiên hà Lyra. Đang tuyển Admin, Moderator và Builder qua Discord — quy trình staff công khai, appeal phản hồi trong 48 giờ.",
};

type Founder = {
  readonly name: string;
  readonly role: string;
  readonly desc: string;
};

type OpenRole = {
  readonly title: string;
  readonly badge: string;
  readonly desc: string;
};

const FOUNDER: Founder = {
  name: "Vega",
  role: "FOUNDER",
  desc: "Xây và vận hành toàn bộ thiên hà Lyra",
};

const OPEN_ROLES: readonly OpenRole[] = [
  {
    title: "Admin",
    badge: "ĐANG TUYỂN",
    desc: "Kỹ thuật, plugin, backup & chống cheat",
  },
  {
    title: "Moderator",
    badge: "ĐANG TUYỂN · 2 VỊ TRÍ",
    desc: "Xử lý report, giữ chat trong lành, hỗ trợ ticket",
  },
  {
    title: "Builder",
    badge: "ĐANG TUYỂN",
    desc: "Xây spawn, hub sự kiện & cổng thiên hà",
  },
];

function TierHeading({ label, color }: { label: string; color: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 18,
      }}
    >
      <span
        className="font-display"
        style={{
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: ".18em",
          color,
        }}
      >
        {label}
      </span>
      <span style={{ flex: 1, height: 1, background: "#1a1a22" }} />
    </div>
  );
}

const GRID_STYLE: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: 18,
};

export default function StaffPage() {
  return (
    <PageShell>
      <style>{`.staff-open-card:hover { border-color: rgba(139,92,246,.5); }`}</style>

      <div style={{ textAlign: "center", marginBottom: 46 }}>
        <PageKicker>ĐỘI NGŨ</PageKicker>
        <h1
          className="font-display"
          style={{
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 48px)",
            margin: "0 0 12px",
          }}
        >
          Những người giữ thiên hà
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#9aa3b5",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Lyra vận hành bởi đội ngũ tình nguyện, quy trình staff công khai —
          mọi appeal được phản hồi trong 48 giờ. Cần hỗ trợ? Ping staff trong
          game bằng /helpop hoặc mở ticket trên Discord.
        </p>
      </div>

      <div style={{ marginBottom: 40 }}>
        <TierHeading label="SÁNG LẬP" color="#8B5CF6" />
        <div style={GRID_STYLE}>
          <div
            className="card-dark"
            style={{
              borderRadius: 18,
              padding: 24,
              textAlign: "center",
            }}
          >
            <div
              className="font-display"
              style={{
                width: 72,
                height: 72,
                borderRadius: 14,
                margin: "0 auto 14px",
                background:
                  "linear-gradient(180deg, rgba(139,92,246,.28), rgba(139,92,246,.08))",
                border: "1px solid rgba(139,92,246,.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 30,
                color: "#8B5CF6",
              }}
            >
              V
            </div>
            <div style={{ fontWeight: 700, fontSize: 15.5 }}>
              {FOUNDER.name}
            </div>
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: ".16em",
                color: "#8B5CF6",
                marginTop: 5,
              }}
            >
              {FOUNDER.role}
            </div>
            <div
              style={{
                fontSize: 12.5,
                color: "#626b7a",
                marginTop: 9,
                lineHeight: 1.5,
              }}
            >
              {FOUNDER.desc}
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <TierHeading label="ĐANG TUYỂN" color="#9aa3b5" />
        <div style={GRID_STYLE}>
          {OPEN_ROLES.map((r) => (
            <div
              key={r.title}
              className="staff-open-card"
              style={{
                background: "rgba(16,16,22,.5)",
                border: "1px dashed #34343f",
                borderRadius: 18,
                padding: 24,
                textAlign: "center",
                transition: "border-color .3s ease",
              }}
            >
              <div
                className="font-display"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 14,
                  margin: "0 auto 14px",
                  background: "rgba(230,235,244,.03)",
                  border: "1px dashed #3a3a46",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 26,
                  color: "#626b7a",
                }}
              >
                ?
              </div>
              <div
                style={{ fontWeight: 700, fontSize: 15.5, color: "#d5dbe8" }}
              >
                {r.title}
              </div>
              <div
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  color: "#9aa3b5",
                  marginTop: 5,
                }}
              >
                {r.badge}
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  color: "#626b7a",
                  marginTop: 9,
                  lineHeight: 1.5,
                }}
              >
                {r.desc}
              </div>
              <a
                href={SITE.discord}
                className="btn-vega"
                style={{
                  display: "inline-block",
                  marginTop: 14,
                  fontSize: 11.5,
                  padding: "10px 16px",
                  borderRadius: 10,
                }}
              >
                ỨNG TUYỂN QUA DISCORD
              </a>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "rgba(139,92,246,.08)",
          border: "1px solid rgba(139,92,246,.35)",
          borderRadius: 18,
          padding: "26px 30px",
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: 260 }}>
          <div
            className="font-display"
            style={{ fontWeight: 700, fontSize: 17, marginBottom: 6 }}
          >
            Muốn gia nhập đội ngũ?
          </div>
          <div style={{ fontSize: 13.5, color: "#9aa3b5", lineHeight: 1.6 }}>
            Lyra là dự án tình nguyện — không lương, chỉ có thiên hà đẹp và
            cộng đồng tử tế. Yêu cầu: 16+, hoạt động ổn định, không tiền án
            ban. Quy trình xét duyệt công khai trên Discord.
          </div>
        </div>
        <a
          href={SITE.discord}
          className="btn-vega"
          style={{
            fontSize: 13,
            padding: "13px 26px",
            borderRadius: 12,
          }}
        >
          ỨNG TUYỂN →
        </a>
      </div>
    </PageShell>
  );
}
