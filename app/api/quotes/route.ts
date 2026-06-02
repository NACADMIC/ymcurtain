import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

// 견적 신청 생성 (고객용)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, location, message } = body;

    if (!name || !phone || !location) {
      return NextResponse.json(
        { error: "필수 항목을 입력해주세요." },
        { status: 400 }
      );
    }

    const quote = await prisma.quote.create({
      data: {
        name,
        phone,
        location,
        message: message || "",
      },
    });

    return NextResponse.json(quote, { status: 201 });
  } catch (error) {
    console.error("Quote creation error:", error);
    return NextResponse.json(
      { error: "견적 신청 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

// 견적 신청 목록 조회 (관리자용)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    const where = status ? { status } : {};

    const quotes = await prisma.quote.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(quotes);
  } catch (error) {
    console.error("Quote fetch error:", error);
    return NextResponse.json(
      { error: "견적 목록 조회 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
