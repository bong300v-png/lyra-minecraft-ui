import type { Metadata } from "next";
import Link from "next/link";
import { ComplexChrome } from "@/components/complex/ComplexChrome";
import "../play-theme.css";
import "../store-core-extracted.css";
import "../store-theme.css";

export const metadata: Metadata = {
  title: "Store | Lyra Pixelmon",
  description:
    "Select the server you wish to purchase something on from the options below! Giftcards are usable on Vanilla using /gc OR in the store!",
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
    name: "Giftcards",
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
              <h1>Select Your Store</h1>
              <p>
                Select the server you wish to purchase something on from the options below! Giftcards
                are usable on Vanilla using /gc OR in the store!
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
                      <div>Select store</div>
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
              <p>Check out our quick links for fast access to important locations on the forums!</p>
            </div>
            <div className="col">
              <h1>Quick Links</h1>
              <div className="play-quick-links">
                <Link href="/">News</Link>
                <Link href="/store">Store</Link>
                <Link href="/play/pixelmon">Pixelmon</Link>
                <Link href="/login">Log in</Link>
              </div>
            </div>
            <div className="col">
              <h1>Support Us</h1>
              <p>Check out our store to purchase ranks, items, and more!</p>
              <Link href="/store" className="button primary">
                Visit Store
              </Link>
            </div>
          </div>
          <p className="muted">Lyra © 2016-2026. All Rights Reserved. We are not affiliated with Mojang AB.</p>
        </footer>
      </div>
    </div>
  );
}
