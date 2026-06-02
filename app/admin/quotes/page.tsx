"use client";

import { useState, useEffect } from "react";

interface Quote {
  id: string;
  name: string;
  phone: string;
  location: string;
  message: string | null;
  status: string;
  memo: string | null;
  createdAt: string;
  updatedAt: string;
}

const statusLabels: Record<string, string> = {
  pending: "대기중",
  contacted: "연락완료",
  completed: "시공완료",
  cancelled: "취소",
};

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  contacted: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-gray-100 text-gray-800",
};

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [memo, setMemo] = useState("");

  useEffect(() => {
    fetchQuotes();
  }, [statusFilter]);

  const fetchQuotes = async () => {
    try {
      const url = statusFilter === "all"
        ? "/api/quotes"
        : `/api/quotes?status=${statusFilter}`;
      const res = await fetch(url);
      const data = await res.json();
      setQuotes(data);
    } catch (error) {
      console.error("Failed to fetch quotes:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/quotes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
        fetchQuotes();
        if (selectedQuote?.id === id) {
          const updated = await res.json();
          setSelectedQuote(updated);
        }
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const updateMemo = async (id: string) => {
    try {
      const res = await fetch(`/api/quotes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ memo }),
      });

      if (res.ok) {
        fetchQuotes();
        const updated = await res.json();
        setSelectedQuote(updated);
        alert("메모가 저장되었습니다.");
      }
    } catch (error) {
      console.error("Failed to update memo:", error);
    }
  };

  const deleteQuote = async (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      const res = await fetch(`/api/quotes/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchQuotes();
        setSelectedQuote(null);
      }
    } catch (error) {
      console.error("Failed to delete quote:", error);
    }
  };

  const openDetail = (quote: Quote) => {
    setSelectedQuote(quote);
    setMemo(quote.memo || "");
  };

  if (loading) {
    return <div className="p-8">로딩 중...</div>;
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">견적 신청 관리</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setStatusFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              statusFilter === "all"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            전체 ({quotes.length})
          </button>
          {Object.keys(statusLabels).map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                statusFilter === status
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {statusLabels[status]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 목록 */}
        <div className="bg-white rounded-lg border">
          <div className="overflow-auto max-h-[calc(100vh-200px)]">
            {quotes.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                견적 신청이 없습니다.
              </div>
            ) : (
              <div className="divide-y">
                {quotes.map((quote) => (
                  <div
                    key={quote.id}
                    onClick={() => openDetail(quote)}
                    className={`p-4 cursor-pointer hover:bg-gray-50 transition ${
                      selectedQuote?.id === quote.id ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{quote.name}</h3>
                        <p className="text-sm text-gray-600">{quote.location}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          statusColors[quote.status]
                        }`}
                      >
                        {statusLabels[quote.status]}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{quote.phone}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(quote.createdAt).toLocaleString("ko-KR")}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 상세 정보 */}
        <div className="bg-white rounded-lg border p-6">
          {selectedQuote ? (
            <div>
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold">상세 정보</h2>
                <button
                  onClick={() => deleteQuote(selectedQuote.id)}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  삭제
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    이름
                  </label>
                  <p className="text-lg">{selectedQuote.name}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    연락처
                  </label>
                  <p className="text-lg">{selectedQuote.phone}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    지역
                  </label>
                  <p className="text-lg">{selectedQuote.location}</p>
                </div>

                {selectedQuote.message && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      요청사항
                    </label>
                    <p className="text-gray-700">{selectedQuote.message}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    신청일시
                  </label>
                  <p className="text-gray-700">
                    {new Date(selectedQuote.createdAt).toLocaleString("ko-KR")}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    상태 변경
                  </label>
                  <div className="flex gap-2">
                    {Object.keys(statusLabels).map((status) => (
                      <button
                        key={status}
                        onClick={() => updateStatus(selectedQuote.id, status)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          selectedQuote.status === status
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {statusLabels[status]}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    메모
                  </label>
                  <textarea
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="메모를 입력하세요..."
                  />
                  <button
                    onClick={() => updateMemo(selectedQuote.id)}
                    className="mt-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                  >
                    메모 저장
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              견적 신청을 선택하세요
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
