import type { Metadata } from "next";
import { PageShell, PageKicker, PageTitle } from "@/components/lyra/PageShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tin tức — Lyra",
  description:
    "Nhật ký thiên hà của Lyra — ra mắt website, closed beta 20 slot, mùa Hoa Anh Đào và lộ trình Bedrock của server Survival Towny.",
};

type NewsTag = {
  readonly label: string;
  readonly color: string;
  readonly bg: string;
};

type NewsPost = {
  readonly tag: NewsTag;
  readonly date: string;
  readonly title: string;
  readonly body: string;
  readonly cta?: { readonly href: string; readonly label: string };
};

const TAGS = {
  launch: { label: "RA MẮT", color: "#8B5CF6", bg: "rgba(139,92,246,.1)" },
  beta: { label: "BETA", color: "#f0c96b", bg: "rgba(240,201,107,.08)" },
  season: { label: "MÙA", color: "#f472b6", bg: "rgba(244,114,182,.08)" },
  roadmap: { label: "ROADMAP", color: "#4ade80", bg: "rgba(74,222,128,.08)" },
} as const satisfies Record<string, NewsTag>;

const POSTS: readonly NewsPost[] = [
  {
    tag: TAGS.launch,
    date: "26/07/2026",
    title: "Lyra chốt tên & lên sóng website mới",
    body: `Server chính thức mang tên Lyra — đặt theo chòm sao Thiên Cầm, cây đàn sáng giữa trời hè. Website mới lên sóng hôm nay với bộ nhận diện thiên hà tím, và địa chỉ duy nhất để vào chơi: ${SITE.ip} (cổng ${SITE.javaPort}).`,
  },
  {
    tag: TAGS.beta,
    date: "26/07/2026",
    title: `Closed beta ${SITE.maxSlots} slot — đăng ký qua Discord`,
    body: `Lyra mở closed beta giới hạn ${SITE.maxSlots} slot cho Survival Towny (${SITE.version}). Java cracked — vào game gõ /register rồi /login là chơi ngay. Kinh tế Towny đã khoá giá: lập town $1.000, claim $25 mỗi plot 16×16, town nhóm từ 3 thành viên liên kết Discord được hoàn 50% phí lập. Không P2W — store không bao giờ bán sức mạnh.`,
    cta: { href: SITE.discord, label: "Vào Discord nhận slot →" },
  },
  {
    tag: TAGS.season,
    date: "26/07/2026",
    title: `Mùa ${SITE.season.name} — resource world reset ${SITE.season.ends}`,
    body: `Resource world của mùa ${SITE.season.name} sẽ được làm mới vào ${SITE.season.ends}, và mọi đợt reset đều báo trước ít nhất 7 ngày trên Discord lẫn website. Town, nhà cửa và công trình ở thế giới chính không bao giờ bị động tới — chỉ thế giới tài nguyên được thay mới để ai cũng có mỏ để đào.`,
  },
  {
    tag: TAGS.roadmap,
    date: "26/07/2026",
    title: "Bedrock (chơi trên điện thoại) sắp mở",
    body: `Geyser cho Bedrock đang nằm trong lộ trình: server cần nâng RAM và kiểm chứng parity — trải nghiệm phải khớp với Java — trước khi bật. Chưa có ngày cụ thể và Lyra không hứa suông; khi nào chắc chắn sẽ thông báo tại đây. Hiện tại vào chơi bằng Java qua ${SITE.ip}.`,
  },
];

export default function NewsPage() {
  return (
    <PageShell>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <PageKicker>TIN TỨC &amp; CẬP NHẬT</PageKicker>
        <PageTitle>Nhật ký thiên hà</PageTitle>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            marginTop: 40,
          }}
        >
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="card-dark"
              style={{ borderRadius: 18, padding: "28px 30px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 12,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: ".18em",
                    color: p.tag.color,
                    background: p.tag.bg,
                    border: `1px solid ${p.tag.color}`,
                    borderRadius: 999,
                    padding: "4px 12px",
                  }}
                >
                  {p.tag.label}
                </span>
                <span style={{ fontSize: 12, color: "#626b7a" }}>{p.date}</span>
              </div>
              <h2
                className="font-display"
                style={{ fontWeight: 700, fontSize: 19, margin: "0 0 10px" }}
              >
                {p.title}
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "#9aa3b5",
                  lineHeight: 1.7,
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                {p.body}
              </p>
              {p.cta ? (
                <a
                  href={p.cta.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: 14,
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: ".08em",
                    color: "#8B5CF6",
                  }}
                >
                  {p.cta.label}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
