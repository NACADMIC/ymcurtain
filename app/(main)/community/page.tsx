import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-black mb-6">커뮤니티</h1>
      <div className="flex flex-col gap-2">
        <Link href="/board/notice" className="block py-3 px-4 border border-black/10 rounded-lg hover:bg-beige/50">
          공지사항
        </Link>
        <Link href="/board/review" className="block py-3 px-4 border border-black/10 rounded-lg hover:bg-beige/50">
          상품 사용후기
        </Link>
        <Link href="/board/qna" className="block py-3 px-4 border border-black/10 rounded-lg hover:bg-beige/50">
          상품 Q&A
        </Link>
        <Link href="/board/notice" className="block py-3 px-4 border border-black/10 rounded-lg hover:bg-beige/50">
          이벤트
        </Link>
      </div>
    </div>
  );
}
