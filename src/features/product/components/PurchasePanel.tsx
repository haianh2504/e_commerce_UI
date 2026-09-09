"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { formatVnd } from "@/lib/formatCurrency";

import { calculateMockTotal, normalizeQuantity } from "../productInteraction";

type PurchasePanelProps = {
  available: boolean;
  productName: string;
  unitPrice: number;
};

export function PurchasePanel({ available, productName, unitPrice }: PurchasePanelProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  function updateQuantity(nextQuantity: number) {
    setQuantity(normalizeQuantity(nextQuantity));
    setIsAdded(false);
  }

  return (
    <aside className="rounded-card border border-border bg-surface p-5 sm:p-6 lg:sticky lg:top-28" aria-label="Thông tin mua hàng minh họa">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">{available ? "Có sẵn · Dữ liệu minh họa" : "Tạm hết · Dữ liệu minh họa"}</p>
      <h1 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl">{productName}</h1>
      <p className="mt-4 text-xl font-semibold text-primary">{formatVnd(unitPrice)}</p>

      <div className="mt-7 border-t border-border pt-6">
        <p id="quantity-label" className="mb-3 text-sm font-semibold text-primary">Số lượng</p>
        <div className="inline-flex items-center overflow-hidden rounded-button border border-border bg-background" role="group" aria-labelledby="quantity-label">
          <button type="button" className="size-11 text-xl font-semibold hover:bg-surface-subtle disabled:cursor-not-allowed disabled:text-disabled" aria-label="Giảm số lượng" disabled={!available || quantity === 1} onClick={() => updateQuantity(quantity - 1)}>−</button>
          <input
            className="h-11 w-14 border-x border-border bg-surface text-center font-semibold outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary disabled:text-disabled"
            type="number"
            min="1"
            inputMode="numeric"
            aria-label="Số lượng sản phẩm"
            disabled={!available}
            value={quantity}
            onChange={(event) => updateQuantity(Number(event.target.value))}
          />
          <button type="button" className="size-11 text-xl font-semibold hover:bg-surface-subtle disabled:cursor-not-allowed disabled:text-disabled" aria-label="Tăng số lượng" disabled={!available} onClick={() => updateQuantity(quantity + 1)}>+</button>
        </div>
      </div>

      <dl className="mt-6 grid gap-3 border-y border-border py-5 text-sm">
        <div className="flex justify-between gap-4"><dt className="text-text-secondary">Sản phẩm</dt><dd className="text-right font-semibold">{productName}</dd></div>
        <div className="flex justify-between gap-4"><dt className="text-text-secondary">Đơn giá</dt><dd className="font-semibold">{formatVnd(unitPrice)}</dd></div>
        <div className="flex justify-between gap-4"><dt className="text-text-secondary">Số lượng</dt><dd className="font-semibold">{quantity}</dd></div>
        <div className="flex justify-between gap-4 text-base"><dt className="font-semibold">Tổng cộng</dt><dd className="font-semibold">{formatVnd(calculateMockTotal(unitPrice, quantity))}</dd></div>
      </dl>

      <Button
        className="mt-6 w-full"
        style={isAdded ? { backgroundColor: "#10B981", borderColor: "#10B981", color: "#092328" } : undefined}
        size="lg"
        disabled={!available}
        onClick={() => setIsAdded(true)}
      >
        {available ? (isAdded ? "Đã thêm" : "Thêm vào giỏ hàng") : "Tạm hết hàng"}
      </Button>
      <p className="mt-3 min-h-6 text-center text-sm font-semibold text-success" role="status" aria-live="polite">
        {isAdded ? "Đã thêm" : ""}
      </p>
      <p className="text-center text-xs text-text-secondary">Thao tác minh họa, không lưu dữ liệu.</p>
    </aside>
  );
}
