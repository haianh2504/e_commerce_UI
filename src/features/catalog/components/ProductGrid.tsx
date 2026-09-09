import type { MockProduct } from "@/data/mock/products";

import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: MockProduct[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-9 md:grid-cols-3 md:gap-x-5 xl:grid-cols-4 xl:gap-x-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
