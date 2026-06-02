import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

// 시공 후기 목록 조회
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const isPublic = searchParams.get("public") === "true";

    const where = isPublic ? { isVisible: true } : {};

    const reviews = await prisma.serviceReview.findMany({
      where,
      orderBy: [{ order: "asc" }, { date: "desc" }],
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Review fetch error:", error);
    return NextResponse.json(
      { error: "후기 목록 조회 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

// 시공 후기 생성 (관리자용)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, location, rating, comment, imageUrl, date, order } = body;

    if (!name || !location || !comment) {
      return NextResponse.json(
        { error: "필수 항목을 입력해주세요." },
        { status: 400 }
      );
    }

    const review = await prisma.serviceReview.create({
      data: {
        name,
        location,
        rating: rating || 5,
        comment,
        imageUrl: imageUrl || null,
        date: date ? new Date(date) : new Date(),
        order: order || 0,
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error("Review creation error:", error);
    return NextResponse.json(
      { error: "후기 등록 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
