import type { Metadata } from "next";
import Link from "next/link";
import { ComplexChrome } from "@/components/complex/ComplexChrome";
import { FORUM_CATEGORIES } from "@/data/forums";
import "../../play-theme.css";
import "../../forums-theme.css";

export const metadata: Metadata = {
  title: "Danh sách diễn đàn | Lyra Pixelmon",
  description: "Danh sách chuyên mục diễn đàn Lyra Pixelmon.",
};

export default function ForumsBoardsPage() {
  return (
    <div className="forums-page-root template-forum_list">
      <ComplexChrome modeLabel="Pixelmon" active="forums" />

      <div className="p-body-inner">
        <div className="p-body-header">
          <div className="p-title">
            <div className="inline-icon base md mr-md" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
            </div>
            <h1 className="p-title-value">Danh sách diễn đàn</h1>
          </div>
        </div>

        <div className="forums-subnav-links">
          <Link href="/forums" className="">
            Trang chủ diễn đàn
          </Link>
          <Link href="/forums/boards" className="is-active">
            Danh sách chuyên mục
          </Link>
          <Link href="/play/pixelmon">Chơi Pixelmon</Link>
          <Link href="/store">Cửa hàng</Link>
        </div>
      </div>

      <div className="forums-board-wrap">
        {FORUM_CATEGORIES.map((cat) => (
          <section key={cat.title} className="forums-category">
            <h2 className="forums-category-header">{cat.title}</h2>
            {cat.boards.map((b) => {
              const external = b.href.startsWith("http");
              const Comp: "a" | typeof Link = external ? "a" : Link;
              const extra = external
                ? { target: "_blank", rel: "noreferrer" as const }
                : {};
              return (
                <Comp key={b.name} href={b.href} className="forums-node" {...extra}>
                  <div className="forums-node-icon" aria-hidden>
                    {b.kind === "link" ? "↗" : b.name.charAt(0)}
                  </div>
                  <div className="forums-node-main">
                    <div className="forums-node-title">{b.name}</div>
                    <p className="forums-node-desc">{b.desc}</p>
                  </div>
                  <div className="forums-node-stats">
                    <dl>
                      <dt>Chủ đề</dt>
                      <dd>{b.threads}</dd>
                    </dl>
                    <dl>
                      <dt>Tin nhắn</dt>
                      <dd>{b.messages}</dd>
                    </dl>
                  </div>
                </Comp>
              );
            })}
          </section>
        ))}
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
              <Link href="/play/pixelmon">Chơi</Link>
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
