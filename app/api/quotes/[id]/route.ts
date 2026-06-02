import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

// 견적 신청 상태/메모 업데이트 (관리자용)
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { status, memo } = body;

    const quote = await prisma.quote.update({
      where: { id: params.id },
      data: {
        ...(status && { status }),
        ...(memo !== undefined && { memo }),
      },
    });

    return NextResponse.json(quote);
  } catch (error) {
    console.error("Quote update error:", error);
    return NextResponse.json(
      { error: "견적 정보 수정 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

// 견적 신청 삭제 (관리자용)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.quote.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote delete error:", error);
    return NextResponse.json(
      { error: "견적 삭제 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
