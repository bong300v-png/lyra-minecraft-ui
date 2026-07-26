export const SITE = {
  name: "Lyra",
  ip: "play.lyra.host",
  javaPort: "25565",
  version: "Purpur 26.1.2",
  discord: "https://discord.gg/LyraPixel",
  maxSlots: 20,
  season: { name: "Hoa Anh Đào", ends: "30/09/2026" },
} as const;

export const NAV_LINKS = [
  { href: "/play/", label: "HƯỚNG DẪN" },
  { href: "/vote/", label: "VOTE" },
  { href: "/store/", label: "STORE" },
  { href: "/forums/", label: "FORUMS" },
] as const;

export const FOOTER_LINKS = [
  { href: "/rules/", label: "NỘI QUY" },
  { href: "/news/", label: "TIN TỨC" },
  { href: "/staff/", label: "ĐỘI NGŨ" },
  { href: "/bans/", label: "BẢNG BAN" },
  { href: "/terms/", label: "ĐIỀU KHOẢN & BẢO MẬT" },
] as const;
