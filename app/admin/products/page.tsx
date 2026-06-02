"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice: number | null;
  stock: number;
  status: string;
  category: { name: string };
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-black">상품 관리</h1>
        <Link
          href="/admin/products/new"
          className="px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-black/90"
        >
          상품 등록
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow border border-black/5 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-black/50">로딩 중...</div>
        ) : products.length === 0 ? (
          <div className="p-8 text-center text-black/50">
            등록된 상품이 없습니다. DB 연결 후 상품을 등록하세요.
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-black/5">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-black">상품명</th>
                <th className="px-4 py-3 text-sm font-semibold text-black">카테고리</th>
                <th className="px-4 py-3 text-sm font-semibold text-black">가격</th>
                <th className="px-4 py-3 text-sm font-semibold text-black">재고</th>
                <th className="px-4 py-3 text-sm font-semibold text-black">상태</th>
                <th className="px-4 py-3 text-sm font-semibold text-black"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b border-black/5 hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">{p.name}</td>
                  <td className="px-4 py-3 text-sm text-black/70">{p.category?.name ?? "-"}</td>
                  <td className="px-4 py-3 text-sm">{p.price.toLocaleString()}원</td>
                  <td className="px-4 py-3 text-sm">{p.stock}</td>
                  <td className="px-4 py-3 text-sm">{p.status}</td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/products/${p.id}/edit`}
                      className="text-sm text-primary hover:underline"
                    >
                      수정
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
