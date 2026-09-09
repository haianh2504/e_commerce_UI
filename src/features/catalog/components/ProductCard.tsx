import Image from "next/image";
import Link from "next/link";

import type { MockProduct } from "@/data/mock/products";
import { formatVnd } from "@/lib/formatCurrency";

type ProductCardProps = {
  product: MockProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group min-w-0">
      <Link href={product.href} className="block rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-surface-subtle">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 767px) 46vw, (max-width: 1279px) 30vw, 22vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transition-none"
          />
        </div>
        <div className="grid gap-1 px-1 pt-3 sm:pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary">
            {product.category}
          </p>
          <h3 className="font-heading text-base font-semibold text-primary group-hover:underline group-hover:underline-offset-4 sm:text-lg">
            {product.name}
          </h3>
          <p className="font-semibold text-primary">{formatVnd(product.price)}</p>
          <p className="text-xs text-text-secondary">
            {product.available ? "Có sẵn · Dữ liệu minh họa" : "Tạm hết · Dữ liệu minh họa"}
          </p>
        </div>
      </Link>
    </article>
  );
}
