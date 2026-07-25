export type PlayStep = {
  title: string;
  body: string;
  image: string;
  cta?: { label: string; href: string };
};

export type FaqItem = { q: string; a: string };

export type PlayPage = {
  slug: "vanilla" | "pixelmon" | "cobblemon";
  title: string;
  heading: string;
  ip: string;
  primaryColor: string;
  discord: string;
  modeLabel: string;
  modes: { label: string; href: string; active?: boolean }[];
  steps: PlayStep[];
  altTracks?: { name: string; steps: PlayStep[] }[];
  faqs: FaqItem[];
};

/** Live dump 2026-07-25 from lyra.host play pages — copy/FAQ/IP exact */
export const PLAY_PAGES: Record<string, PlayPage> = {
  vanilla: {
    slug: "vanilla",
    title: "Play Now | Lyra Vanilla",
    heading: "Play Now",
    ip: "play.lyra.host",
    primaryColor: "#10b981",
    discord: "https://discord.gg/LyraVanilla",
    modeLabel: "Vanilla",
    modes: [
      { label: "Vanilla", href: "/play/vanilla", active: true },
      { label: "Pixelmon", href: "/play/pixelmon" },
      { label: "Cobblemon", href: "/play/cobblemon" },
    ],
    steps: [
      {
        title: "Download the Minecraft Launcher",
        body: "Download the launcher from the Minecraft website. You may also take a look at the Lunar client as we're partnered with them here: https://www.lunarclient.com/download",
        image: "/images/play/vanilla/step1.png",
        cta: { label: "Download Minecraft", href: "https://www.minecraft.net/en-us/download" },
      },
      {
        title: "Login and Select Multiplayer",
        body: "Once logged into Minecraft, select the Multiplayer button.",
        image: "/images/play/vanilla/step2.png",
      },
      {
        title: "Add our Server",
        body: "Select the Add Server button.",
        image: "/images/play/vanilla/step3.png",
      },
      {
        title: "Paste the IP Address and Enable Resource Packs",
        body: "Paste play.lyra.host as the server address and enable server resource packs when prompted.",
        image: "/images/play/vanilla/step4.png",
      },
      {
        title: "Click to Join",
        body: "Select the server and click Join Server to start playing on Lyra Vanilla.",
        image: "/images/play/vanilla/step5.png",
      },
    ],
    faqs: [
      {
        q: "Can I play with friends?",
        a: "Yes — share play.lyra.host so friends can join the same network.",
      },
      {
        q: "Need help?",
        a: "Join Discord for live support and guides.",
      },
    ],
  },
  pixelmon: {
    slug: "pixelmon",
    title: "Play Pixelmon | Lyra Pixelmon",
    heading: "Play Pixelmon",
    ip: "play.lyra.host",
    // live pixelmon extra.less primary
    primaryColor: "#e93a4f",
    discord: "https://discord.gg/LyraPixel",
    modeLabel: "Pixelmon",
    modes: [
      { label: "Vanilla", href: "/play/vanilla" },
      { label: "Pixelmon", href: "/play/pixelmon", active: true },
      { label: "Cobblemon", href: "/play/cobblemon" },
    ],
    steps: [
      {
        title: "Download the CurseForge App",
        body: "Download the CurseForge launcher for your operating system to get started! This app will allow you to download our Modpack and stay up to date!",
        image: "/images/play/pixelmon/step1.png",
        cta: { label: "CurseForge Website", href: "https://www.curseforge.com/download/app" },
      },
      {
        title: 'Install the "Lyra Pixelmon" Modpack',
        body: 'Click the link below to go to the CurseForge page for our modpack, click "Install Via App" to automatically download the pack. A popup may appear asking if your browser can open CurseForge, be sure to select "Allow". Alternatively, you can search CurseForge for "Lyra Pixelmon" after selecting Minecraft to play.',
        image: "/images/play/pixelmon/step2.png",
        cta: {
          label: "Download the Pixelmon Modpack",
          href: "https://www.curseforge.com/minecraft/modpacks/lyra-pixelmon",
        },
      },
      {
        title: 'Click "Play" in CurseForge',
        body: 'Once the Modpack has finished Downloading, you should be able to click "Play" to now launch within your CurseForge App! The first launch may take a while, however you should not have to edit any settings for a smooth experience!',
        image: "/images/play/pixelmon/step3.png",
      },
      {
        title: "Click to Join the Server",
        body: "You should be on the Multiplayer menu once the launcher has finished loading your game. Select the Join Server button or Double Click the Server Icon from your menu to join our network!",
        image: "/images/play/pixelmon/step4.png",
      },
    ],
    faqs: [
      {
        q: "What if I use another Launcher?",
        a: "At this time we only actively update CurseForge, so we recommend using these for automatic updates and fixes for when Pixelmon Mod updates and custom content additions. Other launchers can be updated manually if needed however!",
      },
      {
        q: "How can I install shaders as well?",
        a: 'You can manually add shaders by downloading the NeoForge version of "Iris" for 1.21.1 and adding it to your Mods folder within CurseForge. You can get it at this link: https://www.curseforge.com/minecraft/mc-mods/irisshaders. You will now see an Iris button in-game for shaders.',
      },
      {
        q: "Can I play with friends?",
        a: "You can play with friends at any time on Pixelmon! When in-game use the /friends and /tpa commands to go to eachother!",
      },
      {
        q: "Why do all my items look like paper or basic minecraft textures?",
        a: "This may mean you do not have the resourcepack installed, you can use /resourcepack in-game to download our textures and custom items!",
      },
      {
        q: "Is the server cracked?",
        a: "The server is not cracked and it is required to have a valid Minecraft Java account to play",
      },
    ],
  },
  cobblemon: {
    slug: "cobblemon",
    title: "Play Cobblemon | Lyra",
    heading: "Play Cobblemon",
    ip: "play.lyra.host",
    primaryColor: "#F2C6DE",
    discord: "https://discord.gg/LyraPixel",
    modeLabel: "Cobblemon",
    modes: [
      { label: "Vanilla", href: "/play/vanilla" },
      { label: "Pixelmon", href: "/play/pixelmon" },
      { label: "Cobblemon", href: "/play/cobblemon", active: true },
    ],
    steps: [
      {
        title: "Download the CurseForge App",
        body: "Install CurseForge to run the Lyra Cobblemon modpack.",
        image: "/images/play/cobblemon/step1.png",
        cta: { label: "CurseForge Website", href: "https://www.curseforge.com/download/app" },
      },
      {
        title: 'Install the "Lyra Cobblemon" Modpack',
        body: "Install Via App from the Lyra Cobblemon CurseForge page, or search CurseForge for Lyra Cobblemon.",
        image: "/images/play/cobblemon/step2.png",
      },
      {
        title: 'Click "Play" in CurseForge',
        body: "Launch the modpack after it finishes installing.",
        image: "/images/play/cobblemon/step3.png",
      },
      {
        title: "Click to Join the Server",
        body: "Add play.lyra.host in Multiplayer and join.",
        image: "/images/play/cobblemon/step4.png",
      },
    ],
    altTracks: [
      {
        name: "Modrinth",
        steps: [
          {
            title: "Download the Modrinth App",
            body: "Install the Modrinth App as an alternative launcher for Lyra Cobblemon.",
            image: "/images/play/cobblemon/modrinth1.png",
            cta: { label: "Modrinth Website", href: "https://modrinth.com/app" },
          },
          {
            title: 'Install the "Lyra Cobblemon" Modrinth Modpack',
            body: "Install the Lyra Cobblemon pack from Modrinth.",
            image: "/images/play/cobblemon/modrinth2.png",
          },
          {
            title: 'Go to the Modrinth App and click "Install"',
            body: "Confirm install in the Modrinth app when prompted.",
            image: "/images/play/cobblemon/modrinth3.png",
          },
          {
            title: 'Click "Play" to start your Lyra Cobblemon Adventure!',
            body: "Launch and join play.lyra.host.",
            image: "/images/play/cobblemon/modrinth4.png",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "CurseForge or Modrinth?",
        a: "Both tracks are supported for Cobblemon — pick either tab above.",
      },
      {
        q: "Server IP?",
        a: "play.lyra.host",
      },
    ],
  },
};

export function getPlayPage(slug: string): PlayPage | undefined {
  return PLAY_PAGES[slug];
}
