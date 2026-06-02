import ProductCard from "@/app/components/ProductCard";
import { timeSaleProducts } from "@/lib/products";

export default function FastPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-black mb-2">빠른배송</h1>
      <p className="text-black/60 mb-6">빠른배송 가능 상품입니다.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {timeSaleProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
