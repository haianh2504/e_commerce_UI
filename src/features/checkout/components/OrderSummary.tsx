import Image from "next/image";

import { Card } from "@/components/ui/Card";
import type { MockCartItem } from "@/data/mock/cart";
import { calculateCartItemCount, calculateCartSubtotal, calculateLineTotal } from "@/features/cart/cartCalculations";
import { formatVnd } from "@/lib/formatCurrency";

export function OrderSummary({ items }: { items: MockCartItem[] }) {
  const subtotal = calculateCartSubtotal(items);
  return (
    <Card className="lg:sticky lg:top-28">
      <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em]">Tóm tắt đơn hàng</h2>
      <p className="mt-2 text-sm text-text-secondary">{calculateCartItemCount(items)} sản phẩm minh họa</p>
      <ul className="mt-6 divide-y divide-border">
        {items.map((item) => <li key={item.id} className="flex gap-4 py-4 first:pt-0">
          <div className="relative size-18 shrink-0 overflow-hidden rounded-xl bg-surface-subtle"><Image src={item.image} alt={item.imageAlt} fill sizes="72px" className="object-cover" /></div>
          <div className="min-w-0 flex-1"><p className="font-semibold leading-6">{item.name}</p><p className="text-sm text-text-secondary">Số lượng: {item.quantity}</p></div>
          <p className="shrink-0 text-sm font-semibold">{formatVnd(calculateLineTotal(item))}</p>
        </li>)}
      </ul>
      <dl className="mt-2 grid gap-3 border-t border-border pt-5">
        <div className="flex justify-between gap-4 text-text-secondary"><dt>Tạm tính</dt><dd>{formatVnd(subtotal)}</dd></div>
        <div className="flex justify-between gap-4 text-text-secondary"><dt>Phí giao hàng</dt><dd>Chờ xác nhận</dd></div>
        <div className="flex justify-between gap-4 border-t border-border pt-4 text-lg font-semibold"><dt>Tổng tạm tính</dt><dd>{formatVnd(subtotal)}</dd></div>
      </dl>
      <p className="mt-4 text-sm leading-6 text-text-secondary">Giá và tổng tiền chỉ phục vụ trình diễn UI. Tổng cuối cùng và phí giao hàng thuộc hệ thống backend.</p>
    </Card>
  );
}
