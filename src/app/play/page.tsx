import type { Metadata } from "next";
import { PageShell, PageKicker } from "@/components/lyra/PageShell";
import { CopyIpButton } from "@/components/lyra/CopyIpButton";
import { SITE } from "@/lib/site";
import { PlayTabs } from "./PlayTabs";
import { PlayFaq } from "./PlayFaq";

export const metadata: Metadata = {
  title: "Hướng dẫn vào chơi — Lyra",
  description:
    "Vào Lyra trong 60 giây: Java Edition (crack OK qua AuthMe), IP play.lyra.host port 25565, Purpur 26.1.2. Bedrock sắp mở.",
};

export default function PlayPage() {
  return (
    <PageShell>
      <div style={{ textAlign: "center" }}>
        <PageKicker>HƯỚNG DẪN VÀO CHƠI</PageKicker>
        <h1
          className="font-display text-gradient-hero"
          style={{
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 48px)",
            margin: "0 0 12px",
          }}
        >
          Vào thiên hà trong 60 giây
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#9aa3b5",
            maxWidth: 460,
            margin: "0 auto 50px",
            lineHeight: 1.6,
          }}
        >
          Java Edition · crack OK qua AuthMe · {SITE.version}. Bedrock sắp mở
          qua Geyser — không cần mod, chỉ cần 60 giây.
        </p>
      </div>

      <PlayTabs />

      <div
        style={{
          background: "rgba(139,92,246,.08)",
          border: "1px solid rgba(139,92,246,.35)",
          borderRadius: 18,
          padding: "22px 28px",
          display: "flex",
          alignItems: "center",
          gap: 18,
          flexWrap: "wrap",
          marginBottom: 60,
        }}
      >
        <span style={{ fontSize: 13, color: "#9aa3b5", letterSpacing: ".1em" }}>
          ĐỊA CHỈ SERVER
        </span>
        <code
          style={{
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: ".06em",
            color: "#E6EBF4",
          }}
        >
          {SITE.ip}
        </code>
        <CopyIpButton variant="bar" />
      </div>

      <h2
        className="font-display"
        style={{ fontWeight: 700, fontSize: 24, margin: "0 0 22px" }}
      >
        Câu hỏi thường gặp
      </h2>
      <PlayFaq />
    </PageShell>
  );
}
