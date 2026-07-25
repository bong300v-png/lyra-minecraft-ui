"use client";

import Link from "next/link";
import { useState } from "react";

type ChromeProps = {
  modeLabel?: string;
  storeMode?: boolean;
  active?: "store" | "login" | "register" | "play" | "forums";
};

/** Shared XenForo chrome — Vietnamese UI */
export function ComplexChrome({
  modeLabel = "Survival",
  storeMode = false,
  active,
}: ChromeProps) {
  const [modeOpen, setModeOpen] = useState(false);
  const modeIcon =
    modeLabel.toLowerCase() === "bedrock"
      ? "/images/complex/mode-cobblemon.png"
      : "/images/complex/mode-vanilla.png";

  return (
    <>
      <div id="navigation">
        <div className="container p-nav-inner">
          <div className="left">
            <div className="nav-links">
              <Link href="/" className="button base">
                Trang chủ
              </Link>
              <Link href="/forums" className={`button base${active === "forums" ? " is-active-store" : ""}`}>
                Diễn đàn
              </Link>
              <a
                href="https://discord.gg/LyraPixel"
                className="button base"
                target="_blank"
                rel="noreferrer"
              >
                Bình chọn
              </a>
            </div>
          </div>

          <div className="logo">
            <Link href={storeMode ? "/store" : "/forums"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Lyra" />
              <span className="gamemode-type">{modeLabel}</span>
            </Link>
          </div>

          <div className="right">
            <div className="nav-links">
              <a
                href="https://discord.gg/LyraPixel"
                className="button primary"
                target="_blank"
                rel="noreferrer"
              >
                Trợ giúp
              </a>
              <Link href="/store" className={`button base${active === "store" ? " is-active-store" : ""}`}>
                Cửa hàng
              </Link>
              <a
                href="https://discord.gg/LyraPixel"
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

      <div id="sub-navigation">
        <div className="container p-nav-inner">
          <div className="left">
            {storeMode ? (
              <div className="subnav-store-label">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/complex/mode-pixelmon.png" alt="" className="dropdown-icon" />
                <span>Chọn cửa hàng</span>
              </div>
            ) : (
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
                    {modeLabel}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 chev">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </h4>
                </button>
                {modeOpen && (
                  <div className="menu menu--gamemodes is-open">
                    <div className="menu-content">
                      <h3 className="menu-header">Chọn chế độ</h3>
                      <Link href="/play/survival" className="menu-linkRow w-icon" onClick={() => setModeOpen(false)}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/complex/mode-vanilla.png" alt="" className="dropdown-icon" />
                        Survival
                      </Link>
                      <Link href="/play/bedrock" className="menu-linkRow w-icon" onClick={() => setModeOpen(false)}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/complex/mode-cobblemon.png" alt="" className="dropdown-icon" />
                        Bedrock
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="center hidden-sm">
            {storeMode ? (
              <div className="subnav-viewing">
                <span className="muted">Đang xem</span>
                <strong>Cửa hàng</strong>
              </div>
            ) : (
              <button type="button" className="player-status" title="IP">
                <span className="text">lyra.host</span>
                <span className="count">1324</span>
              </button>
            )}
          </div>

          <div className="right">
            <div className="nav-links">
              <div className="p-navgroup p-account p-navgroup--guest">
                {storeMode ? (
                  <Link href="/store/username?store=survival" className="p-navgroup-link p-navgroup-link--textual">
                    <span className="p-navgroup-linkText">Đăng nhập</span>
                  </Link>
                ) : (
                  <>
                    <Link href="/login" className={`p-navgroup-link p-navgroup-link--textual p-navgroup-link--logIn${active === "login" ? " is-active" : ""}`}>
                      <span className="p-navgroup-linkText">Đăng nhập</span>
                    </Link>
                    <Link href="/register" className={`p-navgroup-link p-navgroup-link--textual p-navgroup-link--register${active === "register" ? " is-active" : ""}`}>
                      <span className="p-navgroup-linkText">Đăng ký</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
