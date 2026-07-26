import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 2,
        borderTop: "1px solid #1a1a22",
        padding: "26px 48px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
        fontSize: 12,
        color: "#626b7a",
        letterSpacing: ".08em",
        flexWrap: "wrap",
      }}
    >
      <Image
        src="/images/lyra-logo-transparent.svg"
        alt=""
        width={24}
        height={24}
        style={{ borderRadius: 6 }}
      />
      <span>LYRA NETWORK · {SITE.ip.toUpperCase()}</span>
      {FOOTER_LINKS.map((l) => (
        <Link key={l.href} href={l.href} style={{ color: "#626b7a" }}>
          {l.label}
        </Link>
      ))}
      <span style={{ marginLeft: "auto" }}>© 2026 Lyra</span>
    </footer>
  );
}
