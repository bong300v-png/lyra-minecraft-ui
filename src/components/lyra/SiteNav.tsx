import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/site";

export function SiteNav({ landing = false }: { landing?: boolean }) {
  return (
    <nav
      style={{
        position: "relative",
        zIndex: 5,
        display: "flex",
        alignItems: "center",
        gap: 28,
        padding: "22px 48px",
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
        flexWrap: "wrap",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Image
          src="/images/lyra-logo-transparent.svg"
          alt="Lyra"
          width={40}
          height={40}
          style={{ borderRadius: 10 }}
        />
        <span
          className="font-display"
          style={{ fontWeight: 900, fontSize: 18, letterSpacing: ".04em" }}
        >
          LYRA
        </span>
      </Link>
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: 24,
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: ".1em",
          flexWrap: "wrap",
        }}
      >
        {landing && (
          <>
            <a href="#modes">CHẾ ĐỘ</a>
            <a href="#galaxy">THIÊN HÀ</a>
          </>
        )}
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
        <Link
          href="/login/"
          className="btn-vega"
          style={{ padding: "9px 20px", borderRadius: 999 }}
        >
          ĐĂNG NHẬP
        </Link>
      </div>
    </nav>
  );
}
