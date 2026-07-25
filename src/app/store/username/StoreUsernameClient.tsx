"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ComplexChrome } from "@/components/complex/ComplexChrome";
import "../../play-theme.css";
import "../../store-core-extracted.css";
import "../../store-theme.css";

const STORE_LABEL: Record<string, string> = {
  pixelmon: "Pixelmon",
  cobblemon: "Cobblemon",
  vanilla: "Vanilla",
  giftcards: "Giftcards",
};

export default function StoreUsernameClient() {
  const sp = useSearchParams();
  const store = (sp.get("store") || "pixelmon").toLowerCase();
  const label = STORE_LABEL[store] || "Pixelmon";
  const [user, setUser] = useState("");
  const [platform, setPlatform] = useState<"java" | "bedrock">("java");
  const [msg, setMsg] = useState("");

  const official = useMemo(() => {
    if (store === "vanilla") return "https://www.lyra.host/forums/vanilla/store";
    return "https://www.lyra.host/forums/pixelmon/store/username";
  }, [store]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const name = user.trim();
    if (name.length < 3 || name.length > 16) {
      setMsg("Username must be 3–16 characters.");
      return;
    }
    setMsg(`Demo only — opening official ${label} store for ${platform === "bedrock" ? "." : ""}${name}…`);
    window.setTimeout(() => {
      window.open(official, "_blank", "noopener,noreferrer");
    }, 500);
  }

  return (
    <div className="store-page-root template-complex_store_username_entry">
      <ComplexChrome storeMode active="store" modeLabel={label === "Giftcards" ? "Pixelmon" : label} />

      <div className="p-body-main store-body">
        <div className="block store-login" style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <div className="block-container">
            <div className="block-body">
              <h2>Enter Your Minecraft Username</h2>
              <p className="store-selected-label">
                Store: <strong>{label}</strong>
              </p>

              <form onSubmit={onSubmit} id="usernameForm">
                <div className="store-platform-toggle" style={{ marginBottom: 20 }}>
                  <button
                    type="button"
                    className={`platform-btn platform-btn--java${platform === "java" ? " is-active" : ""}`}
                    onClick={() => setPlatform("java")}
                  >
                    Java
                  </button>
                  <button
                    type="button"
                    className={`platform-btn platform-btn--bedrock${platform === "bedrock" ? " is-active" : ""}`}
                    onClick={() => setPlatform("bedrock")}
                  >
                    Bedrock
                  </button>
                </div>

                <div className="store-username-input-wrap">
                  {platform === "bedrock" ? <span className="store-bedrock-prefix" style={{ display: "flex" }}>.</span> : null}
                  <input
                    type="text"
                    name="minecraft_username"
                    placeholder="Enter your ingame username..."
                    maxLength={16}
                    required
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    autoComplete="username"
                  />
                </div>

                <p className="store-note">
                  {platform === "java"
                    ? "Java Edition · Must be 3–16 characters"
                    : "Bedrock · Prefix . is applied on official store"}
                </p>

                <button type="submit" className="button primary store-continue">
                  Continue to Store
                </button>
              </form>

              {msg ? <p className="store-msg">{msg}</p> : null}

              <Link href="/store" className="store-back">
                ← Back to Store Selection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
