"use client";

import { useState, type CSSProperties } from "react";
import {
  LYRA_FALLBACK_SERVERS,
  type Server,
} from "@/data/servers";
import "@/app/hub-theme.css";

/** Product hub: one Survival Towny card (not multi-network Complex carousel) */
export function LandingApp() {
  const server: Server = LYRA_FALLBACK_SERVERS[0];
  const [toast, setToast] = useState<string | null>(null);
  const online = server.gameModes.reduce((s, m) => s + m.players, 0);

  const copyIp = () => {
    navigator.clipboard.writeText(server.url).then(() => {
      setToast(`Đã sao chép IP: ${server.url}`);
      setTimeout(() => setToast(null), 2500);
    });
  };

  return (
    <div className="hub-root">
      <header className="hub-header">
        <a href="/" className="hub-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Lyra" />
        </a>
        <p className="hub-online">
          <span className="hub-dot" aria-hidden />
          {online} trực tuyến
        </p>
      </header>

      <main className="hub-main">
        <article
          className={`hub-card ${server.className}`}
          style={{ ["--primary-color" as string]: server.primaryColor } as CSSProperties}
        >
          {server.message && <p className="hub-badge">{server.message}</p>}

          <h1 className="hub-title">
            <a href={server.forumsUrl || "/forums"}>{server.name}</a>
          </h1>

          <button type="button" className="hub-ip" onClick={copyIp} title="Bấm để sao chép">
            {server.url}
          </button>

          <p className="hub-players">{online} trực tuyến</p>

          <div className="hub-actions">
            <a className="hub-btn hub-btn-play" href="/play/survival">
              Chơi
            </a>
            <a
              className="hub-btn hub-btn-discord"
              href={server.discordInvite}
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
          </div>

          <div className="hub-actions hub-actions-sec">
            <a className="hub-btn hub-btn-ghost" href="/store">
              Cửa hàng
            </a>
            <a className="hub-btn hub-btn-ghost" href="/forums">
              Diễn đàn
            </a>
          </div>

          <ul className="hub-modes">
            {server.gameModes.map((m) => (
              <li key={m.name}>
                <span>{m.name}</span>
                <span className="hub-mode-count">{m.players}</span>
              </li>
            ))}
          </ul>
        </article>
      </main>

      {toast && (
        <div className="hub-toast" role="status">
          {toast}
        </div>
      )}
    </div>
  );
}

export default LandingApp;
