export default function CSPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-black mb-6">고객센터</h1>
      <p className="text-xl font-bold mb-2">
        <a href="tel:02-588-2389" className="text-primary hover:underline">02-588-2389</a>
      </p>
      <p className="text-black/60 mb-4">오전 9시30분 ~ 오후 4시 30분</p>
      <p>
        <a href="/board/notice" className="text-primary hover:underline">공지사항</a>
        {" · "}
        <a href="/board/qna" className="text-primary hover:underline">상품 Q&A</a>
      </p>
    </div>
  );
}
