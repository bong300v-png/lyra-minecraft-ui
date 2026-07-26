"use client";

import { useRef, useState } from "react";
import { SITE } from "@/lib/site";

export function CopyIpButton({
  variant = "hero",
}: {
  variant?: "hero" | "cta" | "bar";
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(SITE.ip);
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  if (variant === "cta") {
    return (
      <button
        onClick={copy}
        className="btn-vega"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 15,
          padding: "16px 34px",
          borderRadius: 14,
          boxShadow: "0 8px 40px rgba(139,92,246,.45)",
        }}
      >
        {copied ? "ĐÃ COPY ✓" : `COPY IP · ${SITE.ip.toUpperCase()}`}
      </button>
    );
  }

  if (variant === "bar") {
    return (
      <button
        onClick={copy}
        className="btn-vega"
        style={{
          marginLeft: "auto",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          padding: "11px 24px",
          borderRadius: 10,
        }}
      >
        {copied ? "ĐÃ COPY ✓" : "COPY IP"}
      </button>
    );
  }

  return (
    <button
      onClick={copy}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: copied ? "rgba(139,92,246,.18)" : "rgba(230,235,244,.06)",
        border: "1px solid rgba(139,92,246,.5)",
        color: "#E6EBF4",
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 15,
        fontWeight: 700,
        letterSpacing: ".12em",
        padding: "15px 28px",
        borderRadius: 14,
        cursor: "pointer",
        backdropFilter: "blur(8px)",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#4ade80",
          boxShadow: "0 0 10px #4ade80",
        }}
      />
      {copied ? "ĐÃ COPY ✓" : SITE.ip.toUpperCase()}
    </button>
  );
}
