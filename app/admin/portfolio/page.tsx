"use client";

import { useState } from "react";

export default function AdminPortfolioPage() {
  const [items, setItems] = useState<{ id: number; title: string; imageUrl: string }[]>([
    { id: 1, title: "시공 사례 1", imageUrl: "" },
    { id: 2, title: "시공 사례 2", imageUrl: "" },
    { id: 3, title: "시공 사례 3", imageUrl: "" },
  ]);

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      { id: Date.now(), title: `시공 사례 ${prev.length + 1}`, imageUrl: "" },
    ]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-semibold text-black">포트폴리오 관리</h1>
        <button
          type="button"
          onClick={addItem}
          className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light"
        >
          추가
        </button>
      </div>
      <p className="text-black/60 text-sm mb-6">
        포트폴리오 이미지와 제목을 관리합니다. (실제 배포 시 이미지 업로드 API 연동 필요)
      </p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow border border-black/5"
          >
            <div className="w-20 h-14 bg-gray-100 rounded flex items-center justify-center text-sm text-black/50 shrink-0">
              이미지
            </div>
            <input
              type="text"
              value={item.title}
              onChange={(e) =>
                setItems((prev) =>
                  prev.map((i) => (i.id === item.id ? { ...i, title: e.target.value } : i))
                )
              }
              className="flex-1 px-3 py-2 border border-black/15 rounded-lg"
            />
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700"
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
