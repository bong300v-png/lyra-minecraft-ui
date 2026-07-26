"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

type StoreSku = {
  id: "donate" | "plus" | "badge";
  tier: string;
  name: string;
  nameSize: number;
  price?: string;
  priceSuffix?: string;
  modalPrice?: string;
  tint: string;
  border: string;
  hot: boolean;
  btnBg: string;
  btnFg: string;
  btnLabel: string;
  perks: readonly string[];
  note?: string;
};

const DONATION_AMOUNTS = [
  { chip: "20K", full: "20.000" },
  { chip: "50K", full: "50.000" },
  { chip: "100K", full: "100.000" },
] as const;

type DonationAmount = (typeof DONATION_AMOUNTS)[number];

const SKUS: readonly StoreSku[] = [
  {
    id: "donate",
    tier: "ỦNG HỘ · MỘT LẦN",
    name: "Ủng Hộ",
    nameSize: 30,
    tint: "#E6EBF4",
    border: "#23232b",
    hot: false,
    btnBg: "rgba(230,235,244,.1)",
    btnFg: "#E6EBF4",
    btnLabel: "ỦNG HỘ LYRA",
    perks: [
      "Tên bạn trong /donors trên server",
      "Role Discord «Người Ủng Hộ»",
      "Không item, không sức mạnh — chỉ là lời cảm ơn",
    ],
  },
  {
    id: "plus",
    tier: "GÓI THÁNG · QOL",
    name: "Lyra+",
    nameSize: 30,
    price: "49K",
    priceSuffix: "VNĐ / tháng",
    modalPrice: "49.000 VNĐ / tháng",
    tint: "#8B5CF6",
    border: "rgba(139,92,246,.55)",
    hot: true,
    btnBg: "#8B5CF6",
    btnFg: "#fff",
    btnLabel: "MUA LYRA+",
    perks: [
      `Skip hàng đợi khi full ${SITE.maxSlots} slot`,
      "/hat — đội block yêu thích lên đầu",
      "Particle cosmetic quanh người",
      "Màu chat tuỳ chọn",
    ],
    note: "QoL thuần — không sức mạnh.",
  },
  {
    id: "badge",
    tier: "GIỚI HẠN THEO MÙA",
    name: `Badge Mùa ${SITE.season.name}`,
    nameSize: 21,
    price: "30K",
    priceSuffix: "VNĐ · giới hạn mùa",
    modalPrice: "30.000 VNĐ · giới hạn mùa",
    tint: "#f0c96b",
    border: "rgba(240,201,107,.45)",
    hot: false,
    btnBg: "rgba(240,201,107,.9)",
    btnFg: "#1a1508",
    btnLabel: "MUA BADGE",
    perks: [
      `Badge ✿ mùa ${SITE.season.name} trên TAB & chat`,
      "Bản giới hạn — hết mùa không bán lại",
      "Thuần cosmetic, không sức mạnh",
    ],
  },
];

