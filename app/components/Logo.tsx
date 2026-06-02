"use client";

import Link from "next/link";

const primary = "#0f766e";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
      {/* 커튼 실루엣 마크 (세로 주름 3개 = 커튼) */}
      <svg width="36" height="32" viewBox="0 0 36 32" fill="none" className="shrink-0">
        <rect x="2" y="2" width="8" height="28" rx="2" fill={primary} fillOpacity="0.9" />
        <rect x="14" y="2" width="8" height="28" rx="2" fill={primary} />
        <rect x="26" y="2" width="8" height="28" rx="2" fill={primary} fillOpacity="0.9" />
        <line x1="0" y1="6" x2="36" y2="6" stroke={primary} strokeOpacity="0.4" strokeWidth="1" />
      </svg>
      <span className="text-[1.05rem] font-bold text-primary tracking-tight">
        유명커튼블라인드
      </span>
    </Link>
  );
}
