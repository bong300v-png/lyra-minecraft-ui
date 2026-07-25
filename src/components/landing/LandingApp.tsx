"use client";

import { useEffect, useState, type MouseEvent, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LYRA_FALLBACK_SERVERS,
  type Server,
} from "@/data/servers";

/** Pixel-close port of lyra.host App (text/babel source). Full multi-route clone. */

function brandServers(data: Server[]): Server[] {
  // Keep Lyra names/IPs — full fidelity clone, not Lyra rebrand
  return data.map((s) => ({
    ...s,
    gameModes: s.gameModes.map((m) => ({
      ...m,
      icon: m.icon
        ? m.icon.startsWith("http") || m.icon.startsWith("/")
          ? m.icon
          : `/${m.icon}`
        : m.icon,
    })),
  }));
}



function App() {
  const [servers, setServers] = useState<Server[]>(() => brandServers(LYRA_FALLBACK_SERVERS));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [expandedServer, setExpandedServer] = useState<string | null>(null);

  // Product data is local (no remote servers API)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handlePlay = (serverUrl: string) => {
    // Copy server IP to clipboard
    navigator.clipboard.writeText(serverUrl).then(() => {
      showToast(`Server Đã sao chép IP: ${serverUrl}`);
    });
  };

  const itemsPerPage = Math.min(servers.length || 1, isMobile ? servers.length || 1 : 3);
  const visibleServers = isMobile
    ? servers
    : servers.slice(currentIndex, currentIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < servers.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getPlayUrl = (_server: Server) => {
    return "/play/survival";
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < servers.length - itemsPerPage;

  return (
    <div className="app-inner">
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: '#000',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
              gap: '2rem'
            }}
          >
            <motion.img
              src="/logo.png"
              alt="Lyra"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ width: '200px', height: 'auto' }}
            />
            <motion.div
              style={{
                display: 'flex',
                gap: '0.5rem'
              }}
            >
              {[0, 1, 2].map((i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.2
                  }}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#10b981'
                  }}
                />
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                fontWeight: '500',
                letterSpacing: '0.05em'
              }}
            >
              Đang tải máy chủ...
            </motion.p>
          </motion.div>
        )}

        {error && (
          <motion.div
            className="error-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: '#000',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
              gap: '1rem'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" style={{ width: '64px', height: '64px' }}>
              <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
            </svg>
            <p style={{ color: 'white', fontSize: '1.25rem', fontWeight: '600' }}>Không tải được danh sách máy chủ</p>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem' }}>{error}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && !error && (
      <>
        <motion.header
          className="landing-top"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          role="banner"
        >
        <nav className="left hidden-mobile" aria-label="Primary navigation" style={{ visibility: 'hidden' }}>
          <a href="#" target="_blank" className="nav-item nav-icon" role="presentation">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
              <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
            </svg>
          </a>
          <a href="#" target="_blank" className="nav-item nav-icon" role="presentation">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
            </svg>
          </a>
          <a href="#" target="_blank" className="nav-item nav-icon" role="presentation">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg>
          </a>
        </nav>
        <div className="logo-wrap">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Lyra" />
          </a>
          {!loading && !error && (
            <span className="global-player-count">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '12px', height: '12px' }}>
                <circle cx="12" cy="12" r="6" fill="#10b981" />
              </svg>
              {servers.reduce((sum: number, s: Server) => sum + s.gameModes.reduce((ms: number, m) => ms + m.players, 0), 0).toLocaleString()} trực tuyến
            </span>
          )}
        </div>
        {/* Original hub: logo center only — no Log in / Store in header (those live on cards) */}
        <nav className="right hidden-mobile" aria-label="Secondary navigation" style={{ visibility: "hidden" }} aria-hidden>
          <span className="nav-item store-button">Cửa hàng</span>
        </nav>
      </motion.header>

      <main className="landing-grid" role="main" aria-label="Máy chủ Minecraft">
        {!isMobile && canGoPrev && (
          <motion.button
            className="landing-nav-item prev"
            onClick={handlePrev}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Máy chủ trước"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </motion.button>
        )}

        {!isMobile && canGoNext && (
          <motion.button
            className="landing-nav-item next"
            onClick={handleNext}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Máy chủ sau"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </motion.button>
        )}

        <motion.div
          className="landing-grid-inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {visibleServers.map((server: Server, index: number) => (
              <motion.article
                key={server.url}
                className={`item ${server.className}`}
                style={{ ['--primary-color' as string]: server.primaryColor } as CSSProperties}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                role="article"
                aria-label={`${server.name} Minecraft Server`}
              >
                <div className="scroll-container left hidden-mobile">
                  <div className="scroll-content">
                    <span>{server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · </span>
                    <span>{server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · </span>
                    <span>{server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · </span>
                    <span>{server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · </span>
                  </div>
                </div>
                <div className="scroll-container right hidden-mobile">
                  <div className="scroll-content">
                    <span>{server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · </span>
                    <span>{server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · </span>
                    <span>{server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · </span>
                    <span>{server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · {server.name} · </span>
                  </div>
                </div>
                <div className="server-content">
                  <div className="server-header">
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: isMobile ? (index * 0.1) + 0.2 : (index * 0.15) + 0.3 }}
                    >
                      {server.forumsUrl ? (
                        <a href={server.forumsUrl} {...(server.forumsUrl.startsWith("http") ? {target: "_blank", rel: "noopener noreferrer"} : {})} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {server.name}
                        </a>
                      ) : server.name}
                    </motion.h1>

                    <motion.small
                      className="server-ip"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: isMobile ? (index * 0.1) + 0.3 : (index * 0.15) + 0.4 }}
                      onClick={() => handlePlay(server.url)}
                      style={{ cursor: 'pointer' }}
                    >
                      {server.url}
                    </motion.small>

                    {server.forumsUrl && (
                      <motion.a
                        href={server.forumsUrl}
                        {...(server.forumsUrl.startsWith("http") ? {target: "_blank", rel: "noopener noreferrer"} : {})}
                        className="forums-link"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: isMobile ? (index * 0.1) + 0.35 : (index * 0.15) + 0.45 }}
                        whileHover={{ opacity: 1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.75rem',
                          color: '#fff',
                          textDecoration: 'none',
                          letterSpacing: '0.5px'
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '14px', height: '14px' }}>
                          <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                        </svg>
                        Trang máy chủ chính thức
                      </motion.a>
                    )}
                  </div>

                  {server.message && (
                    <motion.div
                      className="server-message hidden-mobile"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: isMobile ? (index * 0.1) + 0.4 : (index * 0.15) + 0.5 }}
                    >
                      {server.message}
                    </motion.div>
                  )}

                  <motion.div
                    className="server-stats"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: isMobile ? (index * 0.1) + 0.5 : (index * 0.15) + 0.6 }}
                  >
                    <div className="player-count hidden-mobile">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-player" aria-hidden="true">
                        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                      </svg>
                      <span aria-label={`${server.gameModes.reduce((sum: number, mode) => sum + mode.players, 0)} người chơi trực tuyến`}>
                        {server.gameModes.reduce((sum: number, mode) => sum + mode.players, 0)} trực tuyến
                      </span>
                    </div>

                    <div className="server-actions">
                      <motion.button
                        className="play-button"
                        onClick={(e: MouseEvent) => {
                          e.stopPropagation();
                          const url = getPlayUrl(server);
                          if (url.startsWith('/')) {
                            window.location.href = url;
                          } else {
                            window.open(url, '_blank');
                          }
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Xem chế độ ${server.name}`}
                        type="button"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-play" aria-hidden="true">
                          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                        Chơi
                      </motion.button>

                      <motion.a
                        href={server.discordInvite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="discord-button"
                        onClick={(e: MouseEvent) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Vào Discord ${server.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-discord" aria-hidden="true">
                          <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                        </svg>
                        Discord
                      </motion.a>
                    </div>

                    <div className="server-actions secondary-actions">
                      <motion.a
                        href={'/store'}
                        className="store-button-card"
                        onClick={(e: MouseEvent) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Vào cửa hàng ${server.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '14px', height: '14px' }} aria-hidden="true">
                          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                        Cửa hàng
                      </motion.a>

                      <motion.a
                        href={server.forumsUrl}
                        {...(server.forumsUrl.startsWith("http") ? {target: "_blank", rel: "noopener noreferrer"} : {})}
                        className="forums-button-card"
                        onClick={(e: MouseEvent) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Vào diễn đàn ${server.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '14px', height: '14px' }} aria-hidden="true">
                          <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.687 6.192l-2.033 2.033c-.342.342-.48.85-.316 1.31.163.46.556.75 1.033.75h4.172Z" clipRule="evenodd" />
                        </svg>
                        Diễn đàn
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedServer === server.url && (
                    <>
                      <motion.div
                        key="backdrop"
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setExpandedServer(null)}
                      />
                      <motion.div
                        key="game-modes"
                        className="game-modes-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                      {server.forumsUrl && (
                        <>
                          <div className="game-modes-header">
                            <h3>TRANG WEB</h3>
                          </div>
                          <div className="guides-list">
                            <a
                              href={server.forumsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="guide-item"
                            >
                              <div className="game-mode-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
                                  <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="guide-name">Trang máy chủ chính thức</span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="guide-arrow">
                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                        </>
                      )}

                      <div className={`game-modes-header${server.forumsUrl ? ' other' : ''}`}>
                        <h3>{server.name} GAMEMODES</h3>
                        <button
                          className="close-button"
                          onClick={() => setExpandedServer(null)}
                          aria-label="Đóng game modes"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                      <div className="game-modes-list">
                        {server.gameModes.map((mode, modeIndex: number) => (
                          <div key={modeIndex} className="game-mode-item">
                            <div className="game-mode-info">
                              {mode.icon && (
                                <div className="game-mode-icon">
                                  <img src={mode.icon} alt={`${mode.name} icon`} />
                                </div>
                              )}
                              <span className="game-mode-name">{mode.name}:</span>
                              <span className="game-mode-players">{mode.players} trực tuyến</span>
                            </div>
                            <button
                              className="game-mode-play"
                              onClick={(e: MouseEvent) => {
                                e.stopPropagation();
                                handlePlay(server.url);
                              }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                              </svg>
                              PLAY
                            </button>
                          </div>
                        ))}
                      </div>

                      {server.guides && server.guides.length > 0 && (
                        <>
                          <div className="game-modes-header other">
                            <h3>HƯỚNG DẪN</h3>
                          </div>
                          <div className="guides-list">
                            {server.guides.map((guide, guideIndex: number) => (
                              <a
                                key={guideIndex}
                                href={guide.url}
                                className="guide-item"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="game-mode-icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M280-280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h120q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600H280q-50 0-85 35t-35 85q0 50 35 85t85 35h120q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280H280Zm80-160q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h240q17 0 28.5 11.5T640-480q0 17-11.5 28.5T600-440H360Zm200 160q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360h120q50 0 85-35t35-85q0-50-35-85t-85-35H560q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h120q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H560Z"/></svg>
                                </div>
                                <span className="guide-name">{guide.name}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="guide-arrow">
                                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                </svg>
                              </a>
                            ))}
                          </div>
                        </>
                      )}
                    </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
      </>
      )}

      {toast && (
        <motion.div
          className="toast"
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          transition={{ duration: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="toast-icon">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
          </svg>
          {toast}
        </motion.div>
      )}
    </div>
  );
}


export function LandingApp() {
  return <App />;
}
