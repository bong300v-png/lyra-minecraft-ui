export type PlayStep = {
  title: string;
  body: string;
  image: string;
  cta?: { label: string; href: string };
};

export type PlayPage = {
  slug: string;
  title: string;
  heading: string;
  ip: string;
  primaryColor: string;
  discord: string;
  modeLabel: string;
  modes: { label: string; href: string; active?: boolean }[];
  steps: PlayStep[];
  altTracks?: { name: string; steps: PlayStep[] }[];
  faqs: { q: string; a: string }[];
};

/**
 * Product: Lobby → Survival Towny → shops → optional thin PvP
 * Join: lyra.host (SRV) · fallback play.lyra.host · Java 25565 + Bedrock 19132
 */
const SURVIVAL: PlayPage = {
  slug: "survival",
  title: "Chơi | Lyra Survival Towny",
  heading: "Vào Lyra Survival",
  ip: "lyra.host",
  primaryColor: "#47a7eb",
  discord: "https://discord.gg/LyraPixel",
  modeLabel: "Survival",
  modes: [
    { label: "Survival", href: "/play/survival", active: true },
    { label: "Bedrock", href: "/play/bedrock" },
  ],
  steps: [
    {
      title: "Tải Minecraft Java",
      body: "Cần Minecraft Java (cracked/offline OK theo chính sách server). Tải launcher chính thức hoặc launcher bạn đang dùng.",
      image: "/images/play/vanilla/step1.png",
      cta: { label: "Tải Minecraft", href: "https://www.minecraft.net/en-us/download" },
    },
    {
      title: "Mở Multiplayer",
      body: "Vào game → Multiplayer → Add Server (Thêm máy chủ).",
      image: "/images/play/vanilla/step2.png",
    },
    {
      title: "Nhập IP: lyra.host",
      body: "Server Address: lyra.host (DNS SRV tự trỏ port 25565). Nếu client không hỗ trợ SRV, dùng play.lyra.host.",
      image: "/images/play/vanilla/step3.png",
    },
    {
      title: "Join → AuthMe → Lobby",
      body: "Vào server → đăng ký/đăng nhập AuthMe → đọc rules ở Lobby → warp Survival. Đất Towny: solo claim hoặc town nhóm (rẻ hơn). Shop người chơi + shop server (không P2W combat).",
      image: "/images/play/vanilla/step4.png",
    },
  ],
  faqs: [
    {
      q: "Server là gì?",
      a: "Survival SMP Towny — lobby, claim đất solo/nhóm, build, shop, optional arena PvP. Không phải skyblock hay hub minigame.",
    },
    {
      q: "Java hay Bedrock?",
      a: "Cả hai (dual-end). Java TCP 25565; Bedrock UDP 19132 qua Geyser/Floodgate. Cùng hostname lyra.host / play.lyra.host.",
    },
    {
      q: "IP join?",
      a: "lyra.host (ưu tiên). Fallback: play.lyra.host. Không orange-cloud port game — chỉ DNS grey cho play.",
    },
    {
      q: "Có P2W không?",
      a: "Không P2W combat / crate power. Store (nếu có) chỉ cosmetic/hỗ trợ — xem product.md.",
    },
    {
      q: "Town có bị wipe im lặng?",
      a: "Không. Town/survival claims là di sản. Chỉ resource/event world reset có lịch công bố (charter).",
    },
  ],
};

const BEDROCK: PlayPage = {
  ...SURVIVAL,
  slug: "bedrock",
  title: "Chơi Bedrock | Lyra",
  heading: "Vào Lyra (Bedrock / PE)",
  modeLabel: "Bedrock",
  modes: [
    { label: "Survival", href: "/play/survival" },
    { label: "Bedrock", href: "/play/bedrock", active: true },
  ],
  steps: [
    {
      title: "Mở Minecraft Bedrock",
      body: "Dùng Minecraft Bedrock (Windows/mobile/console có thể join qua địa chỉ nếu hỗ trợ).",
      image: "/images/play/vanilla/step1.png",
    },
    {
      title: "Servers → Add Server",
      body: "Thêm server mới. Address: lyra.host (hoặc play.lyra.host). Port: 19132 nếu client hỏi riêng.",
      image: "/images/play/vanilla/step2.png",
    },
    {
      title: "Join qua Geyser",
      body: "Kết nối Floodgate/Geyser — identity Bedrock riêng, không đụng inventory Java. Vào Lobby → Survival Towny.",
      image: "/images/play/vanilla/step3.png",
    },
    {
      title: "Chơi như Java",
      body: "Cùng product: claim/town, shop, Discord crew. Xem nội quy trên diễn đàn / Discord.",
      image: "/images/play/vanilla/step4.png",
    },
  ],
  faqs: SURVIVAL.faqs,
};

/** Main + aliases so old /play/pixelmon links still resolve to product join */
export const PLAY_PAGES: Record<string, PlayPage> = {
  survival: SURVIVAL,
  join: SURVIVAL,
  bedrock: BEDROCK,
  vanilla: { ...SURVIVAL, slug: "vanilla", modes: SURVIVAL.modes.map((m) => ({ ...m, active: m.href === "/play/survival" })) },
  pixelmon: { ...SURVIVAL, slug: "pixelmon", title: "Chơi | Lyra Survival", heading: "Vào Lyra Survival" },
  cobblemon: { ...SURVIVAL, slug: "cobblemon", title: "Chơi | Lyra Survival", heading: "Vào Lyra Survival" },
};

export function getPlayPage(slug: string): PlayPage | undefined {
  return PLAY_PAGES[slug];
}
