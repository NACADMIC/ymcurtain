"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <p className="text-primary font-semibold mb-2">문의가 접수되었습니다.</p>
        <p className="text-black/70 text-sm mb-6">
          빠른 시일 내에 연락드리겠습니다. 급하신 경우 02-588-2389로 전화 주세요.
        </p>
        <a href="tel:02-588-2389" className="text-primary font-semibold underline">
          02-588-2389 전화하기
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-black mb-2">견적 문의</h1>
      <p className="text-black/70 text-sm mb-8">
        전화 문의도 가능합니다. <a href="tel:02-588-2389" className="text-primary font-semibold">02-588-2389</a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
            이름 *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 border border-black/15 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="이름"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
            연락처 *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-3 border border-black/15 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="010-0000-0000"
          />
        </div>
        <div>
          <label htmlFor="visit" className="block text-sm font-medium text-black mb-1">
            방문 희망 (선택)
          </label>
          <input
            id="visit"
            name="visit"
            type="text"
            className="w-full px-4 py-3 border border-black/15 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="예: 주소 또는 방문 희망 요일"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
            문의 내용 (선택)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 border border-black/15 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
            placeholder="커튼/블라인드 종류, 창문 수 등 간단히 적어 주세요."
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
        >
          문의 보내기
        </button>
      </form>
    </div>
  );
}
