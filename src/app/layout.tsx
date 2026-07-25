import type { Metadata } from "next";
import "./globals.css";
import "./complex-theme.css";

export const metadata: Metadata = {
  title: "Lyra — Survival Towny",
  description:
    "Lyra Survival Towny · Lobby · Shop · Java + Bedrock · non-P2W",
  themeColor: "#000000",
  icons: {
    icon: "/seo/favicon.svg",
  },
  openGraph: {
    title: "Lyra",
    description: "Lobby → Towny land → shop · Java + Bedrock",
    siteName: "Lyra",
  },
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
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, background: "#000" }}>{children}</body>
    </html>
  );
}
