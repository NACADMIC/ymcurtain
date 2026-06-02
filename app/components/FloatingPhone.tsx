export default function FloatingPhone() {
  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col gap-3">
      {/* 카카오톡 상담 */}
      <a
        href="http://pf.kakao.com/_jNxaxj"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 rounded-full bg-[#FEE500] flex items-center justify-center shadow-lg hover:scale-105 transition-all relative"
        aria-label="카카오톡 상담"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#3C1E1E" aria-hidden>
          <path d="M12 3C6.477 3 2 6.477 2 10.75c0 2.55 1.613 4.789 4.063 6.188-.062.574-.397 2.21-.458 2.558-.09.515.188.508.402.37.144-.094 2.349-1.567 3.256-2.172.575.078 1.168.118 1.737.118 5.523 0 10-3.477 10-7.75S17.523 3 12 3zm4.992 9.496c-.253 0-.458-.206-.458-.459v-2.25l-1.687 2.47c-.115.168-.306.268-.51.268h-.013c-.204 0-.395-.1-.51-.269l-1.688-2.469v2.25c0 .253-.204.459-.458.459-.253 0-.458-.206-.458-.459v-3.5c0-.253.205-.459.458-.459.159 0 .308.082.392.218l2.276 3.336 2.275-3.336c.084-.136.233-.218.392-.218.253 0 .458.206.458.459v3.5c0 .253-.205.459-.458.459zm-10.984 0c-.253 0-.458-.206-.458-.459v-3.5c0-.253.205-.459.458-.459.253 0 .459.206.459.459v3.5c0 .253-.206.459-.459.459zm2.75 0h-1.375c-.253 0-.458-.206-.458-.459v-3.5c0-.253.205-.459.458-.459.253 0 .458.206.458.459v3.041h.917c.253 0 .458.206.458.459 0 .253-.205.459-.458.459zm4.125-.459c0 .253-.205.459-.458.459h-2.75c-.253 0-.458-.206-.458-.459v-3.5c0-.253.205-.459.458-.459h2.75c.253 0 .458.206.458.459 0 .253-.205.458-.458.458h-2.292v.917h1.833c.253 0 .459.206.459.459 0 .253-.206.458-.459.458h-1.833v.917h2.292c.253 0 .458.206.458.459z"/>
        </svg>
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          카카오톡 상담
        </span>
      </a>

      {/* 전화 걸기 */}
      <a
        href="tel:02-588-2389"
        className="group w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all relative"
        aria-label="전화 걸기"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          02-588-2389
        </span>
      </a>
    </div>
  );
}
