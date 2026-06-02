/**
 * 커튼·블라인드 관련 사진만 사용 (MVP용)
 * - 히어로: 커튼/창문 인테리어
 * - 서비스: 사진 없음 → 아이콘 카드 (관련 없는 스톡 방지)
 * - 포트폴리오: 커튼·블라인드·창문 시공만
 */
const W = 800;
const Q = 80;

function u(path: string, w = W, q = Q) {
  return `https://images.unsplash.com/${path}?w=${w}&q=${q}&fit=crop`;
}

function p(id: number, w = W) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

// 히어로: 커튼 있는 인테리어 (Pexels = 회색 커튼 거실)
export const heroImage = p(276666, 1920);

// 서비스: 사진 사용 안 함 (아이콘 카드로 표시)
export const serviceImages: string[] = [];

// 포트폴리오: 커튼·블라인드만 (Pexels 3 + Unsplash 커튼/창문)
export const portfolioImages = [
  { src: p(276666), title: "거실 커튼" },
  { src: p(19042788), title: "창문 커튼" },
  { src: p(18587782), title: "롤러 블라인드" },
  { src: u("photo-1560448204-e02f11c3d0e2"), title: "암막 커튼" },
  { src: u("photo-1524484485832-8e60dc465c3f"), title: "호텔식 커튼" },
  { src: u("photo-1586023492125-27b2c045efd7"), title: "리빙룸 시공" },
  { src: u("photo-1595526114035-0d4ed159b758"), title: "이너커튼" },
  { src: u("photo-1555041469-586f2148af25"), title: "베드룸 커튼" },
  { src: u("photo-1505693416388-ac5ce068fe85"), title: "쉐어커튼" },
];
