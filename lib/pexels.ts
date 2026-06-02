/**
 * Pexels API로 "curtain" / "blinds" 검색 → 커튼·블라인드 사진 가져오기
 * API 키: https://www.pexels.com/api 에서 발급 (무료)
 * .env.local 에 PEXELS_API_KEY=your_key 설정
 */

const API = "https://api.pexels.com/v1";

export type PexelsPhoto = { src: string; alt: string; large?: string };

async function searchPhotos(query: string, perPage: number): Promise<PexelsPhoto[]> {
  const key = process.env.PEXELS_API_KEY;
  if (!key) return [];

  const res = await fetch(
    `${API}/search?query=${encodeURIComponent(query)}&per_page=${perPage}`,
    { headers: { Authorization: key }, next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];

  const data = (await res.json()) as { photos?: Array<{ src?: { large?: string; large2x?: string; landscape?: string } }> };
  const photos = data.photos ?? [];
  const labels = ["거실 커튼", "창문 커튼", "롤러 블라인드", "암막 커튼", "호텔식 커튼", "이너커튼", "쉐어커튼", "베드룸 커튼", "커튼 시공", "블라인드 시공"];
  return photos
    .filter((p) => p.src?.large)
    .map((p, i) => ({
      src: p.src!.large!,
      large: p.src!.large2x ?? p.src!.landscape ?? p.src!.large,
      alt: labels[i % labels.length],
    }));
}

/** 히어로 배경용 - 커튼이 강조된 사진 1장 (창문+커튼 검색) */
export async function getHeroPhoto(): Promise<PexelsPhoto | null> {
  const key = process.env.PEXELS_API_KEY;
  if (!key) return { src: fallbackCurtainPhotos[0].src.replace("w=800", "w=1920"), alt: "커튼 시공" };

  const res = await fetch(
    `${API}/search?query=${encodeURIComponent("curtain window drapes")}&per_page=5&orientation=landscape`,
    { headers: { Authorization: key }, next: { revalidate: 3600 } }
  );
  if (!res.ok) return null;

  const data = (await res.json()) as { photos?: Array<{ src?: { landscape?: string; large2x?: string; large?: string } }> };
  const first = data.photos?.[0];
  if (!first?.src?.large) return null;

  const heroSrc = first.src.landscape ?? first.src.large2x ?? first.src.large;
  return { src: heroSrc, alt: "커튼 시공", large: heroSrc };
}

/** 커튼·블라인드 사진 (curtain + blinds 검색 결과 합침). API 키 없으면 fallback 반환 */
export async function getCurtainPhotos(limit = 15): Promise<PexelsPhoto[]> {
  const key = process.env.PEXELS_API_KEY;
  if (!key) return fallbackCurtainPhotos.slice(0, limit);

  const [curtain, blinds] = await Promise.all([
    searchPhotos("curtain", Math.min(limit, 15)),
    searchPhotos("window blinds interior", 5),
  ]);
  const combined = [...curtain];
  blinds.forEach((b) => {
    if (!combined.some((c) => c.src === b.src)) combined.push(b);
  });
  const result = combined.slice(0, limit);
  return result.length > 0 ? result : fallbackCurtainPhotos.slice(0, limit);
}

/** 전화 문의(전화기) / 무료 실측 / 꼼꼼한 시공(전동드릴 포함)용 사진 3장 */
export async function getServicePhotos(): Promise<PexelsPhoto[]> {
  const key = process.env.PEXELS_API_KEY;
  if (!key) return fallbackServicePhotos;

  const [measure, installResults] = await Promise.all([
    searchPhotos("tape measure", 3),
    Promise.all([
      searchPhotos("handyman cordless drill installation", 2),
      searchPhotos("worker power drill wall", 2),
      searchPhotos("curtain installation drill", 2),
    ]).then(([a, b, c]) => [...a, ...b, ...c]),
  ]);
  const install = installResults[0];
  // 전화 문의는 항상 전화기만 나오는 고정 이미지 사용 (사람/화난 아저씨 방지)
  const phone = fallbackServicePhotos[0];
  const result = [
    phone,
    measure[0] ?? fallbackServicePhotos[1],
    install ?? fallbackServicePhotos[2],
  ].map((p, i) => ({ ...p, alt: ["전화 문의", "무료 방문 실측", "꼼꼼한 시공"][i] }));
  return result;
}

/** 전화 문의 카드용 고정 이미지 (항상 이 URL 사용) */
export const PHONE_SERVICE_IMAGE =
  "https://images.pexels.com/photos/774448/pexels-photo-774448.jpeg?auto=compress&cs=tinysrgb&w=600";

const fallbackServicePhotos: PexelsPhoto[] = [
  { src: PHONE_SERVICE_IMAGE, alt: "전화 문의" },
  { src: "https://images.pexels.com/photos/3820103/pexels-photo-3820103.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "무료 방문 실측" },
  { src: "https://images.pexels.com/photos/14367421/pexels-photo-14367421.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "꼼꼼한 시공" },
];

/** API 키 없을 때 쓰는 폴백 (커튼 관련 Pexels 직접 URL) */
export const fallbackCurtainPhotos: PexelsPhoto[] = [
  { src: "https://images.pexels.com/photos/276666/pexels-photo-276666.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "거실 커튼" },
  { src: "https://images.pexels.com/photos/19042788/pexels-photo-19042788.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "창문 커튼" },
  { src: "https://images.pexels.com/photos/18587782/pexels-photo-18587782.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "롤러 블라인드" },
  { src: "https://images.pexels.com/photos/276666/pexels-photo-276666.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "커튼" },
  { src: "https://images.pexels.com/photos/19042788/pexels-photo-19042788.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "커튼" },
  { src: "https://images.pexels.com/photos/18587782/pexels-photo-18587782.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "블라인드" },
];
