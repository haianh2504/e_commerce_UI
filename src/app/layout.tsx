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
    <html lang="vi-VN">
      <body className={`${inter.variable} ${beVietnamPro.variable}`}>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-button bg-primary px-4 py-3 font-semibold text-white shadow-lg transition-transform focus:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary motion-reduce:transition-none"
        >
          Chuyển đến nội dung chính
        </a>
        {children}
      </body>
    </html>
  );
}
