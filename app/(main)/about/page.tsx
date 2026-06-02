import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-black mb-6">소개</h1>
      <p className="text-black/80 leading-relaxed mb-6">
        유명커튼블라인드는 커튼·블라인드 전문 시공 업체입니다. 쇼핑몰이 아닌 전화·방문 견적 방식으로,
        고객님 공간에 맞춰 실측 후 샘플을 보여드리고 견적을 안내해 드립니다.
      </p>
      <ul className="space-y-2 text-black/70 mb-8">
        <li>· 무료 방문 실측 및 견적</li>
        <li>· 다양한 국산·수입 원단 샘플</li>
        <li>· 꼼꼼한 시공 및 A/S</li>
      </ul>
      <p className="text-black/70 mb-8">
        문의나 견적이 필요하시면 전화 주시거나 문의하기를 이용해 주세요.
      </p>
      <div className="flex gap-4">
        <a href="tel:02-588-2389" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light">
          02-588-2389 전화
        </a>
        <Link href="/contact" className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5">
          견적 문의
        </Link>
      </div>
    </div>
  );
}
