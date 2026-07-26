import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, PageKicker, PageTitle } from "@/components/lyra/PageShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Forums — Lyra",
  description:
    "Cộng đồng Lyra — thông báo, hướng dẫn AuthMe/Towny/QuickShop, tuyển crew Towny và hỗ trợ khiếu nại. Thảo luận realtime trên Discord.",
};

type ForumCategory = {
  readonly icon: string;
  readonly name: string;
  readonly desc: string;
  readonly threads: string;
};

type RecentThread = {
  readonly title: string;
  readonly by: string;
  readonly time: string;
};

const CATEGORIES: readonly ForumCategory[] = [
  {
    icon: "!",
    name: "Thông Báo",
    desc: "Tin chính thức từ đội ngũ Lyra",
    threads: "3",
  },
  {
    icon: "?",
    name: "Hướng Dẫn",
    desc: "AuthMe, Towny, QuickShop — từng bước một",
    threads: "3",
  },
  {
    icon: "⌂",
    name: "Towny & Tuyển Crew",
    desc: "Khoe town, tìm thành viên cùng phe",
    threads: "—",
  },
  {
    icon: "✉",
    name: "Hỗ Trợ & Khiếu Nại",
    desc: "Mở ticket, appeal ban trong 48 giờ",
    threads: "—",
  },
];

const RECENT: readonly RecentThread[] = [
  {
    title: "Chào mừng tới Lyra — đọc trước khi chơi",
    by: "Đội ngũ Lyra",
    time: "ghim",
  },
  {
    title: "Closed beta 20 slot — đăng ký qua Discord",
    by: "Đội ngũ Lyra",
    time: "ghim",
  },
  {
    title: "Lịch mùa Hoa Anh Đào & reset resource",
    by: "Đội ngũ Lyra",
    time: "ghim",
  },
];

export default function ForumsPage() {
  return (
    <PageShell>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
          marginBottom: 36,
        }}
      >
        <div>
          <PageKicker>FORUMS</PageKicker>
          <PageTitle>Cộng đồng Lyra</PageTitle>
        </div>
        <Link
          href="/login/"
          className="btn-vega"
          style={{
            padding: "12px 26px",
            borderRadius: 12,
            fontSize: 13,
          }}
        >
          + TẠO CHỦ ĐỀ
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 24,
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {CATEGORIES.map((c) => (
            <div
              key={c.name}
              className="card-dark"
              style={{
                borderRadius: 18,
                padding: "22px 26px",
                display: "flex",
                alignItems: "center",
                gap: 18,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: "rgba(139,92,246,.12)",
                  border: "1px solid rgba(139,92,246,.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  color: "#8B5CF6",
                  fontWeight: 700,
                }}
              >
                {c.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{ fontWeight: 700, fontSize: 16, marginBottom: 3 }}
                >
                  {c.name}
                </div>
                <div style={{ fontSize: 12.5, color: "#9aa3b5" }}>{c.desc}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  className="font-display"
                  style={{ fontWeight: 700, fontSize: 16 }}
                >
                  {c.threads}
                </div>
                <div
                  style={{
                    fontSize: 10.5,
                    color: "#626b7a",
                    letterSpacing: ".12em",
                  }}
                >
                  CHỦ ĐỀ
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              background: "rgba(139,92,246,.08)",
              border: "1px solid rgba(139,92,246,.35)",
              borderRadius: 18,
              padding: "22px 24px",
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
              MỚI NHẤT
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              {RECENT.map((t) => (
                <div key={t.title}>
                  <div
                    style={{
                      fontSize: 13.5,
                      fontWeight: 500,
                      color: "#d5dbe8",
                      lineHeight: 1.45,
                      marginBottom: 3,
                    }}
                  >
                    {t.title}
                  </div>
                  <div style={{ fontSize: 11, color: "#626b7a" }}>
                    {t.by} · {t.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "rgba(16,16,22,.92)",
              border: "1px solid #23232b",
              borderRadius: 18,
              padding: "22px 24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: "#9aa3b5",
                marginBottom: 12,
                lineHeight: 1.6,
              }}
            >
              Forums đang chạy chế độ đọc — thảo luận realtime trên Discord.
            </div>
            <a
              href={SITE.discord}
              className="btn-vega"
              style={{
                display: "inline-block",
                padding: "10px 26px",
                borderRadius: 10,
                fontSize: 13,
              }}
            >
              VÀO DISCORD
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
