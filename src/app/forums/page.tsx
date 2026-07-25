import type { Metadata } from "next";
import Link from "next/link";
import { ComplexChrome } from "@/components/complex/ComplexChrome";
import { FORUM_NEWS } from "@/data/forums";
import "../play-theme.css";
import "../forums-theme.css";

export const metadata: Metadata = {
  title: "Diễn đàn | Lyra Pixelmon",
  description:
    "Diễn đàn Lyra Pixelmon — tin tức, chơi game, Discord và ứng tuyển staff.",
};

export default function ForumsHomePage() {
  return (
    <div className="forums-page-root template-forum_list">
      <ComplexChrome modeLabel="Pixelmon" active="forums" />

      <div className="p-body-main">
        <div className="p-body-header">
          <div className="p-title">
            <div className="inline-icon base md mr-md" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </div>
            <h1 className="p-title-value">Trang chủ</h1>
          </div>
        </div>

        {/* Hero — Join the fun (dump: section-block top) */}
        <section className="forums-section forums-hero">
          <div className="forums-section-inner">
            <div className="forums-section-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/forums/welcome.png" alt="" />
            </div>
            <div className="forums-section-text">
              <h1>Tham gia vui chơi!</h1>
              <p>
                Tại đây bạn có thể thảo luận về server Lyra Pixelmon! Cũng có thể nộp đơn Staff, xem
                Cửa hàng, và duyệt diễn đàn cùng người chơi khác!
              </p>
              <div className="forums-cta-row">
                <Link href="/play/pixelmon" className="button primary btn-lg">
                  Chơi Pixelmon
                </Link>
                <Link href="/play/cobblemon" className="button btn-lg">
                  Chơi Cobblemon
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Discord — Don't miss out */}
        <section className="forums-section forums-section-discord">
          <div className="forums-section-inner">
            <div className="forums-section-text">
              <h1>Đừng bỏ lỡ!</h1>
              <p>
                Discord cho bạn thông báo mới nhất, sneak peek, ticket hỗ trợ và hơn thế! Tham gia cộng
                đồng, trò chuyện và tìm bạn chơi cùng!
              </p>
              <div className="forums-cta-row">
                <a
                  href="https://discord.gg/LyraPixel"
                  target="_blank"
                  rel="noreferrer"
                  className="button discord btn-lg"
                >
                  Vào Discord
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* News cards */}
        <section className="forums-news" id="news">
          <div className="forums-news-grid">
            {FORUM_NEWS.map((n) => (
              <article key={n.title} className="forums-news-card">
                <h3>
                  <Link href={n.href}>{n.title}</Link>
                </h3>
                <div className="body">{n.body}</div>
                <div className="forums-news-meta">
                  <span>
                    Bởi <strong>{n.author}</strong> · {n.date}
                  </span>
                </div>
                <div className="forums-news-readmore">
                  <Link href={n.href}>Đọc thêm…</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Staff apply */}
        <section className="forums-section forums-staff">
          <div className="forums-section-inner">
            <div className="forums-section-text">
              <h1>Gia nhập đội Staff</h1>
              <p>
                Muốn trở thành một phần của đội Staff? Ứng tuyển đang mở — chúng tôi đang tìm thành
                viên mới! Bấm Bắt đầu để tạo đơn.
              </p>
              <div className="forums-cta-row">
                <a
                  href="https://discord.gg/LyraPixel"
                  target="_blank"
                  rel="noreferrer"
                  className="button primary btn-lg"
                >
                  Bắt đầu
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="play-clone-foot" id="footer">
          <div className="footer-cols">
            <div className="col">
              <h1>Lyra</h1>
              <p>Xem liên kết nhanh để vào các khu vực quan trọng trên diễn đàn!</p>
            </div>
            <div className="col">
              <h1>Liên kết nhanh</h1>
              <div className="play-quick-links">
                <Link href="/forums">Tin tức</Link>
                <Link href="/store">Cửa hàng</Link>
                <Link href="/play/pixelmon">Pixelmon</Link>
                <a href="https://discord.gg/LyraPixel" target="_blank" rel="noreferrer">
                  Discord
                </a>
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
    </div>
  );
}
