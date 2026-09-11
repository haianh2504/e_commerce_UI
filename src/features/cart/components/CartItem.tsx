import Image from "next/image";
import Link from "next/link";

import type { MockCartItem } from "@/data/mock/cart";
import { formatVnd } from "@/lib/formatCurrency";

import { calculateLineTotal } from "../cartCalculations";

type CartItemProps = {
  item: MockCartItem;
  onDecrease: () => void;
  onIncrease: () => void;
  onRemove: () => void;
};

export function CartItem({ item, onDecrease, onIncrease, onRemove }: CartItemProps) {
  return (
    <li className="grid gap-5 border-b border-border py-6 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[9rem_1fr]">
      <Link href={item.productHref} className="relative aspect-[4/5] w-full max-w-36 overflow-hidden rounded-card bg-surface-subtle sm:max-w-none">
        <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 640px) 144px, 144px" className="object-cover" />
      </Link>

      <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:justify-between">
        <div className="min-w-0">
          <Link href={item.productHref} className="font-heading text-lg font-semibold tracking-[-0.02em] hover:underline hover:underline-offset-4">
            {item.name}
          </Link>
          <p className="mt-1 text-sm text-text-secondary">Đơn giá: {formatVnd(item.unitPrice)}</p>
          <button type="button" onClick={onRemove} className="mt-4 min-h-11 rounded-sm text-sm font-semibold text-text-secondary underline decoration-border underline-offset-4 hover:text-primary">
            Xóa sản phẩm
          </button>
        </div>

        <div className="flex items-end justify-between gap-5 sm:flex-col sm:items-end">
          <div>
            <span className="mb-2 block text-sm font-semibold">Số lượng</span>
            <div className="inline-flex items-center rounded-button border border-border bg-surface" aria-label={`Số lượng ${item.name}`}>
              <button type="button" onClick={onDecrease} disabled={item.quantity === 1} aria-label={`Giảm số lượng ${item.name}`} className="inline-flex size-11 items-center justify-center rounded-l-button text-xl disabled:cursor-not-allowed disabled:text-disabled">−</button>
              <output aria-live="polite" aria-atomic="true" className="min-w-10 text-center font-semibold" aria-label={`${item.quantity} sản phẩm`}>{item.quantity}</output>
              <button type="button" onClick={onIncrease} aria-label={`Tăng số lượng ${item.name}`} className="inline-flex size-11 items-center justify-center rounded-r-button text-xl">+</button>
            </div>
          </div>
          <p className="font-heading text-lg font-semibold" aria-label={`Thành tiền ${formatVnd(calculateLineTotal(item))}`}>
            {formatVnd(calculateLineTotal(item))}
          </p>
        </div>
      </div>
    </li>
  );
}
