import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lyra — Survival Towny giữa thiên hà",
  description:
    "Lyra · Server Minecraft Survival Towny Việt Nam — không reset lén, không P2W. play.lyra.host",
  icons: { icon: "/images/lyra-logo-transparent.svg" },
  openGraph: {
    title: "Lyra",
    description: "Survival Towny · non-P2W · play.lyra.host",
    siteName: "Lyra",
  },
};

export const viewport: Viewport = {
  themeColor: "#06080f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
