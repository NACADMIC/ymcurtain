"use client";

import { useState, useEffect } from "react";

interface SiteStats {
  id: string;
  totalProjects: number;
  satisfactionRate: number;
  yearsExperience: number;
  updatedAt: string;
}

export default function SettingsPage() {
  const [stats, setStats] = useState<SiteStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    totalProjects: 2500,
    satisfactionRate: 98,
    yearsExperience: 15,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/stats");
      const data = await res.json();
      setStats(data);
      setFormData({
        totalProjects: data.totalProjects,
        satisfactionRate: data.satisfactionRate,
        yearsExperience: data.yearsExperience,
      });
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/stats", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const updated = await res.json();
        setStats(updated);
        alert("통계가 업데이트되었습니다.");
      }
    } catch (error) {
      console.error("Failed to update stats:", error);
      alert("오류가 발생했습니다.");
    }
  };

  if (loading) {
    return <div className="p-8">로딩 중...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">사이트 설정</h1>

      <div className="max-w-2xl">
        {/* 통계 설정 */}
        <div className="bg-white rounded-lg border p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">통계 카운터 설정</h2>
          <p className="text-sm text-gray-600 mb-4">
            메인 페이지에 표시되는 통계 수치를 관리합니다.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                누적 시공 건수
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={formData.totalProjects}
                  onChange={(e) =>
                    setFormData({ ...formData, totalProjects: Number(e.target.value) })
                  }
                  min="0"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <span className="text-gray-600">건</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                현재 표시: {formData.totalProjects.toLocaleString()}+
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                고객 만족도
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={formData.satisfactionRate}
                  onChange={(e) =>
                    setFormData({ ...formData, satisfactionRate: Number(e.target.value) })
                  }
                  min="0"
                  max="100"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <span className="text-gray-600">%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                현재 표시: {formData.satisfactionRate}%
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                업계 경력
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={formData.yearsExperience}
                  onChange={(e) =>
                    setFormData({ ...formData, yearsExperience: Number(e.target.value) })
                  }
                  min="0"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <span className="text-gray-600">년</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                현재 표시: {formData.yearsExperience}년
              </p>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-semibold"
              >
                저장
              </button>
            </div>
          </form>

          {stats && (
            <div className="mt-4 pt-4 border-t text-xs text-gray-500">
              마지막 업데이트: {new Date(stats.updatedAt).toLocaleString("ko-KR")}
            </div>
          )}
        </div>

        {/* 미리보기 */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">미리보기</h2>
          <p className="text-sm text-gray-600 mb-4">
            메인 페이지에 다음과 같이 표시됩니다.
          </p>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {formData.totalProjects.toLocaleString()}+
                </div>
                <p className="text-sm text-gray-600">누적 시공 건수</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {formData.satisfactionRate}%
                </div>
                <p className="text-sm text-gray-600">고객 만족도</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {formData.yearsExperience}년
                </div>
                <p className="text-sm text-gray-600">업계 경력</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
