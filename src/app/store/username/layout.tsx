import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enter Minecraft Username | Lyra",
  description: "Continue to Lyra store with your Minecraft username.",
};

export default function StoreUsernameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
