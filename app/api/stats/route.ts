import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// 사이트 통계 조회
export async function GET() {
  try {
    // 첫 번째 통계 레코드 가져오기 (없으면 생성)
    let stats = await prisma.siteStats.findFirst();

    if (!stats) {
      stats = await prisma.siteStats.create({
        data: {
          totalProjects: 2500,
          satisfactionRate: 98,
          yearsExperience: 15,
        },
      });
    }

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Stats fetch error:", error);
    return NextResponse.json(
      { error: "통계 조회 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

// 사이트 통계 수정 (관리자용)
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { totalProjects, satisfactionRate, yearsExperience } = body;

    // 첫 번째 통계 레코드 가져오기
    let stats = await prisma.siteStats.findFirst();

    if (!stats) {
      // 없으면 생성
      stats = await prisma.siteStats.create({
        data: {
          totalProjects: totalProjects || 2500,
          satisfactionRate: satisfactionRate || 98,
          yearsExperience: yearsExperience || 15,
        },
      });
    } else {
      // 있으면 업데이트
      stats = await prisma.siteStats.update({
        where: { id: stats.id },
        data: {
          ...(totalProjects !== undefined && { totalProjects }),
          ...(satisfactionRate !== undefined && { satisfactionRate }),
          ...(yearsExperience !== undefined && { yearsExperience }),
        },
      });
    }

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Stats update error:", error);
    return NextResponse.json(
      { error: "통계 수정 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
