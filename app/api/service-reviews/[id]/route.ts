import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// 시공 후기 수정 (관리자용)
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { name, location, rating, comment, imageUrl, date, isVisible, order } = body;

    const review = await prisma.serviceReview.update({
      where: { id: params.id },
      data: {
        ...(name && { name }),
        ...(location && { location }),
        ...(rating !== undefined && { rating }),
        ...(comment && { comment }),
        ...(imageUrl !== undefined && { imageUrl }),
        ...(date && { date: new Date(date) }),
        ...(isVisible !== undefined && { isVisible }),
        ...(order !== undefined && { order }),
      },
    });

    return NextResponse.json(review);
  } catch (error) {
    console.error("Review update error:", error);
    return NextResponse.json(
      { error: "후기 수정 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

// 시공 후기 삭제 (관리자용)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.serviceReview.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Review delete error:", error);
    return NextResponse.json(
      { error: "후기 삭제 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
