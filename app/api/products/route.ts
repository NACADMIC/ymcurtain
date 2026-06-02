import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: { category: true, images: { orderBy: { order: "asc" } } },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(products);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, slug, categoryId, price, salePrice, stock, description, status } = body;
    const product = await prisma.product.create({
      data: {
        name: name ?? "",
        slug: slug ?? name?.toLowerCase().replace(/\s+/g, "-") ?? "",
        categoryId,
        price: Number(price) ?? 0,
        salePrice: salePrice ? Number(salePrice) : null,
        stock: Number(stock) ?? 0,
        description: description ?? null,
        status: status ?? "active",
      },
    });
    return NextResponse.json(product);
  } catch (e) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
