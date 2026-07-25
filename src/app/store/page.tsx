import type { Metadata } from "next";
import Link from "next/link";
import { ComplexChrome } from "@/components/complex/ComplexChrome";
import "../play-theme.css";
import "../store-core-extracted.css";
import "../store-theme.css";

export const metadata: Metadata = {
  title: "Cửa hàng | Lyra Pixelmon",
  description:
    "Chọn máy chủ bạn muốn mua vật phẩm! Thẻ quà dùng được trên Vanilla bằng /gc hoặc trong cửa hàng!",
};

const STORES = [
  {
    id: "pixelmon",
    name: "Pixelmon",
    href: "/store/username?store=pixelmon",
    icon: "/images/complex/mode-pixelmon.png",
  },
  {
    id: "cobblemon",
    name: "Cobblemon",
    href: "/store/username?store=cobblemon",
    icon: "/images/complex/mode-cobblemon.png",
  },
  {
    id: "vanilla",
    name: "Vanilla",
    href: "/store/username?store=vanilla",
    icon: "/images/complex/mode-vanilla.png",
  },
  {
    id: "giftcards",
    name: "Thẻ quà",
    href: "/store/username?store=giftcards",
    icon: "/images/complex/mode-giftcard.png",
  },
] as const;

export default function StoreIndexPage() {
  return (
    <div className="store-page-root template-complex_store_index">
      <ComplexChrome storeMode active="store" modeLabel="Pixelmon" />

      <div className="p-body-main store-body">
        <div className="block store--index">
          <div className="block-container store-panel">
            <div className="block-body store-hero">
              <h1>Chọn cửa hàng</h1>
              <p>
                Chọn máy chủ bạn muốn mua vật phẩm ở các lựa chọn bên dưới! Thẻ quà dùng được trên
                Vanilla bằng lệnh /gc hoặc trong cửa hàng!
              </p>
            </div>

            <div className="store-categories-grid">
              {STORES.map((s) => (
                <Link key={s.id} href={s.href} className="storeCard" data-gamemode={s.name}>
                  <div>
                    <div className="storeCard-icon">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.icon} alt={s.name} />
                    </div>
                    <div className="storeCard-text">
                      <h1>{s.name}</h1>
                      <div>Chọn cửa hàng</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

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
                <Link href="/play/pixelmon">Pixelmon</Link>
                <Link href="/login">Đăng nhập</Link>
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
