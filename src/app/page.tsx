import Image from "next/image";
import { SiteNav } from "@/components/lyra/SiteNav";
import { SiteFooter } from "@/components/lyra/SiteFooter";
import { LandingEffects } from "@/components/lyra/LandingEffects";
import { CopyIpButton } from "@/components/lyra/CopyIpButton";
import { SITE } from "@/lib/site";

const DOT_SECTIONS = [
  { id: "top", label: "HERO" },
  { id: "modes", label: "CHẾ ĐỘ" },
  { id: "galaxy", label: "THIÊN HÀ" },
  { id: "join-cta", label: "CẤT CÁNH" },
];

const WORLDS = [
  {
    icon: "/images/planet-survival.svg",
    name: "Survival Towny",
    desc: "Sinh tồn chính — lập town, claim đất, chợ người chơi QuickShop.",
    tag: "NON-P2W · KHÔNG RESET LÉN",
  },
  {
    icon: "/images/planet-resource.svg",
    name: "Resource",
    desc: `Thế giới tài nguyên theo mùa "${SITE.season.name}" — reset có báo trước ≥7 ngày.`,
    tag: `MÙA KẾT THÚC ${SITE.season.ends}`,
  },
  {
    icon: "/images/planet-arena.svg",
    name: "Đấu Trường",
    desc: "PvP mỏng tự nguyện, giữ đồ khi thua (keepInventory). Không ladder nạp tiền.",
    tag: "PVP TÙY CHỌN",
  },
];

const STATS = [
  { v: "3", k: "THẾ GIỚI" },
  { v: `${SITE.maxSlots}`, k: "SLOT CLOSED BETA" },
  { v: "20.0", k: "TPS BASELINE" },
];

