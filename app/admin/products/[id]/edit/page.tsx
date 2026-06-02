"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

type Category = { id: string; name: string };

export default function AdminProductEditPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [stock, setStock] = useState("0");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch("/api/categories").then((r) => r.json()),
      fetch(`/api/products/${id}`).then((r) => r.json()),
    ]).then(([cats, product]) => {
      setCategories(Array.isArray(cats) ? cats : []);
      if (product?.id) {
        setName(product.name);
        setSlug(product.slug);
        setCategoryId(product.categoryId);
        setPrice(String(product.price));
        setSalePrice(product.salePrice != null ? String(product.salePrice) : "");
        setStock(String(product.stock));
        setDescription(product.description ?? "");
        setStatus(product.status ?? "active");
      }
      setLoading(false);
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          slug,
          categoryId,
          price: Number(price) || 0,
          salePrice: salePrice ? Number(salePrice) : null,
          stock: Number(stock) || 0,
          description: description || null,
          status,
        }),
      });
      if (res.ok) router.push("/admin/products");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
    if (res.ok) router.push("/admin/products");
  };

  if (loading) return <div className="p-8">로딩 중...</div>;

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/products" className="text-black/60 hover:text-black">← 목록</Link>
        <h1 className="text-2xl font-semibold text-black">상품 수정</h1>
      </div>
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-4 bg-white p-6 rounded-lg shadow border border-black/5">
        <div>
          <label className="block text-sm font-medium text-black mb-1">상품명 *</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border border-black/15 rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">슬러그</label>
          <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} className="w-full px-4 py-2 border border-black/15 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">카테고리 *</label>
          <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="w-full px-4 py-2 border border-black/15 rounded">
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">가격 *</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full px-4 py-2 border border-black/15 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">할인가</label>
            <input type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} className="w-full px-4 py-2 border border-black/15 rounded" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">재고</label>
          <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full px-4 py-2 border border-black/15 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">상태</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full px-4 py-2 border border-black/15 rounded">
            <option value="active">판매중</option>
            <option value="soldout">품절</option>
            <option value="hidden">숨김</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">상세 설명</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full px-4 py-2 border border-black/15 rounded" />
        </div>
        <div className="flex gap-2 pt-4">
          <button type="submit" disabled={submitting} className="px-6 py-2 bg-black text-white rounded hover:bg-black/90 disabled:opacity-50">
            {submitting ? "저장 중..." : "저장"}
          </button>
          <Link href="/admin/products" className="px-6 py-2 border border-black/15 rounded hover:bg-gray-50">취소</Link>
          <button type="button" onClick={handleDelete} className="px-6 py-2 border border-red-200 text-red-600 rounded hover:bg-red-50 ml-auto">
            삭제
          </button>
        </div>
      </form>
    </div>
  );
}
