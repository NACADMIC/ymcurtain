"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  imageUrl: string | null;
  date: string;
}

// 폴백 데이터 (API 실패 시)
const fallbackReviews: Review[] = [
  {
    id: "1",
    name: "김*은",
    location: "강남구",
    rating: 5,
    comment: "친절하게 상담해 주시고 시공도 깔끔하게 해주셨어요. 집 분위기가 확 달라졌습니다. 추천합니다!",
    imageUrl: "https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "2026-05-15",
  },
  {
    id: "2",
    name: "이*호",
    location: "송파구",
    rating: 5,
    comment: "무료 방문 실측 서비스가 너무 좋았어요. 여러 샘플도 보여주시고 꼼꼼하게 설명해주셔서 만족스럽습니다.",
    imageUrl: "https://images.pexels.com/photos/6585607/pexels-photo-6585607.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "2026-05-10",
  },
  {
    id: "3",
    name: "박*영",
    location: "서초구",
    rating: 5,
    comment: "가격도 합리적이고 시공 품질도 훌륭합니다. 15년 경력이 느껴지는 전문성이었어요. 감사합니다.",
    imageUrl: "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "2026-04-28",
  },
];

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>(fallbackReviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    // API에서 후기 데이터 가져오기
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/service-reviews?public=true");
        if (res.ok) {
          const data = await res.json();
          if (data.length > 0) {
            setReviews(data);
          }
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        // 실패 시 폴백 데이터 사용
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Reviews</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">고객님들의 생생한 후기</h2>
          <div className="flex items-center justify-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
            <span className="ml-2 text-slate-600 text-sm font-medium">5.0 평균 (2,500+ 시공)</span>
          </div>
        </div>

        <div className="relative">
          {/* 리뷰 카드 */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-200/50">
            <div className="md:flex">
              {/* 이미지 */}
              <div className="md:w-5/12 relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
                {reviews[currentIndex].imageUrl && (
                  <Image
                    src={reviews[currentIndex].imageUrl}
                    alt={`${reviews[currentIndex].name}님의 시공 사례`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                )}
              </div>

              {/* 리뷰 내용 */}
              <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 font-light">
                  "{reviews[currentIndex].comment}"
                </p>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {reviews[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{reviews[currentIndex].name}</p>
                    <p className="text-slate-500 text-xs">{reviews[currentIndex].location} · {reviews[currentIndex].date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 이전/다음 버튼 */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110"
            aria-label="이전 후기"
          >
            <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110"
            aria-label="다음 후기"
          >
            <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 인디케이터 */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`${index + 1}번째 후기 보기`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  );
}
