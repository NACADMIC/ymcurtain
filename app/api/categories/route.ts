import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (!prisma) {
      return NextResponse.json({ error: "Database not connected" }, { status: 503 });
    }
    const categories = await prisma.category.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(categories);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!prisma) {
      return NextResponse.json({ error: "Database not connected" }, { status: 503 });
    }
    const body = await request.json();
    const { name, slug, description, order, parentId } = body;
    const category = await prisma.category.create({
      data: {
        name: name ?? "",
        slug: slug ?? name?.toLowerCase().replace(/\s+/g, "-") ?? "",
        description: description ?? null,
        order: Number(order) ?? 0,
        parentId: parentId ?? null,
      },
    });
    return NextResponse.json(category);
  } catch (e) {
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 });
  }
}
