"use client";

import { portfolioItems } from "@/lib/portfolio-items";

const cardVariants = {
  curtain: "from-stone-200/80 to-stone-100/90",
  blind: "from-slate-200/80 to-slate-100/90",
  sheer: "from-amber-50/90 to-orange-50/80",
} as const;

/** 커튼/블라인드 카드 - 에디토리얼 스타일 */
export function CurtainBlindCard({ title, variant }: { title: string; variant: "curtain" | "blind" | "sheer" }) {
  return (
    <div
      className={`relative w-full h-full min-h-[200px] rounded-2xl bg-gradient-to-br ${cardVariants[variant]} flex flex-col justify-end p-5 border border-white/60 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden`}
    >
      {/* 상단 장식 라인 (커튼/블라인드 느낌) */}
      <div className="absolute top-0 left-0 right-0 h-20 flex items-end justify-center gap-[3px] pb-3 opacity-70">
        {variant === "curtain" &&
          [0.7, 0.85, 1, 0.9, 0.75].map((w, i) => (
            <div key={i} className="w-2 bg-primary/40 rounded-t" style={{ height: `${24 + i * 8}px` }} />
          ))}
        {variant === "blind" &&
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-full max-w-[20px] h-1.5 bg-primary/30 rounded" />
          ))}
        {variant === "sheer" && (
          <div className="w-3/4 h-8 bg-primary/20 rounded-full" />
        )}
      </div>

      <div className="relative mt-auto">
        <span className="text-sm font-semibold text-stone-700 tracking-tight">{title}</span>
      </div>
    </div>
  );
}

export function PortfolioGraphicGrid() {
  return (
    <>
      {portfolioItems.map((item, i) => (
        <CurtainBlindCard key={i} title={item.title} variant={item.variant} />
      ))}
    </>
  );
}

export { portfolioItems };
