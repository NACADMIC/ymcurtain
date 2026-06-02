import Link from "next/link";

export default function MypagePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-black mb-2">마이쇼핑</h1>
      <p className="text-black/60 mb-6">로그인 후 이용 가능합니다.</p>
      <div className="flex flex-col gap-2">
        <Link
          href="/mypage/orders"
          className="block py-3 px-4 border border-black/10 rounded-lg hover:bg-beige/50"
        >
          배송조회
        </Link>
        <Link
          href="/mypage/profile"
          className="block py-3 px-4 border border-black/10 rounded-lg hover:bg-beige/50"
        >
          내 정보 수정
        </Link>
        <Link
          href="/mypage/posts"
          className="block py-3 px-4 border border-black/10 rounded-lg hover:bg-beige/50"
        >
          내 게시글 보기
        </Link>
      </div>
    </div>
  );
}
