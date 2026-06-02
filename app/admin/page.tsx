import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-semibold text-black mb-6">대시보드</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4 border border-black/5">
          <p className="text-sm text-black/60">오늘 매출</p>
          <p className="text-xl font-semibold mt-1">0원</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border border-black/5">
          <p className="text-sm text-black/60">이번 달 매출</p>
          <p className="text-xl font-semibold mt-1">0원</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border border-black/5">
          <p className="text-sm text-black/60">신규 주문</p>
          <p className="text-xl font-semibold mt-1">0건</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border border-black/5">
          <p className="text-sm text-black/60">배송 대기</p>
          <p className="text-xl font-semibold mt-1">0건</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/admin/products"
          className="block p-6 bg-white rounded-lg shadow border border-black/5 hover:shadow-md hover:border-primary/30 transition-all"
        >
          <h3 className="font-semibold text-black">상품 관리</h3>
          <p className="text-sm text-black/60 mt-1">상품 등록·수정·삭제</p>
        </Link>
        <Link
          href="/admin/categories"
          className="block p-6 bg-white rounded-lg shadow border border-black/5 hover:shadow-md hover:border-primary/30 transition-all"
        >
          <h3 className="font-semibold text-black">카테고리 관리</h3>
          <p className="text-sm text-black/60 mt-1">카테고리 추가·수정</p>
        </Link>
        <Link
          href="/admin/orders"
          className="block p-6 bg-white rounded-lg shadow border border-black/5 hover:shadow-md hover:border-primary/30 transition-all"
        >
          <h3 className="font-semibold text-black">주문 관리</h3>
          <p className="text-sm text-black/60 mt-1">주문 목록·상태 변경</p>
        </Link>
        <Link
          href="/admin/board/notice"
          className="block p-6 bg-white rounded-lg shadow border border-black/5 hover:shadow-md hover:border-primary/30 transition-all"
        >
          <h3 className="font-semibold text-black">게시판 관리</h3>
          <p className="text-sm text-black/60 mt-1">공지·리뷰·Q&A</p>
        </Link>
      </div>
    </div>
  );
}
