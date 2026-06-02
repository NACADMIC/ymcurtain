export type Product = {
  id: string;
  name: string;
  price: number;
  reviewCount: number;
  imageUrl?: string;
  badge?: "BEST" | "1+1" | "NEW" | "SALE";
};

export const categories = [
  { id: "best", name: "BEST" },
  { id: "blackout", name: "암막커튼" },
  { id: "set", name: "암막+속커튼 세트" },
  { id: "shape", name: "형상기억커튼" },
  { id: "inner", name: "이너커튼" },
  { id: "blind", name: "블라인드" },
  { id: "fast", name: "빠른배송" },
  { id: "rod", name: "커튼봉/부자재" },
];

export const bestProducts: Product[] = [
  { id: "1", name: "다크 형상기억 양면 100% 암막커튼", price: 29900, reviewCount: 936, badge: "BEST" },
  { id: "2", name: "다크룸 100% 차단 형상기억 암막커튼", price: 29900, reviewCount: 570, badge: "BEST" },
  { id: "3", name: "비침없는 형상기억 도톰 발수 쉬폰커튼", price: 18900, reviewCount: 322, badge: "BEST" },
  { id: "4", name: "쉐도우 100% 암막커튼 2장세트", price: 29900, reviewCount: 775, badge: "BEST" },
  { id: "5", name: "호텔식 린넨 항균 암막커튼", price: 20300, reviewCount: 1428, badge: "BEST" },
  { id: "6", name: "호텔식 나비주름 암막커튼", price: 27900, reviewCount: 397, badge: "BEST" },
  { id: "7", name: "호텔식 100% 내추럴 형상기억 암막커튼", price: 29900, reviewCount: 10, badge: "NEW" },
  { id: "8", name: "호텔식 나비주름 형상기억 100% 암막커튼", price: 29900, reviewCount: 25, badge: "NEW" },
];

export const timeSaleProducts: Product[] = [
  { id: "t1", name: "쉐도우 100% 암막커튼 1+1 화이트", price: 39900, reviewCount: 69, badge: "1+1" },
  { id: "t2", name: "쉐도우 100% 암막커튼 1+1 쿨그레이", price: 39900, reviewCount: 182, badge: "1+1" },
  { id: "t3", name: "쉐도우 100% 암막커튼 1+1 소프트베이지", price: 39900, reviewCount: 475, badge: "1+1" },
  { id: "t4", name: "쉐도우 100% 암막커튼 1+1 다크그레이", price: 39900, reviewCount: 150, badge: "1+1" },
  { id: "t5", name: "[1+1] 린넨ST 암막커튼_아이보리", price: 37900, reviewCount: 29, badge: "1+1" },
  { id: "t6", name: "베스트 린넨 암막커튼 2장세트", price: 59800, reviewCount: 205, badge: "SALE" },
];

export const newProducts: Product[] = [
  { id: "n1", name: "호텔식 나비주름 퍼펙트 형상기억 암막커튼", price: 29900, reviewCount: 0, badge: "NEW" },
  { id: "n2", name: "스노우라인 화이트 형상기억 이너커튼", price: 22000, reviewCount: 1, badge: "NEW" },
  { id: "n3", name: "럭스 형상기억 암막커튼", price: 28900, reviewCount: 1, badge: "NEW" },
  { id: "n4", name: "아델 내츄럴 린넨커튼", price: 27900, reviewCount: 43 },
  { id: "n5", name: "레인 형상기억 이너커튼", price: 19900, reviewCount: 2 },
  { id: "n6", name: "스텔라 형상기억 이너커튼", price: 19800, reviewCount: 13 },
];
