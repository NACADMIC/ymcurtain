"use client";

const primary = "#1a6b6b";
const primaryLight = "#2a8a8a";

/** 01 전화 문의 - 일반 전화기 (본체 + 수화기) */
export function GraphicPhone() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full max-h-[140px]" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="60" cy="60" r="48" fill={`${primary}0a`} />
      {/* 전화기 본체 */}
      <rect x="38" y="68" width="44" height="24" rx="6" fill="white" stroke={primary} />
      <rect x="44" y="74" width="32" height="12" rx="2" fill={`${primary}08`} stroke={primary} strokeWidth="1" />
      {/* 수화기: 왼쪽 이어폰 + 오른쪽 마이크 + 손잡이 */}
      <circle cx="50" cy="54" r="10" fill="white" stroke={primary} />
      <circle cx="70" cy="54" r="10" fill="white" stroke={primary} />
      <path d="M50 64 Q60 72 70 64" fill="white" stroke={primary} />
      {/* 수화기 받침대 느낌 */}
      <line x1="48" y1="68" x2="52" y2="68" stroke={primary} />
      <line x1="68" y1="68" x2="72" y2="68" stroke={primary} />
    </svg>
  );
}

/** 02 무료 방문 실측 - 줄자 (케이스 + 뻗어 나온 줄) */
export function GraphicTapeMeasure() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full max-h-[140px]" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="60" cy="60" r="48" fill={`${primary}0a`} />
      {/* 줄자 케이스 */}
      <rect x="28" y="46" width="48" height="28" rx="4" fill="#f8fafc" stroke={primary} />
      <rect x="32" y="50" width="40" height="20" rx="2" fill="white" stroke={primaryLight} strokeOpacity="0.6" />
      {/* 눈금 (케이스 위) */}
      <line x1="36" y1="52" x2="36" y2="68" stroke={primary} strokeOpacity="0.8" />
      <line x1="44" y1="52" x2="44" y2="68" stroke={primary} />
      <line x1="52" y1="52" x2="52" y2="68" stroke={primary} />
      <line x1="60" y1="52" x2="60" y2="68" stroke={primary} />
      <line x1="68" y1="52" x2="68" y2="68" stroke={primary} />
      {/* 뻗어 나온 줄자 */}
      <rect x="76" y="58" width="28" height="4" rx="1" fill="#e2e8f0" stroke={primary} />
      <line x1="78" y1="58" x2="78" y2="62" stroke={primaryLight} strokeOpacity="0.7" />
      <line x1="86" y1="58" x2="86" y2="62" stroke={primary} />
      <line x1="94" y1="58" x2="94" y2="62" stroke={primary} />
      <line x1="102" y1="58" x2="102" y2="62" stroke={primary} />
      {/* 손잡이 */}
      <rect x="24" y="50" width="8" height="20" rx="2" fill={primary} />
    </svg>
  );
}

/** 03 꼼꼼한 시공 - 수리/설치 (드라이버 + 나사) */
export function GraphicInstall() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full max-h-[140px]" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="60" cy="60" r="48" fill={`${primary}0a`} />
      {/* 나사(볼트) 머리 - 육각 또는 십자 */}
      <circle cx="60" cy="52" r="12" fill="#f1f5f9" stroke={primary} />
      <line x1="60" y1="44" x2="60" y2="60" stroke={primary} strokeWidth="2" />
      <line x1="52" y1="52" x2="68" y2="52" stroke={primary} strokeWidth="2" />
      <line x1="55" y1="47" x2="65" y2="57" stroke={primary} />
      <line x1="65" y1="47" x2="55" y2="57" stroke={primary} />
      {/* 드라이버 손잡이 */}
      <rect x="52" y="28" width="16" height="14" rx="3" fill={primary} />
      <rect x="54" y="30" width="12" height="10" rx="2" fill={primaryLight} fillOpacity="0.5" />
      {/* 드라이버 축 + 날 */}
      <rect x="58" y="42" width="4" height="14" fill="#64748b" stroke={primary} />
      <path d="M56 56 L64 56 L62 60 L58 60 Z" fill="#475569" stroke={primary} />
    </svg>
  );
}
