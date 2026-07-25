import type { Metadata } from "next";
import Link from "next/link";
import { ComplexChrome } from "@/components/complex/ComplexChrome";
import "../play-theme.css";
import "../store-core-extracted.css";
import "../store-theme.css";

export const metadata: Metadata = {
  title: "Cửa hàng | Lyra",
  description:
    "Cửa hàng Lyra — cosmetic / ủng hộ server. Không P2W combat.",
};

const STORES = [
  {
    id: "survival",
    name: "Survival",
    href: "/store/username?store=survival",
    icon: "/images/complex/mode-vanilla.png",
  },
  {
    id: "cosmetics",
    name: "Cosmetics",
    href: "/store/username?store=cosmetics",
    icon: "/images/complex/mode-cobblemon.png",
  },
  {
    id: "support",
    name: "Hỗ trợ server",
    href: "/store/username?store=support",
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
      <ComplexChrome storeMode active="store" modeLabel="Survival" />

      <div className="p-body-main store-body">
        <div className="block store--index">
          <div className="block-container store-panel">
            <div className="block-body store-hero">
              <h1>Chọn cửa hàng</h1>
              <p>
                Ủng hộ Lyra Survival Towny — cosmetic / gift (không P2W combat). Chọn mục bên dưới.
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
                <Link href="/play/survival">Chơi</Link>
                <Link href="/login">Đăng nhập</Link>
              </div>
            </div>
            <div className="col">
              <h1>Ủng hộ chúng tôi</h1>
              <p>Ghé cửa hàng để mua cosmetic / ủng hộ server (không P2W combat)!</p>
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
