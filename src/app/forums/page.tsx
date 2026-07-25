import type { Metadata } from "next";
import Link from "next/link";
import { ComplexChrome } from "@/components/complex/ComplexChrome";
import { FORUM_NEWS } from "@/data/forums";
import "../play-theme.css";
import "../forums-theme.css";

export const metadata: Metadata = {
  title: "Trang chủ | Lyra",
  description:
    "Diễn đàn Lyra — tin tức, chơi game, Discord và ứng tuyển staff.",
};

export default function ForumsHomePage() {
  return (
    <div className="forums-page-root template-forum_list">
      <ComplexChrome modeLabel="Survival" active="forums" />

      <div className="p-body-inner">
        <div className="p-body-header">
          <div className="p-title">
            <div className="inline-icon base md mr-md" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </div>
            <h1 className="p-title-value">Trang chủ</h1>
          </div>
        </div>
      </div>

      <div id="content" className="forums-content">
        {/* Hero — image left, text right (dump section-block top) */}
        <div className="section-block top">
          <div className="container">
            <div className="section-inner">
              <div className="left section-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/forums/welcome.png" alt="" />
              </div>
              <div className="right section-text">
                <h1>Tham gia vui chơi!</h1>
                <p>
                  Tại đây bạn có thể thảo luận về server Lyra! Cũng có thể nộp đơn Staff, xem
                  Cửa hàng, và duyệt diễn đàn cùng người chơi khác!
                </p>
                <div className="flex gap-md">
                  <Link href="/play/survival" className="button primary btn-lg">
                    Chơi Survival
                  </Link>
                  <Link href="/play/bedrock" className="button btn-lg">
                    Chơi Bedrock
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discord — text left, gif right */}
        <div className="section-block section-discord wrapper--art blocky">
          <div className="container">
            <div className="section-inner">
              <div className="left section-text pt-lg">
                <h1>Đừng bỏ lỡ!</h1>
                <p>
                  Discord cho bạn thông báo mới nhất, sneak peek, ticket hỗ trợ và hơn thế! Tham gia
                  cộng đồng, trò chuyện và tìm bạn chơi cùng!
                </p>
                <a
                  href="https://discord.gg/LyraPixel"
                  target="_blank"
                  rel="noreferrer"
                  className="button btn-lg discord"
                >
                  Vào Discord
                </a>
              </div>
              <div className="right section-image flip">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/forums/discord.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* News cards */}
        <div className="forums-news-list benj-core-news-list" id="news">
          {FORUM_NEWS.map((n) => (
            <div key={n.title} className="benj-core-news-item block">
              <div className="block-container forums-news-card">
                <div className="block-body news-body">
                  <div className="benj-core-news-header">
                    <h3 className="benj-core-news-title">
                      <Link href={n.href}>{n.title}</Link>
                    </h3>
                  </div>
                  <div className="benj-core-news-content body">{n.body}</div>
                  <div className="benj-core-news-meta forums-news-meta">
                    <span>
                      Bởi <strong>{n.author}</strong> · {n.date}
                    </span>
                  </div>
                  <div className="benj-core-news-readmore forums-news-readmore">
                    <Link href={n.href}>Đọc thêm…</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Staff — image + text */}
        <div className="section-block section-staff">
          <div className="container">
            <div className="section-inner">
              <div className="left section-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/forums/welcome-staff.png" alt="" />
              </div>
              <div className="right section-text">
                <h1>Gia nhập đội Staff</h1>
                <p>
                  Muốn trở thành một phần của đội Staff? Ứng tuyển đang mở — chúng tôi đang tìm thành
                  viên mới! Bấm Bắt đầu để tạo đơn.
                </p>
                <div className="flex gap-md">
                  <a
                    href="https://discord.gg/LyraPixel"
                    target="_blank"
                    rel="noreferrer"
                    className="button primary btn-lg"
                  >
                    Bắt đầu
                  </a>
                  <Link href="/forums/boards" className="button btn-lg">
                    Danh sách diễn đàn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="play-clone-foot" id="footer">
        <div className="footer-cols" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 30px" }}>
          <div className="col">
            <h1>Lyra</h1>
            <p>Xem liên kết nhanh để vào các khu vực quan trọng trên diễn đàn!</p>
          </div>
          <div className="col">
            <h1>Liên kết nhanh</h1>
            <div className="play-quick-links">
              <Link href="/forums">Tin tức</Link>
              <Link href="/forums/boards">Diễn đàn</Link>
              <Link href="/store">Cửa hàng</Link>
              <Link href="/play/survival">Chơi</Link>
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
  );
}
