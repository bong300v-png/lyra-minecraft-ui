"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE } from "@/lib/site";

type FilterKey = "ALL" | "BAN" | "MUTE";

interface FilterOption {
  key: FilterKey;
  label: string;
}

/** Một dòng án phạt đọc từ LibertyBans. */
interface BanRow {
  name: string;
  reason: string;
  kind: Exclude<FilterKey, "ALL">;
  typeLabel: string;
  typeColor: string;
  duration: string;
  durationColor: string;
  date: string;
}

const FILTERS: readonly FilterOption[] = [
  { key: "ALL", label: "TẤT CẢ" },
  { key: "BAN", label: "BAN" },
  { key: "MUTE", label: "MUTE" },
];

/** Mùa beta chưa có án phạt nào — bảng thật từ LibertyBans, không bịa dữ liệu. */
const BAN_ROWS: readonly BanRow[] = [];

const GRID_COLUMNS = "1.2fr 1.4fr .9fr .9fr .8fr";

const HEADERS = ["NGƯỜI CHƠI", "LÝ DO", "LOẠI", "THỜI HẠN", "NGÀY"] as const;

export function BansBoard() {
  const [filter, setFilter] = useState<FilterKey>("ALL");
  const rows = BAN_ROWS.filter((r) => filter === "ALL" || r.kind === filter);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 22,
          flexWrap: "wrap",
        }}
      >
        {FILTERS.map((f) => {
          const on = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              style={{
                border: `1px solid ${on ? "#8B5CF6" : "#23232b"}`,
                background: on ? "rgba(139,92,246,.18)" : "transparent",
                color: on ? "#E6EBF4" : "#626b7a",
                borderRadius: 999,
                padding: "8px 20px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: ".1em",
                cursor: "pointer",
                transition:
                  "border-color .25s ease, color .25s ease, background .25s ease",
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(16,16,22,.92), rgba(11,15,26,.92))",
          border: "1px solid #23232b",
          borderRadius: 18,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: GRID_COLUMNS,
            gap: 12,
            padding: "14px 24px",
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: ".18em",
            color: "#626b7a",
            borderBottom: "1px solid #1a1a22",
          }}
        >
          {HEADERS.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>

        {rows.map((r) => (
          <div
            key={`${r.name}-${r.date}`}
            style={{
              display: "grid",
              gridTemplateColumns: GRID_COLUMNS,
              gap: 12,
              padding: "14px 24px",
              fontSize: 13.5,
              borderBottom: "1px solid #14141c",
              alignItems: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontWeight: 600,
              }}
            >
              <Image
                src={`https://minotar.net/helm/${encodeURIComponent(r.name)}/26.png`}
                alt=""
                width={26}
                height={26}
                unoptimized
                style={{ imageRendering: "pixelated", borderRadius: 6 }}
              />
              {r.name}
            </span>
            <span style={{ color: "#9aa3b5" }}>{r.reason}</span>
            <span
              style={{
                color: r.typeColor,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: ".08em",
              }}
            >
              {r.typeLabel}
            </span>
            <span style={{ color: r.durationColor }}>{r.duration}</span>
            <span style={{ color: "#9aa3b5" }}>{r.date}</span>
          </div>
        ))}

        {rows.length === 0 && (
          <div style={{ padding: "58px 24px", textAlign: "center" }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                margin: "0 auto 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(74,222,128,.08)",
                border: "1px solid rgba(74,222,128,.35)",
                color: "#4ade80",
                fontSize: 20,
              }}
            >
              ✦
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#E6EBF4" }}>
              Chưa có lệnh ban nào trong mùa này — giữ vững nhé ✦
            </div>
            <div
              style={{
                fontSize: 13,
                color: "#626b7a",
                marginTop: 8,
                lineHeight: 1.6,
              }}
            >
              Mọi án phạt của mùa {SITE.season.name} (nếu có) sẽ được ghi qua
              LibertyBans và hiện công khai tại đây.
            </div>
          </div>
        )}
      </div>
    </>
  );
}
