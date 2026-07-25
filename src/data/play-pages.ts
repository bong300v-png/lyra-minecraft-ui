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

/** Play guides — Vietnamese UI */
export const PLAY_PAGES: Record<string, PlayPage> = {
  vanilla: {
    slug: "vanilla",
    title: "Chơi ngay | Lyra Vanilla",
    heading: "Chơi ngay",
    ip: "lyra.host",
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
        title: "Tải Minecraft Launcher",
        body: "Tải launcher từ trang Minecraft. Bạn cũng có thể xem Lunar Client (đối tác): https://www.lunarclient.com/download",
        image: "/images/play/vanilla/step1.png",
        cta: { label: "Tải Minecraft", href: "https://www.minecraft.net/en-us/download" },
      },
      {
        title: "Đăng nhập và chọn Multiplayer",
        body: "Mở Minecraft, đăng nhập tài khoản Java, rồi chọn Multiplayer.",
        image: "/images/play/vanilla/step2.png",
      },
      {
        title: "Thêm máy chủ",
        body: "Chọn nút Add Server.",
        image: "/images/play/vanilla/step3.png",
      },
      {
        title: "Dán IP và bật Resource Pack",
        body: "Dán lyra.host làm địa chỉ máy chủ và bật resource pack khi được hỏi.",
        image: "/images/play/vanilla/step4.png",
      },
      {
        title: "Nhấn Join",
        body: "Chọn máy chủ và nhấn Join Server để chơi trên Lyra Vanilla.",
        image: "/images/play/vanilla/step5.png",
      },
    ],
    faqs: [
      {
        q: "Có chơi cùng bạn bè được không?",
        a: "Có — chia sẻ lyra.host để bạn bè vào cùng mạng.",
      },
      {
        q: "Cần hỗ trợ ở đâu?",
        a: "Vào Discord để được hỗ trợ và xem hướng dẫn.",
      },
    ],
  },
  pixelmon: {
    slug: "pixelmon",
    title: "Chơi Pixelmon | Lyra Pixelmon",
    heading: "Chơi Pixelmon",
    ip: "lyra.host",
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
        title: "Tải ứng dụng CurseForge",
        body: "Tải launcher CurseForge cho hệ điều hành của bạn! App này giúp tải Modpack và luôn cập nhật!",
        image: "/images/play/pixelmon/step1.png",
        cta: { label: "Trang CurseForge", href: "https://www.curseforge.com/download/app" },
      },
      {
        title: 'Cài Modpack "Lyra Pixelmon"',
        body: 'Bấm link bên dưới tới trang CurseForge, chọn "Install Via App" để tải pack. Trình duyệt có thể hỏi mở CurseForge — chọn "Allow". Hoặc tìm "Lyra Pixelmon" trong CurseForge sau khi chọn Minecraft.',
        image: "/images/play/pixelmon/step2.png",
        cta: {
          label: "Tải Modpack Pixelmon",
          href: "https://www.curseforge.com/minecraft/modpacks/complex-gaming-pixelmon",
        },
      },
      {
        title: 'Bấm "Play" trong CurseForge',
        body: 'Khi Modpack tải xong, bấm "Play" để mở trong CurseForge! Lần đầu có thể lâu, thường không cần chỉnh thêm cài đặt.',
        image: "/images/play/pixelmon/step3.png",
      },
      {
        title: "Vào máy chủ",
        body: "Vào menu Multiplayer sau khi game load xong. Chọn Join Server hoặc double-click icon máy chủ để vào mạng!",
        image: "/images/play/pixelmon/step4.png",
      },
    ],
    faqs: [
      {
        q: "Nếu dùng launcher khác thì sao?",
        a: "Hiện chúng tôi chỉ cập nhật chính thức trên CurseForge, nên khuyến nghị dùng để tự cập nhật khi Pixelmon/Mod nội dung thay đổi. Launcher khác có thể cập nhật thủ công!",
      },
      {
        q: "Làm sao cài shader?",
        a: "Tải NeoForge version của Iris cho 1.21.1, thả vào thư mục Mods trong CurseForge: https://www.curseforge.com/minecraft/mc-mods/irisshaders — trong game sẽ có nút Iris cho shader.",
      },
      {
        q: "Có chơi cùng bạn bè được không?",
        a: "Có! Trong game dùng /friends và /tpa để đến chỗ nhau!",
      },
      {
        q: "Vì sao item trông như giấy / texture mặc định?",
        a: "Có thể thiếu resourcepack — dùng /resourcepack trong game để tải texture và item tùy chỉnh!",
      },
      {
        q: "Server có cracked không?",
        a: "Không cracked — cần tài khoản Minecraft Java hợp lệ.",
      },
    ],
  },
  cobblemon: {
    slug: "cobblemon",
    title: "Chơi Cobblemon | Lyra",
    heading: "Chơi Cobblemon",
    ip: "lyra.host",
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
        title: "Tải ứng dụng CurseForge",
        body: "Cài CurseForge để chạy modpack Lyra Cobblemon.",
        image: "/images/play/cobblemon/step1.png",
        cta: { label: "Trang CurseForge", href: "https://www.curseforge.com/download/app" },
      },
      {
        title: 'Cài Modpack "Lyra Cobblemon"',
        body: "Install Via App từ trang CurseForge Lyra Cobblemon, hoặc tìm Lyra Cobblemon trên CurseForge.",
        image: "/images/play/cobblemon/step2.png",
      },
      {
        title: 'Bấm "Play" trong CurseForge',
        body: "Sau khi tải xong, bấm Play để khởi động modpack.",
        image: "/images/play/cobblemon/step3.png",
      },
      {
        title: "Vào máy chủ",
        body: "Thêm lyra.host trong Multiplayer và join.",
        image: "/images/play/cobblemon/step4.png",
      },
    ],
    altTracks: [
      {
        name: "Modrinth",
        steps: [
          {
            title: "Tải ứng dụng Modrinth",
            body: "Cài Modrinth App làm launcher thay thế cho Lyra Cobblemon.",
            image: "/images/play/cobblemon/modrinth1.png",
            cta: { label: "Trang Modrinth", href: "https://modrinth.com/app" },
          },
          {
            title: 'Cài Modpack "Lyra Cobblemon" trên Modrinth',
            body: "Cài pack Lyra Cobblemon từ Modrinth.",
            image: "/images/play/cobblemon/modrinth2.png",
          },
          {
            title: 'Vào Modrinth App và bấm "Install"',
            body: "Hoàn tất cài đặt trong app Modrinth.",
            image: "/images/play/cobblemon/modrinth3.png",
          },
          {
            title: 'Bấm "Play" để bắt đầu cuộc phiêu lưu Lyra Cobblemon!',
            body: "Khởi động và join lyra.host.",
            image: "/images/play/cobblemon/modrinth4.png",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "CurseForge hay Modrinth?",
        a: "Cả hai đều được hỗ trợ cho Cobblemon — chọn tab phía trên.",
      },
      {
        q: "IP máy chủ là gì?",
        a: "lyra.host",
      },
    ],
  },
};

export function getPlayPage(slug: string): PlayPage | undefined {
  return PLAY_PAGES[slug];
}
