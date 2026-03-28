import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DinarKu - Emaskan Impianmu | Track & Grow Your Dinar Gold",
  description:
    "DinarKu is your all-in-one Dinar gold investment tracker. Monitor portfolio value, calculate Zakat automatically, track growth analytics, and save towards your dreams with Dompet Impian.",
  keywords: [
    "dinar",
    "gold",
    "investment",
    "zakat",
    "tracker",
    "portfolio",
    "emas",
    "dinar emas",
  ],
  openGraph: {
    title: "DinarKu - Emaskan Impianmu",
    description:
      "Track your Dinar gold investment, calculate Zakat, and save towards your dreams.",
    type: "website",
    locale: "id_ID",
  },
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
