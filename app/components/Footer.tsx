import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#141414] text-white/80">
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <h4 className="text-white font-semibold mb-2">유명커튼블라인드</h4>
            <a href="tel:02-588-2389" className="text-lg font-semibold text-primary hover:text-primary-light">
              02-588-2389
            </a>
            <p className="text-sm mt-1 text-white/60">무료 방문 실측 · 견적</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/" className="hover:text-primary">홈</Link>
            <Link href="/portfolio" className="hover:text-primary">포트폴리오</Link>
            <Link href="/about" className="hover:text-primary">소개</Link>
            <Link href="/contact" className="hover:text-primary">문의</Link>
          </div>
        </div>
        <div className="pt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/terms" className="hover:text-primary">이용약관</Link>
          <Link href="/privacy" className="hover:text-primary">개인정보처리방침</Link>
        </div>
        <p className="mt-4 text-xs text-white/40">
          COPYRIGHT © 유명커튼블라인드. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
