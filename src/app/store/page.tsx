import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, PageKicker } from "@/components/lyra/PageShell";
import { SITE } from "@/lib/site";
import { StoreGrid } from "./StoreGrid";

export const metadata: Metadata = {
  title: "Store — Lyra",
  description:
    "Store Lyra — cosmetic & QoL thuần, không bán sức mạnh. Cam kết non-P2W in thẳng vào store.",
};

const NEVER_SELL: readonly string[] = [
  "Gear / enchant / crate power",
  "Fly ngoài lobby",
  "Đất bằng tiền thật",
  "Tiền in-game",
  "Unban",
];

export default function StorePage() {
  return (
    <PageShell>
      <div style={{ textAlign: "center", marginBottom: 14 }}>
        <PageKicker>LYRA STORE</PageKicker>
        <h1
          className="font-display text-gradient-hero"
          style={{
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 48px)",
            margin: "0 0 12px",
          }}
        >
          Nâng cấp hành trình của bạn
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#9aa3b5",
            maxWidth: 480,
            margin: "0 auto 46px",
            lineHeight: 1.6,
          }}
        >
          Toàn bộ store là cosmetic &amp; QoL thuần — không bán sức mạnh. Mỗi
          đồng ủng hộ giữ thiên hà Lyra sáng đèn.
        </p>
      </div>

      <StoreGrid />

      <div
        style={{
          marginTop: 40,
          textAlign: "center",
          fontSize: 12.5,
          color: "#626b7a",
          letterSpacing: ".04em",
        }}
      >
        Thanh toán P0 qua ticket Discord (VietQR / MoMo) · Giao dịch ghi log
        công khai tại{" "}
        <span style={{ color: "#8B5CF6" }}>#nap-log</span> · Hỗ trợ trên{" "}
        <Link href="/forums/" style={{ color: "#8B5CF6" }}>
          Forums
        </Link>{" "}
        và{" "}
        <a href={SITE.discord} style={{ color: "#8B5CF6" }}>
          Discord
        </a>
      </div>

      <section style={{ marginTop: 70 }}>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(24,12,15,.9), rgba(11,15,26,.92))",
            border: "1px solid rgba(248,113,113,.35)",
            borderRadius: 22,
            padding: "34px 34px 28px",
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: "#f87171",
              fontWeight: 700,
              letterSpacing: ".26em",
              marginBottom: 8,
            }}
          >
            CAM KẾT NON-P2W
          </div>
          <h2
            className="font-display"
            style={{
              fontWeight: 900,
              fontSize: 24,
              margin: "0 0 18px",
              color: "#f87171",
            }}
          >
            KHÔNG BAO GIỜ BÁN
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 22,
            }}
          >
            {NEVER_SELL.map((item) => (
              <span
                key={item}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid rgba(248,113,113,.3)",
                  background: "rgba(248,113,113,.07)",
                  color: "#b9c1d1",
                  borderRadius: 999,
                  padding: "9px 16px",
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "#f87171", fontWeight: 700 }}>✕</span>
                {item}
              </span>
            ))}
          </div>
          <p
            style={{
              fontSize: 14,
              color: "#b9c1d1",
              lineHeight: 1.7,
              margin: "0 0 18px",
              borderLeft: "3px solid #f87171",
              paddingLeft: 14,
            }}
          >
            Cam kết non-P2W in thẳng vào store — vi phạm là phá sản niềm tin,
            và niềm tin là sản phẩm của Lyra.
          </p>
          <div
            style={{
              borderTop: "1px solid rgba(248,113,113,.2)",
              paddingTop: 14,
              fontSize: 12.5,
              color: "#626b7a",
              lineHeight: 1.6,
            }}
          >
            Town nhóm ≥3 thành viên liên kết Discord được hoàn 50% phí lập town
            — chính sách miễn phí, không phải hàng bán.
          </div>
        </div>
      </section>
    </PageShell>
  );
}
