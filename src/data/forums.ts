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

/** Structure from live dump mc-complex.com/forums/pixelmon + /forums/ */
export const FORUM_NEWS: ForumNews[] = [
  {
    title: "Cập nhật Pixelmon 9.1.13!",
    body:
      "Chúng tôi đã cập nhật lên Pixelmon 9.1.13! Sau khi cập nhật xong bạn cần tải lại Pixelmon 9.1.13 để vào server. Modpack Lyra đã được cập nhật và là cách dễ nhất để bắt đầu chơi — rất khuyến nghị...",
    author: "Gold_grilz7",
    date: "29 Th4, 2022",
    href: "/forums/#news",
  },
  {
    title: "Chào mừng đến Lyra Pixelmon",
    body:
      "Chào mừng tới website diễn đàn Lyra Pixelmon! Tại đây bạn có thể thảo luận Pixelmon và server Lyra Pixelmon! Cũng có thể nộp đơn Staff, kháng cáo ban và báo lỗi trên diễn đàn! Đừng ngại dùng trợ giúp và...",
    author: "Hazzaaa",
    date: "8 Th1, 2020",
    href: "/forums/#news",
  },
];

export const FORUM_CATEGORIES: ForumCategory[] = [
  {
    title: "Cộng đồng",
    boards: [
      {
        name: "Thông báo",
        desc: "Tin tức và thông báo chính thức từ team Lyra.",
        threads: 2,
        messages: 2,
        href: "/forums/boards/#announcements",
      },
      {
        name: "Thông báo im lặng",
        desc: "Cập nhật nhỏ, không ping toàn server.",
        threads: 3,
        messages: 3,
        href: "/forums/boards/#silent",
      },
      {
        name: "Nội quy",
        desc: "Quy tắc diễn đàn và server — đọc trước khi post.",
        threads: 2,
        messages: 2,
        href: "/forums/boards/#rules",
      },
      {
        name: "Thông tin & Hướng dẫn",
        desc: "Guide chơi, tips, FAQ từ staff và cộng đồng.",
        threads: 14,
        messages: 14,
        href: "/forums/boards/#guides",
      },
    ],
  },
  {
    title: "Ứng tuyển, kháng cáo & báo cáo",
    boards: [
      {
        name: "Ứng tuyển Staff",
        desc: "Nộp đơn gia nhập đội Staff.",
        threads: 0,
        messages: 0,
        href: "https://discord.gg/LyraPixel",
        kind: "link",
      },
      {
        name: "Ứng tuyển Gym Leader",
        desc: "Đăng ký vị trí Gym Leader.",
        threads: 0,
        messages: 0,
        href: "https://discord.gg/LyraPixel",
        kind: "link",
      },
      {
        name: "Kháng cáo ban",
        desc: "Gửi kháng cáo nếu bạn bị ban oan.",
        threads: 0,
        messages: 0,
        href: "https://discord.gg/LyraPixel",
        kind: "link",
      },
      {
        name: "Báo cáo người chơi",
        desc: "Báo cáo hành vi vi phạm của người chơi.",
        threads: 0,
        messages: 0,
        href: "https://discord.gg/LyraPixel",
        kind: "link",
      },
      {
        name: "Báo cáo Staff",
        desc: "Báo cáo vấn đề liên quan staff.",
        threads: 0,
        messages: 0,
        href: "https://discord.gg/LyraPixel",
        kind: "link",
      },
    ],
  },
];
