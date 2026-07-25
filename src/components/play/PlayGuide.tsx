"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import type { PlayPage, PlayStep } from "@/data/play-pages";

/**
 * Layout from live mc-complex play vision + HTML dump:
 * #navigation (Home/Forums/Vote | logo+mode | Help/Store/Discord)
 * #sub-navigation (gamemode | IP+count | Đăng nhập/Đăng ký)
 * .play-install card ...
 */
export function PlayGuide({ page }: { page: PlayPage }) {
  const [step, setStep] = useState(0);
  const [track, setTrack] = useState(0);
  const [hint, setHint] = useState("Bấm để sao chép");
  const [copied, setCopied] = useState(false);
  const [lb, setLb] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modeOpen, setModeOpen] = useState(false);
  const [online] = useState(1324);

  const tracks = useMemo(() => {
    const list: { name: string; steps: PlayStep[] }[] = [
      { name: "CurseForge", steps: page.steps },
      ...(page.altTracks ?? []),
    ];
    return list;
  }, [page]);

  const activeSteps = tracks[track]?.steps ?? page.steps;
  const n = activeSteps.length;
  const idx = Math.min(step, Math.max(0, n - 1));
  const current = activeSteps[idx];
  const accent = page.primaryColor;

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(page.ip);
      setHint("✓ Đã sao chép!");
      setCopied(true);
      window.setTimeout(() => {
        setHint("Bấm để sao chép");
        setCopied(false);
      }, 2000);
    } catch {
      setHint("Sao chép thất bại");
    }
  };

  const go = (dir: -1 | 1) => {
    setStep((s) => Math.max(0, Math.min(n - 1, s + dir)));
  };

  const modeIcon =
    page.slug === "vanilla"
      ? "/images/complex/mode-vanilla.png"
      : page.slug === "cobblemon"
        ? "/images/complex/mode-cobblemon.png"
        : "/images/complex/mode-pixelmon.png";

  return (
    <div
      className="play-page-root has-no-js template-complex_core_play"
      style={
        {
          ["--accent" as string]: accent,
          ["--color-primary" as string]: accent,
          ["--primary-color" as string]: accent,
          ["--button-primary" as string]: "#fbcc46",
        } as CSSProperties
      }
    >
      {/* ROW 1 — #navigation */}
      <div id="navigation">
        <div className="container p-nav-inner">
          <div className="left">
            <div className="nav-links">
              <Link href="/" className="button base">
                Trang chủ
              </Link>
              <Link href="/play/pixelmon" className="button base">
                Diễn đàn
              </Link>
              <a
                href="https://www.lyra.host/forums/pixelmon/vote/"
                className="button base"
                target="_blank"
                rel="noreferrer"
              >
                Bình chọn
              </a>
            </div>
          </div>

          <div className="logo">
            <Link href={`/play/${page.slug}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Lyra" />
              <span className="gamemode-type">{page.modeLabel}</span>
            </Link>
          </div>

          <div className="right">
            <div className="nav-links">
              <a
                href="https://www.lyra.host/forums/pixelmon/help-center/"
                className="button primary"
                target="_blank"
                rel="noreferrer"
              >
                Trợ giúp
              </a>
              <Link href="/store" className="button base">
                Cửa hàng
              </Link>
              <a
                href={page.discord}
                className="button discord"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 2 — #sub-navigation */}
      <div id="sub-navigation">
        <div className="container p-nav-inner">
          <div className="left">
            <div className="p-navgroup p-serverSelected">
              <button
                type="button"
                className="p-navgroup-link selected-mode"
                onClick={() => setModeOpen((v) => !v)}
                aria-expanded={modeOpen}
              >
                <h4>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={modeIcon} alt="" className="dropdown-icon" />
                  {page.modeLabel}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 chev">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </h4>
              </button>
              {modeOpen && (
                <div className="menu menu--gamemodes is-open">
                  <div className="menu-content">
                    <h3 className="menu-header">Chọn chế độ</h3>
                    <Link href="/play/vanilla" className="menu-linkRow w-icon" onClick={() => setModeOpen(false)}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/complex/mode-vanilla.png" alt="" className="dropdown-icon" />
                      Vanilla
                    </Link>
                    <Link href="/play/pixelmon" className={`menu-linkRow w-icon${page.slug === "pixelmon" ? " menu-selected" : ""}`} onClick={() => setModeOpen(false)}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/complex/mode-pixelmon.png" alt="" className="dropdown-icon" />
                      Pixelmon
                    </Link>
                    <Link href="/play/cobblemon" className={`menu-linkRow w-icon${page.slug === "cobblemon" ? " menu-selected" : ""}`} onClick={() => setModeOpen(false)}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/complex/mode-cobblemon.png" alt="" className="dropdown-icon" />
                      Cobblemon
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="center hidden-sm">
            <button
              type="button"
              className={`player-status${copied ? " copied" : ""}`}
              onClick={copyIp}
              title="Bấm để sao chép IP"
            >
              <span className="text">{page.ip}</span>
              <span className="count">{online}</span>
            </button>
          </div>

          <div className="right">
            <div className="nav-links">
              <div className="p-navgroup p-account p-navgroup--guest">
                <Link href="/login" className="p-navgroup-link p-navgroup-link--textual p-navgroup-link--logIn">
                  <span className="p-navgroup-linkText">Đăng nhập</span>
                </Link>
                <Link href="/register" className="p-navgroup-link p-navgroup-link--textual p-navgroup-link--register">
                  <span className="p-navgroup-linkText">Đăng ký</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-body-main">
        <div className="play-install-section">
          <div className="play-install" id="playInstall">
            <div className="play-ip-header">
              <div
                className={`play-ip-copy${copied ? " is-copied" : ""}`}
                id="playIpBox"
                onClick={copyIp}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") copyIp();
                }}
              >
                <span className="play-ip-label">IP MÁY CHỦ</span>
                <span className="play-ip-value">{page.ip}</span>
                <span className="play-ip-hint">{hint}</span>
              </div>

              {page.altTracks && page.altTracks.length > 0 && (
                <div className="play-install-tabs" id="playInstallTabs">
                  <button
                    type="button"
                    className={`play-install-tab${track === 0 ? " is-active" : ""}`}
                    onClick={() => {
                      setTrack(0);
                      setStep(0);
                    }}
                  >
                    CurseForge
                  </button>
                  {page.altTracks.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      className={`play-install-tab${track === i + 1 ? " is-active" : ""}`}
                      onClick={() => {
                        setTrack(i + 1);
                        setStep(0);
                      }}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="play-progress">
              <button type="button" className="play-nav-arrow" disabled={idx === 0} onClick={() => go(-1)} aria-label="Bước trước">
                ←
              </button>
              <div className="play-progress-steps">
                {activeSteps.map((s, i) => (
                  <div key={i} style={{ display: "contents" }}>
                    <div
                      className={`play-progress-step${i === idx ? " is-active" : ""}${i < idx ? " is-done" : ""}`}
                      data-step-dot={i + 1}
                      onClick={() => setStep(i)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="play-progress-dot">{i + 1}</div>
                      <span className="play-progress-label">{s.title}</span>
                    </div>
                    {i < activeSteps.length - 1 && (
                      <div className={`play-progress-line${i < idx ? " is-done" : ""}`} data-step-line={i + 1} />
                    )}
                  </div>
                ))}
              </div>
              <button type="button" className="play-nav-arrow" disabled={idx >= n - 1} onClick={() => go(1)} aria-label="Bước sau">
                →
              </button>
            </div>

            <div className="play-step" data-step={idx + 1}>
              <div className="play-step-inner has-image">
                <div className="play-step-image">
                  <a
                    href={current.image}
                    className="play-lb-trigger"
                    onClick={(e) => {
                      e.preventDefault();
                      setLb(current.image);
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={current.image} alt={current.title} />
                  </a>
                  <p className="play-step-caption">Bước {idx + 1}</p>
                </div>
                <div className="play-step-text">
                  <div className="play-step-number">{idx + 1}</div>
                  <h3 className="play-step-title">{current.title}</h3>
                  <div className="play-step-desc">{current.body}</div>
                  {current.cta && (
                    <a href={current.cta.href} target="_blank" rel="noopener noreferrer" className="button primary play-step-btn">
                      {current.cta.label}
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="play-step-nav">
              <button type="button" className="button play-nav-prev" disabled={idx === 0} onClick={() => go(-1)}>
                ← Quay lại
              </button>
              <div className="play-step-counter">
                Bước <span>{idx + 1}</span> / {n}
              </div>
              <button type="button" className="button primary play-nav-next" disabled={idx >= n - 1} onClick={() => go(1)}>
                Tiếp →
              </button>
            </div>
          </div>
        </div>

        <div className="play-discord-help" id="playDiscordHelp">
          <div className="play-discord-help-inner">
            <div className="play-discord-help-text">
              <h4>Cần trợ giúp cài đặt?</h4>
              <p>Vào Discord để được hỗ trợ nhanh!</p>
            </div>
            <a href={page.discord} target="_blank" rel="noopener noreferrer" className="play-discord-btn button primary">
              Nhận trợ giúp
            </a>
          </div>
        </div>

        {page.faqs?.length > 0 && (
          <section className="play-faq-section">
            <h2>Câu hỏi thường gặp</h2>
            {page.faqs.map((f, i) => (
              <div className="play-faq-item" key={i}>
                <button type="button" className="play-faq-header" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <h4>{f.q}</h4>
                  <span className="play-faq-icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                <div className={`play-faq-body${openFaq === i ? " is-active" : ""}`}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </section>
        )}

        <footer className="play-clone-foot" id="footer">
          <div className="footer-cols">
            <div className="col">
              <h1>Lyra</h1>
              <p>Xem liên kết nhanh để vào các khu vực quan trọng trên diễn đàn!</p>
            </div>
            <div className="col">
              <h1>Liên kết nhanh</h1>
              <div className="play-quick-links">
                <Link href="/">Tin tức</Link>
                <Link href="/store">Cửa hàng</Link>
                <Link href="/play/vanilla">Vanilla</Link>
                <Link href="/play/pixelmon">Pixelmon</Link>
                <Link href="/play/cobblemon">Cobblemon</Link>
              </div>
            </div>
            <div className="col">
              <h1>Ủng hộ chúng tôi</h1>
              <p>Ghé cửa hàng để mua rank, vật phẩm và hơn thế!</p>
              <Link href="/store" className="button primary">
                Vào cửa hàng
              </Link>
            </div>
          </div>
          <p className="muted">Lyra © 2016-2026. Bảo lưu mọi quyền. Không liên kết với Mojang AB.</p>
        </footer>
      </div>

      {lb && (
        <div className="play-lb-overlay" onClick={() => setLb(null)} role="presentation">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lb} alt="" className="play-lb-img" />
        </div>
      )}
    </div>
  );
}
