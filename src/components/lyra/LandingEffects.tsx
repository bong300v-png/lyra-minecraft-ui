"use client";

import { useEffect } from "react";

/**
 * Port hiệu ứng DOM của bản design v2.1: canvas sao + parallax chuột,
 * progress bar, dot side-nav scrollspy, reveal khi cuộn, tilt 3D card,
 * hiệu ứng warp + spark khi click icon hành tinh.
 */
export function LandingEffects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const cv = document.getElementById("stars") as HTMLCanvasElement | null;
    let scrollY0 = 0;
    if (cv) {
      const ctx = cv.getContext("2d");
      const fit = () => {
        cv.width = window.innerWidth;
        cv.height = window.innerHeight;
      };
      fit();
      window.addEventListener("resize", fit);
      cleanups.push(() => window.removeEventListener("resize", fit));

      const stars = Array.from({ length: 180 }, () => ({
        x: Math.random(),
        y: Math.random(),
        z: Math.random() * 0.8 + 0.2,
        tw: Math.random() * Math.PI * 2,
      }));
      let mx = 0,
        my = 0,
        tx = 0,
        ty = 0;
      let raf = 0;
      const loop = (t: number) => {
        if (!ctx) return;
        tx += (mx - tx) * 0.05;
        ty += (my - ty) * 0.05;
        ctx.clearRect(0, 0, cv.width, cv.height);
        for (const s of stars) {
          const px = (s.x * cv.width + tx * 40 * s.z + cv.width) % cv.width;
          const py =
            (s.y * cv.height + ty * 40 * s.z - ((scrollY0 * 0.15 * s.z) % cv.height) + cv.height) %
            cv.height;
          const a = 0.25 + 0.75 * Math.abs(Math.sin(t / 1400 + s.tw));
          ctx.fillStyle =
            s.z > 0.75 ? `rgba(139,92,246,${a})` : `rgba(230,235,244,${a * s.z})`;
          const r = s.z * 1.8;
          ctx.fillRect(px, py, r, r);
        }
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      cleanups.push(() => cancelAnimationFrame(raf));

      const onMove = (x: number, y: number) => {
        mx = (x / window.innerWidth - 0.5) * 2;
        my = (y / window.innerHeight - 0.5) * 2;
        document.querySelectorAll<HTMLElement>("[data-depth]").forEach((el) => {
          const d = Number(el.dataset.depth);
          el.style.translate = `${(-mx * d).toFixed(1)}px ${(-my * d * 0.6).toFixed(1)}px`;
        });
      };
      const mm = (e: MouseEvent) => onMove(e.clientX, e.clientY);
      const tm = (e: TouchEvent) =>
        e.touches[0] && onMove(e.touches[0].clientX, e.touches[0].clientY);
      window.addEventListener("mousemove", mm, { passive: true });
      window.addEventListener("touchmove", tm, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("mousemove", mm);
        window.removeEventListener("touchmove", tm);
      });
    }

    const bar = document.getElementById("progress");
    const spies = Array.from(document.querySelectorAll<HTMLAnchorElement>("a.spy"));
    const dots = Array.from(document.querySelectorAll<HTMLElement>("#dotnav .dot"));
    const setActive = (id: string) => {
      spies.forEach((a) => {
        a.style.color = a.getAttribute("href") === "#" + id ? "#8B5CF6" : "";
      });
      dots.forEach((d) => {
        const on = d.dataset.sec === id;
        const pt = d.querySelector<HTMLElement>(".dot-pt");
        const lb = d.querySelector<HTMLElement>(".dot-label");
        if (!pt || !lb) return;
        pt.style.width = on ? "40px" : "22px";
        pt.style.background = on ? "#8B5CF6" : "#2a2a34";
        pt.style.boxShadow = on ? "0 0 14px rgba(139,92,246,.7)" : "none";
        lb.style.opacity = on ? "1" : "0";
        lb.style.transform = on ? "translateX(0)" : "translateX(6px)";
      });
    };
    const sc = () => {
      scrollY0 = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
      const mid = window.scrollY + window.innerHeight * 0.35;
      let cur = "top";
      dots.forEach((d) => {
        const sec = d.dataset.sec ? document.getElementById(d.dataset.sec) : null;
        if (sec && sec.offsetTop <= mid) cur = sec.id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", sc, { passive: true });
    sc();
    cleanups.push(() => window.removeEventListener("scroll", sc));

    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("on")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    document.querySelectorAll<HTMLElement>(".orbit-wrap").forEach((w) => {
      const onClick = () => {
        const icon = w.querySelector<HTMLElement>(".orbit-icon");
        if (!icon || icon.classList.contains("warping")) return;
        icon.classList.add("warping");
        setTimeout(() => icon.classList.remove("warping"), 1050);
        for (let i = 0; i < 12; i++) {
          const s = document.createElement("span");
          s.className = "spark";
          const a = (i / 12) * Math.PI * 2;
          const d = 70 + Math.random() * 50;
          s.style.setProperty("--dx", Math.cos(a) * d + "px");
          s.style.setProperty("--dy", Math.sin(a) * d + "px");
          w.appendChild(s);
          setTimeout(() => s.remove(), 850);
        }
      };
      w.addEventListener("click", onClick);
      cleanups.push(() => w.removeEventListener("click", onClick));
    });

    document.querySelectorAll<HTMLElement>(".tilt").forEach((card) => {
      const mv = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -14;
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 14;
        card.style.transform = `perspective(700px) rotateX(${rx.toFixed(1)}deg) rotateY(${ry.toFixed(1)}deg) translateZ(6px)`;
      };
      const lv = () => {
        card.style.transform = "";
      };
      card.addEventListener("mousemove", mv);
      card.addEventListener("mouseleave", lv);
      cleanups.push(() => {
        card.removeEventListener("mousemove", mv);
        card.removeEventListener("mouseleave", lv);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
