"use client";

const demoInquiries = [
  { id: 1, name: "홍길동", phone: "010-1234-5678", message: "거실 커튼 견적 문의드립니다.", date: "2025-02-10" },
  { id: 2, name: "김철수", phone: "010-9876-5432", message: "블라인드 샘플 보러 방문 가능할까요?", date: "2025-02-11" },
];

export default function AdminInquiriesPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-semibold text-black mb-2">문의 목록</h1>
      <p className="text-black/60 text-sm mb-6">
        고객 문의를 확인합니다. (실제 배포 시 DB/API 연동 필요)
      </p>
      <div className="bg-white rounded-lg shadow border border-black/5 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold">이름</th>
              <th className="px-4 py-3 text-sm font-semibold">연락처</th>
              <th className="px-4 py-3 text-sm font-semibold">문의 내용</th>
              <th className="px-4 py-3 text-sm font-semibold">일자</th>
            </tr>
          </thead>
          <tbody>
            {demoInquiries.map((row) => (
              <tr key={row.id} className="border-t border-black/5">
                <td className="px-4 py-3 text-sm">{row.name}</td>
                <td className="px-4 py-3 text-sm">{row.phone}</td>
                <td className="px-4 py-3 text-sm">{row.message}</td>
                <td className="px-4 py-3 text-sm">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
