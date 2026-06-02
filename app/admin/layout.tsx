import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-60 bg-[#1a1a1a] text-white flex-shrink-0">
        <Link href="/admin" className="block px-5 py-4 font-semibold border-b border-white/10">
          관리자
        </Link>
        <nav className="py-4">
          <Link
            href="/admin"
            className="block px-5 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white"
          >
            대시보드
          </Link>
          <Link
            href="/admin/products"
            className="block px-5 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white"
          >
            상품 관리
          </Link>
          <Link
            href="/admin/categories"
            className="block px-5 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white"
          >
            카테고리 관리
          </Link>
          <Link
            href="/admin/orders"
            className="block px-5 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white"
          >
            주문 관리
          </Link>
          <Link
            href="/admin/board/notice"
            className="block px-5 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white"
          >
            공지사항
          </Link>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-5 py-2.5 text-sm text-primary hover:bg-white/10 mt-4"
          >
            사이트 보기 →
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
