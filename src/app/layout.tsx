import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "KOMO — Nội thất cho cuộc sống mỗi ngày",
    template: "%s | KOMO",
  },
  description:
    "KOMO giới thiệu ghế, bàn học và sofa cho góc học tập và không gian sống hiện đại.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${beVietnamPro.variable}`}>
        {children}
      </body>
    </html>
  );
}
