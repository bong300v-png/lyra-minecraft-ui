export type ForumNews = {
  title: string;
  body: string;
  author: string;
  date: string;
  href: string;
};

export type ForumBoard = {
  name: string;
  desc: string;
  threads: number;
  messages: number;
  href: string;
  kind?: "forum" | "link";
};

export type ForumCategory = {
  title: string;
  boards: ForumBoard[];
};

/** Product-aligned forum home (not Pixelmon network) */
export const FORUM_NEWS: ForumNews[] = [
  {
    title: "Lyra Phase 0 — Survival Towny",
    body:
      "Lyra ship: Lobby → Survival Towny (solo hoặc town nhóm rẻ hơn) → build → shop người chơi → optional arena PvP. Java cracked + Bedrock. Không skyblock, không hub 15 mode, không P2W combat.",
    author: "Lyra Staff",
    date: "2026",
    href: "/forums/#news",
  },
  {
    title: "Charter: không wipe town im lặng",
    body:
      "Town/survival claims là di sản — không xóa im lặng. Resource world reset chỉ khi có lịch công bố Discord (≥7 ngày). Chi tiết: product + features docs.",
    author: "Lyra Staff",
    date: "2026",
    href: "/forums/#news",
  },
];

export const FORUM_CATEGORIES: ForumCategory[] = [
  {
    title: "Cộng đồng",
    boards: [
      {
        name: "Thông báo",
        desc: "Tin chính thức, bảo trì, lịch resource reset.",
        threads: 1,
        messages: 1,
        href: "/forums/boards/#announcements",
      },
      {
        name: "Nội quy",
        desc: "Rules server + anti-bot/macro · non-P2W.",
        threads: 1,
        messages: 1,
        href: "/forums/boards/#rules",
      },
      {
        name: "Hướng dẫn Towny / Shop",
        desc: "Claim solo, town nhóm, QuickShop, jobs cap.",
        threads: 1,
        messages: 1,
        href: "/forums/boards/#guides",
      },
      {
        name: "Góp ý & Bug",
        desc: "Báo lỗi, đề xuất Phase 0.",
        threads: 0,
        messages: 0,
        href: "/forums/boards/#feedback",
      },
    ],
  },
  {
    title: "Hỗ trợ & Staff",
    boards: [
      {
        name: "Ứng tuyển Staff",
        desc: "Gia nhập team — qua Discord ticket.",
        threads: 0,
        messages: 0,
        href: "https://discord.gg/LyraPixel",
        kind: "link",
      },
      {
        name: "Kháng cáo ban",
        desc: "LibertyBans appeal — Discord.",
        threads: 0,
        messages: 0,
        href: "https://discord.gg/LyraPixel",
        kind: "link",
      },
      {
        name: "Báo cáo người chơi",
        desc: "Grief / cheat / abuse.",
        threads: 0,
        messages: 0,
        href: "https://discord.gg/LyraPixel",
        kind: "link",
      },
    ],
  },
];
