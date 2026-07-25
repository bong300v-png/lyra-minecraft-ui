import type { Metadata } from "next";
import "./globals.css";
import "./complex-theme.css";

export const metadata: Metadata = {
  title: "Lyra — Browse",
  description:
    "Lyra — Browse Minecraft Servers | Vanilla, Pixelmon & Cobblemon",
  themeColor: "#000000",
  icons: {
    icon: "/seo/favicon.svg",
  },
  openGraph: {
    title: "Lyra",
    description: "Join Lyra Minecraft network",
    siteName: "Lyra",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Stack+Sans+Text:wght@200..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, background: "#000" }}>{children}</body>
    </html>
  );
}
