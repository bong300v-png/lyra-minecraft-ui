import type { Metadata } from "next";
import "../play-theme.css";
import "../play-core-extracted.css";

export const metadata: Metadata = {
  title: "Chơi | Lyra",
};

export default function PlayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
