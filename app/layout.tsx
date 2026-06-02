import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "유명커튼블라인드 - 커튼·블라인드 전문",
  description: "꼼꼼한 시공, 다양한 샘플, 무료 방문견적. 유명커튼블라인드 공식 쇼핑몰",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased bg-white text-[#1a1a1a]">{children}</body>
    </html>
  );
}
