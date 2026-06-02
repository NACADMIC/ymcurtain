"use client";

import { useEffect, useState } from "react";

type Category = { id: string; name: string; slug: string; order: number };

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-black mb-6">카테고리 관리</h1>
      <div className="bg-white rounded-lg shadow border border-black/5 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-black/50">로딩 중...</div>
        ) : categories.length === 0 ? (
          <div className="p-8 text-center text-black/50">
            카테고리가 없습니다. DB 시드 또는 직접 등록 후 사용하세요.
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-black/5">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-black">순서</th>
                <th className="px-4 py-3 text-sm font-semibold text-black">이름</th>
                <th className="px-4 py-3 text-sm font-semibold text-black">슬러그</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => (
                <tr key={c.id} className="border-b border-black/5">
                  <td className="px-4 py-3 text-sm">{c.order}</td>
                  <td className="px-4 py-3 text-sm">{c.name}</td>
                  <td className="px-4 py-3 text-sm text-black/60">{c.slug}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