export default function LandingPage() {
  return (
    <div style={{ position: "relative" }}>
      <LandingEffects />
      <div
        id="progress"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 3,
          width: 0,
          zIndex: 20,
          background: "linear-gradient(90deg, #8B5CF6, #E6EBF4)",
          boxShadow: "0 0 12px rgba(139,92,246,.7)",
          transition: "width .1s linear",
        }}
      />
      <div
        id="dotnav"
        style={{
          position: "fixed",
          right: 30,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 18,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {DOT_SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            data-sec={s.id}
            className="dot"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "7px 0",
            }}
          >
            <span
              className="dot-label"
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: ".16em",
                color: "#8B5CF6",
                opacity: 0,
                transform: "translateX(6px)",
                transition: "opacity .3s ease, transform .3s ease",
              }}
            >
              {s.label}
            </span>
            <span
              className="dot-pt"
              style={{
                display: "block",
                width: 22,
                height: 3,
                borderRadius: 3,
                background: "#2a2a34",
                transition: "all .35s cubic-bezier(.2,.7,.2,1)",
              }}
            />
          </a>
        ))}
      </div>
      <span id="top" style={{ position: "absolute", top: 0 }} />
      <canvas
        id="stars"
        width={1600}
        height={900}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139,92,246,.16), transparent 65%)",
        }}
      />

      <SiteNav landing />

      <header
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "70px 48px 120px",
          textAlign: "center",
          perspective: 900,
        }}
      >
        <img
          data-depth="30"
          src="/images/planet-survival.svg"
          alt=""
          style={{
            position: "absolute",
            left: "6%",
            top: 90,
            width: 96,
            borderRadius: 22,
            animation: "floaty 7s ease-in-out infinite",
            filter: "drop-shadow(0 0 24px rgba(139,92,246,.5))",
            willChange: "transform",
          }}
        />
        <img
          data-depth="55"
          src="/images/planet-resource.svg"
          alt=""
          style={{
            position: "absolute",
            right: "8%",
            top: 60,
            width: 76,
            borderRadius: 18,
            animation: "floaty2 9s ease-in-out infinite",
            filter: "drop-shadow(0 0 20px rgba(139,92,246,.45))",
            willChange: "transform",
          }}
        />
        <img
          data-depth="42"
          src="/images/planet-arena.svg"
          alt=""
          style={{
            position: "absolute",
            right: "16%",
            bottom: 40,
            width: 84,
            borderRadius: 20,
            animation: "floaty 8s ease-in-out infinite 1s",
            filter: "drop-shadow(0 0 22px rgba(230,235,244,.35))",
            willChange: "transform",
          }}
        />
        <div data-depth="18" style={{ display: "inline-block", willChange: "transform" }}>
          <Image
            src="/images/lyra-logo-transparent.svg"
            alt="Lyra mark"
            width={168}
            height={168}
            priority
            style={{
              borderRadius: 32,
              boxShadow: "0 0 80px rgba(139,92,246,.35)",
              animation: "glowpulse 4s ease-in-out infinite",
            }}
          />
        </div>
        <h1
          data-depth="10"
          className="font-display"
          style={{
            fontWeight: 900,
            fontSize: "clamp(56px, 9vw, 118px)",
            margin: "28px 0 10px",
            letterSpacing: "-0.02em",
            background:
              "linear-gradient(180deg, #ffffff 20%, #E6EBF4 45%, #8B5CF6 130%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            willChange: "transform",
          }}
        >
          LYRA
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "#9aa3b5",
            maxWidth: 520,
            margin: "0 auto 34px",
            lineHeight: 1.6,
          }}
        >
          Server Survival Towny Việt Nam giữa thiên hà — không reset lén, không
          P2W. Java cracked chơi ngay, Bedrock sắp mở.
        </p>
        <div
          id="join"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <CopyIpButton variant="hero" />
          <a
            href="#modes"
            className="btn-vega"
            style={{
              fontSize: 15,
              padding: "16px 32px",
              borderRadius: 14,
              boxShadow: "0 8px 40px rgba(139,92,246,.45)",
              display: "inline-block",
            }}
          >
            BẮT ĐẦU CHƠI ▶
          </a>
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 12,
            color: "#626b7a",
            letterSpacing: ".14em",
          }}
        >
          ● CLOSED BETA · {SITE.maxSlots} SLOT · {SITE.version.toUpperCase()}
        </div>
      </header>

      <section
        id="modes"
        className="reveal"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "40px 48px 90px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              fontSize: 12,
              color: "#8B5CF6",
              fontWeight: 700,
              letterSpacing: ".3em",
              marginBottom: 10,
            }}
          >
            CHỌN THẾ GIỚI
          </div>
          <h2
            className="font-display"
            style={{ fontWeight: 700, fontSize: 34, margin: 0 }}
          >
            Ba hành tinh, một thiên hà
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {WORLDS.map((w) => (
            <div
              key={w.name}
              className="tilt card-dark"
              style={{
                borderRadius: 22,
                padding: "34px 28px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "auto 0 0 0",
                  height: "60%",
                  background:
                    "radial-gradient(ellipse at center bottom, rgba(139,92,246,.22), transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <span
                className="orbit-wrap"
                style={{
                  position: "relative",
                  display: "inline-block",
                  marginBottom: 18,
                }}
              >
                <span className="orbit-ring" />
                <span className="orbit-moon" />
                <img
                  src={w.icon}
                  alt={w.name}
                  className="orbit-icon"
                  style={{
                    width: 104,
                    height: 104,
                    objectFit: "contain",
                    borderRadius: 24,
                    filter: "drop-shadow(0 10px 30px rgba(0,0,0,.6))",
                    transform: "translateZ(40px)",
                    transition:
                      "transform .5s cubic-bezier(.2,.7,.2,1), filter .5s ease",
                    cursor: "pointer",
                  }}
                />
              </span>
              <h3
                className="font-display"
                style={{ fontWeight: 700, fontSize: 21, margin: "0 0 8px" }}
              >
                {w.name}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  color: "#9aa3b5",
                  lineHeight: 1.55,
                  margin: "0 0 20px",
                  minHeight: 42,
                }}
              >
                {w.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  fontSize: 12,
                  color: "#4ade80",
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  marginBottom: 16,
                }}
              >
                ● {w.tag}
              </div>
              <a
                href="#join"
                style={{
                  display: "inline-block",
                  background: "rgba(230,235,244,.08)",
                  border: "1px solid rgba(230,235,244,.16)",
                  padding: "10px 26px",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: ".1em",
                }}
              >
                VÀO CHƠI
              </a>
            </div>
          ))}
        </div>
      </section>

      <section
        id="galaxy"
        className="reveal"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "30px 48px 100px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(120deg, rgba(139,92,246,.14), rgba(11,15,26,.7) 55%)",
            border: "1px solid rgba(139,92,246,.3)",
            borderRadius: 26,
            padding: 56,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div data-depth="14" style={{ willChange: "transform" }}>
            <Image
              src="/images/lyra-logo.svg"
              alt="Chòm sao Lyra"
              width={420}
              height={420}
              style={{
                width: "100%",
                maxWidth: 420,
                height: "auto",
                borderRadius: 24,
                boxShadow: "0 30px 80px rgba(0,0,0,.5)",
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: 12,
                color: "#8B5CF6",
                fontWeight: 700,
                letterSpacing: ".3em",
                marginBottom: 12,
              }}
            >
              CHÒM SAO LYRA
            </div>
            <h2
              className="font-display"
              style={{
                fontWeight: 700,
                fontSize: 30,
                margin: "0 0 16px",
                lineHeight: 1.25,
              }}
            >
              Mỗi node là một thế giới, sao Vega là nhà của bạn
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#9aa3b5",
                lineHeight: 1.7,
                margin: "0 0 26px",
              }}
            >
              Logo của Lyra là bản đồ sao thật của chòm Lyra — 5 node nối một
              nét, sao Vega tím rực phía đuôi. Lập town cùng crew, xây thứ bạn
              muốn — town và công trình không bao giờ bị xoá lén.
            </p>
            <div style={{ display: "flex", gap: 26, flexWrap: "wrap" }}>
              {STATS.map((s) => (
                <div key={s.k}>
                  <div
                    className="font-display"
                    style={{ fontWeight: 900, fontSize: 26, color: "#E6EBF4" }}
                  >
                    {s.v}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#626b7a",
                      letterSpacing: ".16em",
                      marginTop: 4,
                    }}
                  >
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="join-cta"
        className="reveal"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "20px 48px 110px",
        }}
      >
        <h2
          className="font-display text-gradient-hero"
          style={{
            fontWeight: 900,
            fontSize: "clamp(30px, 5vw, 52px)",
            margin: "0 0 26px",
          }}
        >
          Sẵn sàng cất cánh?
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <CopyIpButton variant="cta" />
          <a
            href={SITE.discord}
            style={{
              background: "#5865F2",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: ".1em",
              padding: "16px 34px",
              borderRadius: 14,
              display: "inline-block",
            }}
          >
            DISCORD
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
