"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (id === "admin" && pw === "admin123") {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("admin", "1");
      }
      router.push("/admin");
      return;
    }
    setError("아이디 또는 비밀번호가 올바르지 않습니다.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-[360px] p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-xl font-semibold text-black text-center mb-6">관리자 로그인</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="block text-sm font-semibold text-black mb-1">아이디</span>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              autoComplete="username"
              className="w-full px-3 py-2.5 border border-black/15 rounded-lg"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-semibold text-black mb-1">비밀번호</span>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full px-3 py-2.5 border border-black/15 rounded-lg"
            />
          </label>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light"
          >
            로그인
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-black/50">데모: admin / admin123</p>
      </div>
    </div>
  );
}
