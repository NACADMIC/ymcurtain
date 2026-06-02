# 유명커튼블라인드 쇼핑몰

**유명커튼블라인드** 브랜드의 커튼·블라인드 전문 쇼핑몰 + 관리자 프로젝트입니다.

## 기술 스택

- **프론트**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **백엔드**: Next.js API Routes
- **DB**: PostgreSQL + Prisma ORM
- **디자인**: 화이트·베이지 베이스 + 틸(primary) 포인트, Pretendard 폰트

## 실행 방법

실행 위치는 **프로젝트 루트** (`유명커튼` 폴더)입니다.

```bash
cd c:\Users\j\Desktop\유명커튼
npm install
npm run dev
```

- **쇼핑몰**: http://localhost:3000
- **관리자**: http://localhost:3000/admin

### DB 연동 (선택)

1. `.env` 생성 후 `DATABASE_URL` 설정 (PostgreSQL 연결 문자열)
2. `npm run db:push` 로 스키마 반영
3. `npm run db:seed` 로 카테고리 시드 (선택)
4. `npm run db:generate` 로 Prisma Client 생성

DB가 없어도 쇼핑몰 메인/카테고리/상품 목록은 **목업 데이터**(`lib/products.ts`)로 동작합니다. 관리자 상품 CRUD는 DB 연결 후 사용하세요.

## 구현 현황 (Phase 1 기준)

### 쇼핑몰 (고객용)

| 항목 | 상태 |
|------|------|
| 공통 레이아웃 | ✅ 유명커튼블라인드 로고, 검색, 카테고리, 전화 02-588-2389 |
| 메인 페이지 | ✅ 히어로, 카테고리, BEST / NEW ARRIVAL / 타임세일, 소개 배너 |
| 카테고리/상품 목록·상세 | ✅ |
| 검색, 로그인/회원가입, 게시판 라우트 | ✅ |

### 관리자

| 항목 | 상태 |
|------|------|
| 레이아웃·대시보드 | ✅ |
| 상품 CRUD | ✅ |

## 브랜드·연락처

- **브랜드**: 유명커튼블라인드
- **고객센터**: 02-588-2389
