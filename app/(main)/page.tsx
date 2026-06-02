import Link from "next/link";
import Image from "next/image";
import { getCurtainPhotos, getServicePhotos, getHeroPhoto, PHONE_SERVICE_IMAGE } from "@/lib/pexels";
import StatsCounter from "../components/StatsCounter";
import ReviewSection from "../components/ReviewSection";
import QuoteButton from "../components/QuoteButton";

const serviceSteps = [
  { step: "01", title: "전화 문의", desc: "원하시는 시간에 전화 주시면 친절히 안내해 드립니다." },
  { step: "02", title: "무료 방문 실측", desc: "전문 실장님이 방문해 실측 후 견적과 샘플을 추천해 드립니다." },
  { step: "03", title: "꼼꼼한 시공", desc: "정확한 제작과 시공으로 만족스러운 결과를 드립니다." },
];

export default async function HomePage() {
  const [heroPhoto, curtainPhotos, servicePhotos] = await Promise.all([
    getHeroPhoto(),
    getCurtainPhotos(15),
    getServicePhotos(),
  ]);
  const portfolioPhotos = curtainPhotos.slice(0, 6);

  return (
    <>
      {/* 히어로 - ymcurtain.com 배경 */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/7B5C1AM65TZv2WNvYLK5IYs0hGlIQDTvsstE11NVceUa7dHYQOJ8npYJOsNrR1Tg17DdxZoNQ-UaGwmY_n71Sn1fwVaAfoDBtseae75UiOp6VNKM8xnJKA=w1920-h2560-n"
            alt="유명커튼블라인드 메인"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/15" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <p className="text-white/90 text-xs font-medium tracking-[0.35em] uppercase mb-4">Curtain & Blind</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-semibold">
            유명커튼블라인드
          </h1>
          <p className="mt-6 text-white/90 text-base md:text-lg leading-relaxed font-light">
            전화 한 통으로 편하게 문의하세요.
            <br />
            <span className="text-white font-medium">무료 방문 실측 · 견적 · 샘플</span> 안내해 드립니다.
          </p>
          <div className="mt-10 flex justify-center">
            <QuoteButton variant="white">견적 문의하기</QuoteButton>
          </div>
        </div>
      </section>

      {/* 통계 카운터 */}
      <StatsCounter />

      {/* 서비스 - 사진 카드 */}
      <section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Service</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-14">
            전화 문의부터 시공까지, 한 번에
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {serviceSteps.map((item, i) => {
              const serviceImages = [
                "//storage.googleapis.com/i.addblock.net/sample/contents_138_1.png",
                "//storage.googleapis.com/i.addblock.net/sample/contents_138_4.png",
                "//storage.googleapis.com/i.addblock.net/sample/contents_138_3.png"
              ];
              return (
              <div key={item.step} className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow border border-black/5">
                <div className="aspect-[4/3] relative bg-slate-50 flex items-center justify-center">
                  <Image
                    src={`https:${serviceImages[i]}`}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-contain p-8"
                    unoptimized
                  />
                  <span className="absolute top-4 left-4 text-primary text-2xl font-bold tracking-tighter">
                    {item.step}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-slate-900 mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )}))}
          </div>
        </div>
      </section>

      {/* 고객 후기 */}
      <ReviewSection />

      {/* 시공 사례 - Pexels curtain 검색 결과 */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">Portfolio</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">시공 사례</h2>
            </div>
            <Link href="/portfolio" className="text-primary font-semibold hover:underline underline-offset-4 text-[15px]">
              전체 보기 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-5">
            {portfolioPhotos.map((item, i) => (
              <Link
                key={i}
                href="/portfolio"
                className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <div className={`relative ${i === 0 ? "aspect-[4/3] md:aspect-auto md:min-h-[300px]" : "aspect-[4/3]"}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-4 left-4 right-4 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">
                    {item.alt}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">언제든 전화 주세요</h2>
          <p className="text-white/90 text-base md:text-lg mb-10 max-w-xl mx-auto font-light">
            커튼·블라인드는 공간과 취향에 따라 다릅니다. 직접 방문해 실측과 샘플로 안내해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:02-588-2389"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/95 transition-all shadow-lg text-lg"
            >
              <PhoneIcon />
              02-588-2389
            </a>
            <QuoteButton variant="primary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              간편 견적 신청
            </QuoteButton>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
