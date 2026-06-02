export default function NoticePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-black mb-8">공지사항</h1>
      <ul className="border-t border-black/10">
        {[1, 2, 3].map((i) => (
          <li key={i} className="flex items-center py-4 border-b border-black/5 hover:bg-beige/20">
            <span className="text-primary font-medium w-16">공지</span>
            <a href="#" className="flex-1 text-black hover:text-primary">공지사항 제목 {i}</a>
            <span className="text-sm text-black/50">2025.02.12</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