export function StoreGrid() {
  const [checkout, setCheckout] = useState<StoreSku | null>(null);
  const [amount, setAmount] = useState<DonationAmount>(DONATION_AMOUNTS[0]);

  useEffect(() => {
    if (!checkout) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCheckout(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [checkout]);

  const modalPriceLabel = (s: StoreSku): string =>
    s.id === "donate" ? `${amount.full} VNĐ · một lần` : (s.modalPrice ?? "");

  return (
    <>
      <style>{`.store-buy:hover{filter:brightness(1.12)}.store-x:hover{color:#fff}`}</style>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        {SKUS.map((s) => (
          <div
            key={s.id}
            style={{
              background:
                "linear-gradient(180deg, rgba(16,16,22,.92), rgba(11,15,26,.92))",
              border: `1px solid ${s.border}`,
              borderRadius: 22,
              padding: "34px 30px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {s.hot && (
              <span
                style={{
                  position: "absolute",
                  top: 18,
                  right: 18,
                  background: "#8B5CF6",
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  padding: "5px 12px",
                  borderRadius: 999,
                  animation: "glowpulse 2.5s ease-in-out infinite",
                }}
              >
                BÁN CHẠY
              </span>
            )}
            <div
              style={{
                fontSize: 12,
                color: s.tint,
                fontWeight: 700,
                letterSpacing: ".26em",
                marginBottom: 8,
              }}
            >
              {s.tier}
            </div>
            <div
              className="font-display"
              style={{
                fontWeight: 900,
                fontSize: s.nameSize,
                lineHeight: 1.25,
                marginBottom: 4,
                color: s.tint,
              }}
            >
              {s.name}
            </div>

            {s.id === "donate" ? (
              <>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 8,
                    margin: "6px 0 8px",
                  }}
                >
                  {DONATION_AMOUNTS.map((a) => (
                    <button
                      key={a.chip}
                      onClick={() => setAmount(a)}
                      style={{
                        border: `1px solid ${
                          amount.chip === a.chip ? "#8B5CF6" : "#2a2a34"
                        }`,
                        background:
                          amount.chip === a.chip
                            ? "rgba(139,92,246,.16)"
                            : "rgba(230,235,244,.04)",
                        color: "#E6EBF4",
                        borderRadius: 12,
                        padding: "10px 0",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: ".04em",
                        cursor: "pointer",
                      }}
                    >
                      {a.chip}
                    </button>
                  ))}
                </div>
                <div
                  style={{ fontSize: 12, color: "#626b7a", marginBottom: 22 }}
                >
                  VNĐ · một lần, không định kỳ
                </div>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 6,
                  marginBottom: 22,
                }}
              >
                <span
                  className="font-display"
                  style={{ fontWeight: 700, fontSize: 26 }}
                >
                  {s.price}
                </span>
                <span style={{ fontSize: 12, color: "#626b7a" }}>
                  {s.priceSuffix}
                </span>
              </div>
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 11,
                marginBottom: 28,
                flex: 1,
              }}
            >
              {s.perks.map((p) => (
                <div
                  key={p}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 13.5,
                    color: "#b9c1d1",
                  }}
                >
                  <span style={{ color: s.tint, fontWeight: 700 }}>✦</span>
                  {p}
                </div>
              ))}
            </div>

            {s.note && (
              <div
                style={{
                  marginTop: -14,
                  marginBottom: 26,
                  border: "1px solid rgba(139,92,246,.35)",
                  background: "rgba(139,92,246,.08)",
                  color: "#8B5CF6",
                  borderRadius: 10,
                  padding: "8px 12px",
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                }}
              >
                {s.note}
              </div>
            )}

            <button
              className="store-buy"
              onClick={() => setCheckout(s)}
              style={{
                textAlign: "center",
                background: s.btnBg,
                color: s.btnFg,
                border: "none",
                padding: "13px 0",
                borderRadius: 12,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: ".1em",
                cursor: "pointer",
                transition: "filter .25s ease",
              }}
            >
              {s.btnLabel}
            </button>
          </div>
        ))}
      </div>

      {checkout && (
        <div
          onClick={() => setCheckout(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(4,6,12,.78)",
            backdropFilter: "blur(6px)",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 440,
              maxWidth: "100%",
              background: "linear-gradient(180deg, #14141c, #0b0f1a)",
              border: "1px solid rgba(139,92,246,.4)",
              borderRadius: 22,
              padding: "34px 34px 30px",
              animation: "modalin .35s cubic-bezier(.2,.7,.2,1)",
              position: "relative",
            }}
          >
            <button
              className="store-x"
              aria-label="Đóng"
              onClick={() => setCheckout(null)}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "none",
                border: "none",
                color: "#626b7a",
                fontSize: 18,
                cursor: "pointer",
                padding: 6,
                transition: "color .25s ease",
              }}
            >
              ✕
            </button>
            <div
              style={{
                fontSize: 11,
                color: "#8B5CF6",
                fontWeight: 700,
                letterSpacing: ".26em",
                marginBottom: 6,
              }}
            >
              THANH TOÁN · GIAI ĐOẠN P0
            </div>
            <div
              className="font-display"
              style={{ fontWeight: 900, fontSize: 22, marginBottom: 6 }}
            >
              {checkout.name}
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                color:
                  checkout.tint === "#E6EBF4" ? "#8B5CF6" : checkout.tint,
                marginBottom: 16,
              }}
            >
              {modalPriceLabel(checkout)}
            </div>
            <p
              style={{
                fontSize: 13.5,
                color: "#9aa3b5",
                lineHeight: 1.7,
                margin: "0 0 18px",
              }}
            >
              Giai đoạn P0, thanh toán làm thủ công: mở ticket trên Discord,
              chuyển khoản qua{" "}
              <strong style={{ color: "#E6EBF4" }}>VietQR</strong> hoặc{" "}
              <strong style={{ color: "#E6EBF4" }}>MoMo</strong>, đội ngũ xác
              nhận và kích hoạt. Mọi giao dịch được ghi log công khai tại{" "}
              <code
                style={{
                  background: "rgba(139,92,246,.12)",
                  color: "#8B5CF6",
                  padding: "1px 7px",
                  borderRadius: 6,
                  fontSize: 12.5,
                }}
              >
                #nap-log
              </code>
              .
            </p>
            <a
              className="store-buy"
              href={SITE.discord}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                width: "100%",
                boxSizing: "border-box",
                textAlign: "center",
                background: "#8B5CF6",
                color: "#fff",
                borderRadius: 12,
                padding: "15px 0",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: ".12em",
                boxShadow: "0 8px 30px rgba(139,92,246,.4)",
                transition: "filter .25s ease",
              }}
            >
              MỞ TICKET DISCORD
            </a>
            <div
              style={{
                textAlign: "center",
                marginTop: 14,
                fontSize: 11.5,
                color: "#626b7a",
                lineHeight: 1.6,
              }}
            >
              Không kích hoạt tự động — người thật xác nhận từng đơn.
              <br />
              Bằng việc mua, bạn đồng ý{" "}
              <Link href="/terms/" style={{ color: "#8B5CF6" }}>
                Điều khoản
              </Link>{" "}
              của Lyra.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
