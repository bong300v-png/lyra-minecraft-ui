import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/lyra/PageShell";
import { SITE } from "@/lib/site";
import { BansBoard } from "./BansBoard";

export const metadata: Metadata = {
  title: "Bảng ban — Lyra",
  description:
    "Bảng ban công khai của Lyra — kỷ luật minh bạch qua LibertyBans, mùa beta hiện chưa có lệnh ban nào. Kháng ban qua ticket Discord, phản hồi trong 48 giờ.",
};

interface PunishStep {
  readonly label: string;
  readonly color: string;
}

const PUNISH_STEPS: readonly PunishStep[] = [
  { label: "CẢNH CÁO", color: "#9aa3b5" },
  { label: "MUTE", color: "#f0c96b" },
  { label: "BAN", color: "#f87171" },
];

const CARD_STYLE: React.CSSProperties = {
  borderRadius: 18,
  padding: "24px 26px",
};

const CARD_TITLE_STYLE: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 16,
  margin: "0 0 10px",
  color: "#E6EBF4",
};

const CARD_BODY_STYLE: React.CSSProperties = {
  fontSize: 13.5,
  color: "#9aa3b5",
  lineHeight: 1.65,
  margin: 0,
};

const CARD_LINK_STYLE: React.CSSProperties = {
  display: "inline-block",
  marginTop: 14,
  fontSize: 12.5,
  fontWeight: 700,
  letterSpacing: ".08em",
};

export default function BansPage() {
  return (
    <PageShell>
      <div style={{ maxWidth: 864, margin: "0 auto" }}>
        <div
          style={{
            fontSize: 12,
            color: "#f87171",
            fontWeight: 700,
            letterSpacing: ".3em",
            marginBottom: 10,
          }}
        >
          MINH BẠCH XỬ PHẠT
        </div>
        <h1
          className="font-display"
          style={{
            fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 40px)",
            margin: "0 0 8px",
          }}
        >
          Bảng ban công khai
        </h1>
        <p
          style={{
            fontSize: 14.5,
            color: "#9aa3b5",
            lineHeight: 1.7,
            margin: "0 0 32px",
          }}
        >
          Mọi án phạt đều được ghi qua LibertyBans và công khai để cộng đồng
          giám sát. Kháng ban qua ticket Discord — phản hồi trong 48 giờ.
        </p>

        <BansBoard />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            margin: "40px 0 18px",
          }}
        >
          <span
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: ".18em",
              color: "#9aa3b5",
            }}
          >
            LYRA XỬ KỶ LUẬT THẾ NÀO
          </span>
          <span style={{ flex: 1, height: 1, background: "#1a1a22" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          <div className="card-dark" style={CARD_STYLE}>
            <h2 className="font-display" style={CARD_TITLE_STYLE}>
              Quy trình xử phạt
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 12,
              }}
            >
              {PUNISH_STEPS.map((s, i) => (
                <span
                  key={s.label}
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  {i > 0 && (
                    <span style={{ color: "#626b7a", fontSize: 12 }}>→</span>
                  )}
                  <span
                    style={{
                      border: "1px solid #23232b",
                      borderRadius: 999,
                      padding: "5px 12px",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: ".08em",
                      color: s.color,
                    }}
                  >
                    {s.label}
                  </span>
                </span>
              ))}
            </div>
            <p style={CARD_BODY_STYLE}>
              Mức phạt tăng dần theo mức độ và số lần tái phạm, ghi nhận qua
              LibertyBans. Vi phạm nghiêm trọng (cheat, dupe, lừa đảo) có thể
              ban thẳng.
            </p>
          </div>

          <div className="card-dark" style={CARD_STYLE}>
            <h2 className="font-display" style={CARD_TITLE_STYLE}>
              Kháng án trong 48 giờ
            </h2>
            <p style={CARD_BODY_STYLE}>
              Thấy án phạt chưa đúng? Mở ticket trên Discord kèm IGN và thời
              gian bị phạt — staff phản hồi trong vòng 48 giờ.
            </p>
            <a
              href={SITE.discord}
              style={{ ...CARD_LINK_STYLE, color: "#8B5CF6" }}
            >
              MỞ TICKET DISCORD →
            </a>
          </div>

          <div className="card-dark" style={CARD_STYLE}>
            <h2 className="font-display" style={CARD_TITLE_STYLE}>
              Log kỷ luật công khai
            </h2>
            <p style={CARD_BODY_STYLE}>
              Mọi lệnh cảnh cáo, mute hay ban đều hiện tại trang này — không
              xóa, không giấu án, để cộng đồng cùng giám sát đội ngũ.
            </p>
            <Link href="/rules/" style={{ ...CARD_LINK_STYLE, color: "#9aa3b5" }}>
              XEM NỘI QUY →
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
