import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, PageKicker, PageTitle } from "@/components/lyra/PageShell";

export const metadata: Metadata = {
  title: "Nội quy — Lyra",
  description:
    "6 luật chơi của server Survival Towny Lyra — tôn trọng, không P2W, không cheat, không grief, chợ & plot, Discord. Vi phạm xử lý theo LibertyBans, khiếu nại qua Discord ticket.",
};

type RuleGroup = {
  readonly h: string;
  readonly items: readonly string[];
};

type PenaltyRow = {
  readonly label: string;
  readonly text: string;
};

const RULE_GROUPS: readonly RuleGroup[] = [
  {
    h: "1. Tôn trọng",
    items: [
      "Không xúc phạm, ngôn từ thù ghét hay công kích người chơi khác.",
      "Không lừa đảo dưới mọi hình thức.",
      "Không quấy rối, làm phiền người khác — trong game, Forums hay Discord.",
    ],
  },
  {
    h: "2. Không P2W",
    items: [
      "Cấm mua bán vật phẩm, tiền in-game hay tài khoản bằng tiền thật giữa người chơi (RMT).",
      "Về phía server: Lyra không bao giờ bán đồ, enchant, sức mạnh crate, fly, đất, tiền in-game hay unban.",
    ],
  },
  {
    h: "3. Không cheat",
    items: [
      "Cấm X-ray, fly hack và mọi client hack.",
      "Cấm auto-click, macro.",
      "Cấm dupe vật phẩm — phát hiện lỗi hãy báo staff, không lợi dụng.",
    ],
  },
  {
    h: "4. Không grief",
    items: [
      "Không phá nhà, công trình của người chơi khác.",
      "Không phá plot trong town của người khác.",
    ],
  },
  {
    h: "5. Chợ & plot",
    items: [
      "Buôn bán trong khu vực được cho phép.",
      "Claim đất bằng Towny đúng nơi quy định.",
    ],
  },
  {
    h: "6. Discord",
    items: [
      "Cần staff hỗ trợ (báo grief, báo lỗi, khiếu nại)? Mở ticket ở kênh hỗ trợ trên Discord.",
      "Nội quy này áp dụng cả trong Discord của Lyra.",
    ],
  },
];

const PENALTY_ROWS: readonly PenaltyRow[] = [
  {
    label: "Vi phạm",
    text: "Cảnh cáo / mute / ban tùy mức độ — xử lý theo LibertyBans.",
  },
  {
    label: "Khiếu nại",
    text: "Mở ticket trên Discord, staff phản hồi trong 48 giờ.",
  },
];

export default function RulesPage() {
  return (
    <PageShell>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <PageKicker>LUẬT CHƠI</PageKicker>
        <PageTitle>Nội quy Lyra</PageTitle>
        <p
          style={{
            fontSize: 14.5,
            color: "#9aa3b5",
            lineHeight: 1.7,
            margin: "8px 0 40px",
          }}
        >
          Áp dụng cho toàn bộ server Survival Towny — chat trong game, Forums và
          Discord. Không biết luật không phải lý do miễn phạt.
        </p>
        {RULE_GROUPS.map((g) => (
          <div
            key={g.h}
            className="card-dark"
            style={{
              marginBottom: 30,
              borderRadius: 18,
              padding: "26px 30px",
            }}
          >
            <h2
              className="font-display"
              style={{
                fontWeight: 700,
                fontSize: 17,
                margin: "0 0 16px",
                color: "#E6EBF4",
              }}
            >
              {g.h}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {g.items.map((r) => (
                <div
                  key={r}
                  style={{
                    display: "flex",
                    gap: 12,
                    fontSize: 14,
                    color: "#b9c1d1",
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: "#8B5CF6", flexShrink: 0 }}>✦</span>
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div
          style={{
            background: "rgba(240,201,107,.06)",
            border: "1px solid rgba(240,201,107,.3)",
            borderRadius: 18,
            padding: "26px 30px",
          }}
        >
          <h2
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: 17,
              margin: "0 0 16px",
              color: "#f0c96b",
            }}
          >
            Xử lý vi phạm
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "10px 22px",
              fontSize: 14,
              color: "#b9c1d1",
              lineHeight: 1.6,
            }}
          >
            {PENALTY_ROWS.map((row) => (
              <div key={row.label} style={{ display: "contents" }}>
                <span style={{ fontWeight: 700, color: "#E6EBF4" }}>
                  {row.label}
                </span>
                <span>{row.text}</span>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: 13,
              color: "#626b7a",
              margin: "18px 0 0",
              lineHeight: 1.6,
            }}
          >
            Khiếu nại kèm IGN + thời gian bị phạt để staff xử lý nhanh hơn. Xem
            các lệnh phạt hiện có tại{" "}
            <Link href="/bans/" style={{ color: "#9aa3b5", textDecoration: "underline" }}>
              Bảng ban
            </Link>
            .
          </p>
        </div>
      </div>
    </PageShell>
  );
}
