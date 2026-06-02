export default function HeroGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 딥 그라데이션 - 틸 → 다크 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d3d3d] via-[#1a6b6b] to-[#0f4a4a]" />
      {/* 부드러운 빛 번들 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[80%] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.06)_0%,transparent_50%)]" />
      {/* 미니멀 커튼 실루엣 - 세로 라인만 */}
      <div className="absolute inset-0 flex justify-center gap-[1px] opacity-[0.07]">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-px bg-white flex-1 max-w-[2px]" style={{ height: "100%" }} />
        ))}
      </div>
    </div>
  );
}
