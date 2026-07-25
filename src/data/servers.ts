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

/** Fallback if https://api.lyra.host/servers fails */
export const LYRA_FALLBACK_SERVERS: Server[] = [
  {
    name: "Vanilla",
    url: "lyra.host",
    className: "vanilla",
    primaryColor: "#10b981",
    message: null,
    discordInvite: "https://discord.gg/LyraVanilla",
    forumsUrl: "/play/vanilla",
    gameModes: [
      { name: "Factions", players: 0, maxPlayers: 100, status: "online" },
      { name: "Prison", players: 0, maxPlayers: 100, status: "online" },
      { name: "Skyblock", players: 0, maxPlayers: 100, status: "online" },
      { name: "Survival", players: 0, maxPlayers: 100, status: "online" },
      { name: "Lifesteal", players: 0, maxPlayers: 100, status: "online" },
      { name: "Creative", players: 0, maxPlayers: 100, status: "online" },
    ],
    guides: [
      { name: "Bắt đầu", url: "/guides/getting-started" },
      { name: "Nội quy", url: "/guides/rules" },
      { name: "Lệnh", url: "/guides/commands" },
    ],
  },
  {
    name: "Pixelmon",
    url: "lyra.host",
    className: "pixelmon",
    primaryColor: "#f59e0b",
    message: null,
    discordInvite: "https://discord.gg/LyraPixel",
    forumsUrl: "/play/pixelmon",
    gameModes: [
      { name: "Pixelmon", players: 0, maxPlayers: 100, status: "online" },
      { name: "Red", players: 0, maxPlayers: 100, status: "online" },
    ],
    guides: [
      { name: "Wiki Pixelmon", url: "/guides/pixelmon-wiki" },
      { name: "Hướng dẫn sinh sản", url: "/guides/breeding" },
      { name: "Huyền thoại", url: "/guides/legendaries" },
    ],
  },
  {
    name: "Cobblemon",
    url: "lyra.host",
    className: "cobblemon",
    primaryColor: "#F2C6DE",
    message: null,
    discordInvite: "https://discord.gg/LyraPixel",
    forumsUrl: "/play/cobblemon",
    gameModes: [{ name: "Cobblemon", players: 0, maxPlayers: 100, status: "online" }],
    guides: [
      { name: "Bắt đầu", url: "/cobblemon/getting-started" },
      { name: "Nội quy", url: "/cobblemon/rules" },
      { name: "Lệnh", url: "/cobblemon/commands" },
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
