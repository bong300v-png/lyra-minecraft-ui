import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nhập tên Minecraft | Lyra",
  description: "Nhập tên Minecraft để vào cửa hàng Lyra.",
};

export default function StoreUsernameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
