"use client";

import { useState, useEffect } from "react";

interface ServiceReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  imageUrl: string | null;
  date: string;
  isVisible: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export default function ServiceReviewsPage() {
  const [reviews, setReviews] = useState<ServiceReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingReview, setEditingReview] = useState<ServiceReview | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: 5,
    comment: "",
    imageUrl: "",
    date: new Date().toISOString().split("T")[0],
    order: 0,
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/service-reviews");
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingReview
        ? `/api/service-reviews/${editingReview.id}`
        : "/api/service-reviews";
      const method = editingReview ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        fetchReviews();
        resetForm();
        alert(editingReview ? "후기가 수정되었습니다." : "후기가 등록되었습니다.");
      }
    } catch (error) {
      console.error("Failed to save review:", error);
      alert("오류가 발생했습니다.");
    }
  };

  const handleEdit = (review: ServiceReview) => {
    setEditingReview(review);
    setFormData({
      name: review.name,
      location: review.location,
      rating: review.rating,
      comment: review.comment,
      imageUrl: review.imageUrl || "",
      date: review.date.split("T")[0],
      order: review.order,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      const res = await fetch(`/api/service-reviews/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchReviews();
        alert("후기가 삭제되었습니다.");
      }
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  const toggleVisibility = async (id: string, isVisible: boolean) => {
    try {
      const res = await fetch(`/api/service-reviews/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isVisible: !isVisible }),
      });

      if (res.ok) {
        fetchReviews();
      }
    } catch (error) {
      console.error("Failed to toggle visibility:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      location: "",
      rating: 5,
      comment: "",
      imageUrl: "",
      date: new Date().toISOString().split("T")[0],
      order: 0,
    });
    setEditingReview(null);
    setShowForm(false);
  };

  if (loading) {
    return <div className="p-8">로딩 중...</div>;
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">시공 후기 관리</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          {showForm ? "취소" : "후기 추가"}
        </button>
      </div>

      {/* 등록/수정 폼 */}
      {showForm && (
        <div className="bg-white rounded-lg border p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editingReview ? "후기 수정" : "후기 추가"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="김*은"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  지역 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="강남구"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  별점 <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {[5, 4, 3, 2, 1].map((n) => (
                    <option key={n} value={n}>
                      {n}점
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  날짜 <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">이미지 URL</label>
                <input
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  정렬 순서
                </label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                후기 내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                required
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="후기 내용을 입력하세요..."
              />
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                {editingReview ? "수정" : "등록"}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                취소
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 후기 목록 */}
      <div className="bg-white rounded-lg border">
        {reviews.length === 0 ? (
          <div className="p-8 text-center text-gray-500">등록된 후기가 없습니다.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">순서</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">이름</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">지역</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">별점</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">날짜</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">공개</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {reviews.map((review) => (
                  <tr key={review.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{review.order}</td>
                    <td className="px-4 py-3">{review.name}</td>
                    <td className="px-4 py-3">{review.location}</td>
                    <td className="px-4 py-3">
                      <span className="text-yellow-500">{"⭐".repeat(review.rating)}</span>
                    </td>
                    <td className="px-4 py-3">
                      {new Date(review.date).toLocaleDateString("ko-KR")}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => toggleVisibility(review.id, review.isVisible)}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          review.isVisible
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {review.isVisible ? "공개" : "비공개"}
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(review)}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          수정
                        </button>
                        <button
                          onClick={() => handleDelete(review.id)}
                          className="text-red-600 hover:text-red-700 text-sm font-medium"
                        >
                          삭제
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
