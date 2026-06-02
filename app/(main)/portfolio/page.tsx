import Image from "next/image";
import Link from "next/link";
import { getCurtainPhotos } from "@/lib/pexels";

export default async function PortfolioPage() {
  const photos = await getCurtainPhotos(20);

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 pt-16 pb-12">
        <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">Portfolio</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">시공 사례</h1>
        <p className="text-slate-600 max-w-xl font-light">
          다양한 공간에 시공한 커튼·블라인드 사례입니다. 견적·문의는 전화 또는 문의하기를 이용해 주세요.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {photos.map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-end p-5">
                <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-slate-500 text-sm font-light">
          Photos provided by{" "}
          <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Pexels
          </a>
        </p>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-6 font-light">견적·시공 문의는 전화 또는 문의 페이지에서 받고 있습니다.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:02-588-2389"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-colors"
            >
              02-588-2389 전화
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/5 transition-colors"
            >
              견적 문의
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
