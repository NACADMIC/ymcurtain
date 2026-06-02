"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const priceStr = product.price.toLocaleString("ko-KR") + "원";
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block bg-white border border-black/5 rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
    >
      <div className="relative aspect-square bg-beige overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent group-hover:scale-105 transition-transform duration-500" />
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width:768px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-black/20 text-sm">
            상품 이미지
          </div>
        )}
        {product.badge && (
          <span
            className={`absolute top-2 left-2 px-2 py-0.5 text-xs font-semibold text-white rounded ${
              product.badge === "BEST"
                ? "bg-primary"
                : product.badge === "NEW"
                ? "bg-black"
                : product.badge === "1+1"
                ? "bg-red-500"
                : "bg-accent"
            }`}
          >
            {product.badge}
          </span>
        )}
        <button
          type="button"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent hover:text-white"
          aria-label="위시리스트"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
        >
          <HeartIcon />
        </button>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium text-black line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-black">{priceStr}</p>
        <p className="text-xs text-black/50">리뷰 {product.reviewCount.toLocaleString()}</p>
      </div>
    </Link>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
