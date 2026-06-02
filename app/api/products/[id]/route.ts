import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: { category: true, images: true, options: true },
    });
    if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(product);
  } catch (e) {
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { name, slug, categoryId, price, salePrice, stock, description, status } = body;
    const product = await prisma.product.update({
      where: { id: params.id },
      data: {
        ...(name != null && { name }),
        ...(slug != null && { slug }),
        ...(categoryId != null && { categoryId }),
        ...(price != null && { price: Number(price) }),
        ...(salePrice != null && { salePrice: salePrice === "" ? null : Number(salePrice) }),
        ...(stock != null && { stock: Number(stock) }),
        ...(description != null && { description }),
        ...(status != null && { status }),
      },
    });
    return NextResponse.json(product);
  } catch (e) {
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.product.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}
