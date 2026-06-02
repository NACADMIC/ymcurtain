"use client";

import { useState } from "react";

const pages = [
  { id: "profile", name: "프로필", content: "유명 커튼&블라인드 소개 내용을 입력하세요." },
  { id: "awards", name: "수상경력", content: "수상경력 목록을 입력하세요." },
  { id: "activity", name: "활동이력", content: "활동이력 목록을 입력하세요." },
];

export default function AdminContentPage() {
  const [selected, setSelected] = useState(pages[0].id);
  const [contents, setContents] = useState<Record<string, string>>(
    Object.fromEntries(pages.map((p) => [p.id, p.content]))
  );

  const current = pages.find((p) => p.id === selected)!;

  const handleSave = () => {
    alert("저장되었습니다. (실제 배포 시 API 연동 필요)");
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-black mb-2">페이지 콘텐츠</h1>
      <p className="text-black/60 text-sm mb-6">
        소개 페이지(프로필, 수상경력, 활동이력)의 텍스트를 수정합니다.
      </p>
      <div className="flex gap-2 mb-4">
        {pages.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setSelected(p.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border ${
              selected === p.id
                ? "bg-primary text-white border-primary"
                : "bg-white border-black/15 hover:bg-gray-50"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        <label className="block">
          <span className="block font-semibold text-black mb-1">{current.name} 내용</span>
          <textarea
            rows={12}
            value={contents[selected]}
            onChange={(e) =>
              setContents((prev) => ({ ...prev, [selected]: e.target.value }))
            }
            className="w-full px-4 py-3 border border-black/15 rounded-lg resize-y"
          />
        </label>
        <button
          type="button"
          onClick={handleSave}
          className="px-5 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light"
        >
          저장
        </button>
      </div>
    </div>
  );
}
