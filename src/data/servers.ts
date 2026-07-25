export type Guide = { name: string; url: string };
export type GameMode = {
  name: string;
  players: number;
  maxPlayers: number;
  status: "online" | "offline";
  icon?: string;
};
export type Server = {
  name: string;
  url: string;
  className: string;
  primaryColor: string;
  message: string | null;
  discordInvite: string;
  forumsUrl: string;
  iconUrl?: string;
  gameModes: GameMode[];
  guides: Guide[];
};

/**
 * Product truth: ~/lyra.host/docs/product.md + features.md
 * One network — Survival Towny SMP, not multi-mode Complex clone.
 */
export const LYRA_FALLBACK_SERVERS: Server[] = [
  {
    name: "Survival",
    url: "lyra.host",
    className: "vanilla",
    primaryColor: "#47a7eb",
    message: "Lobby → Towny land → shop · non-P2W · Java + Bedrock",
    discordInvite: "https://discord.gg/LyraPixel",
    forumsUrl: "/forums",
    gameModes: [
      { name: "Lobby", players: 0, maxPlayers: 100, status: "online" },
      { name: "Survival Towny", players: 0, maxPlayers: 200, status: "online" },
      { name: "Chợ / Shop", players: 0, maxPlayers: 100, status: "online" },
      { name: "Resource", players: 0, maxPlayers: 100, status: "online" },
      { name: "Arena PvP", players: 0, maxPlayers: 50, status: "online" },
    ],
    guides: [
      { name: "Cách vào game", url: "/play/survival" },
      { name: "Diễn đàn", url: "/forums" },
      { name: "Nội quy", url: "/forums/boards" },
    ],
  },
];

type ApiGuide = { name?: string; title?: string; url: string };
type ApiServer = Omit<Server, "guides"> & { guides?: ApiGuide[] };

export function normalizeServers(data: ApiServer[]): Server[] {
  return data.map((server) => ({
    ...server,
    guides:
      server.guides?.map((guide) => ({
        name: guide.name || guide.title || "Guide",
        url: guide.url,
      })) || [],
  }));
}
