"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/about", label: "소개" },
  { href: "/contact", label: "문의" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors tracking-tight"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:02-588-2389"
            className="text-primary font-semibold whitespace-nowrap hover:underline underline-offset-4 tracking-tight"
          >
            02-588-2389
          </a>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:02-588-2389"
            className="px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-full"
          >
            전화
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-full hover:bg-black/5 transition-colors flex flex-col gap-1"
            aria-label="메뉴 열기"
          >
            <span className="block w-5 h-0.5 bg-black" />
            <span className="block w-5 h-0.5 bg-black" />
            <span className="block w-5 h-0.5 bg-black" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-black/5 bg-white/98 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 text-black/80 hover:text-primary font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:02-588-2389" className="py-3.5 font-semibold text-primary">
              02-588-2389
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
