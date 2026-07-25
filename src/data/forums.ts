export type ForumNews = {
  title: string;
  body: string;
  author: string;
  date: string;
  href: string;
};

/** Static forum home content — structure from mc-complex forums/pixelmon dump */
export const FORUM_NEWS: ForumNews[] = [
  {
    title: "Cập nhật Pixelmon 9.1.13!",
    body:
      "Chúng tôi đã cập nhật lên Pixelmon 9.1.13! Sau khi cập nhật xong bạn cần tải lại Pixelmon 9.1.13 để vào server. Modpack Lyra đã được cập nhật — cách dễ nhất để chơi.",
    author: "Lyra Staff",
    date: "29 Th4, 2022",
    href: "/forums#news",
  },
  {
    title: "Chào mừng đến Lyra Pixelmon",
    body:
      "Chào mừng tới diễn đàn Lyra Pixelmon! Tại đây bạn có thể thảo luận Pixelmon, nộp đơn Staff, kháng cáo ban và báo lỗi. Đừng ngại dùng Discord để được hỗ trợ nhanh.",
    author: "Lyra Staff",
    date: "8 Th1, 2020",
    href: "/forums#news",
  },
];
