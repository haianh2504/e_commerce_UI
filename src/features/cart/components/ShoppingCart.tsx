"use client";

import { useState } from "react";

import { EmptyState } from "@/components/feedback/EmptyState";
import { ButtonLink } from "@/components/ui/Button";
import type { MockCartItem } from "@/data/mock/cart";

import { calculateCartItemCount, calculateCartSubtotal } from "../cartCalculations";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";

type ShoppingCartProps = { initialItems: MockCartItem[] };

export function ShoppingCart({ initialItems }: ShoppingCartProps) {
  const [items, setItems] = useState(initialItems);
  const [announcement, setAnnouncement] = useState("");

  function changeQuantity(id: string, amount: number) {
    setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item));
  }

  function removeItem(id: string) {
    const removedItem = items.find((item) => item.id === id);
    setItems((current) => current.filter((item) => item.id !== id));
    if (removedItem) setAnnouncement(`Đã xóa ${removedItem.name} khỏi giỏ hàng.`);
  }

  if (items.length === 0) {
    return (
      <>
        <p className="sr-only" role="status" aria-live="polite">{announcement}</p>
        <div className="max-w-2xl">
          <EmptyState title="Giỏ hàng đang trống" description="Bạn đã xóa hết sản phẩm minh họa. Hãy quay lại danh mục để tiếp tục khám phá." action={<ButtonLink href="/products">Khám phá sản phẩm</ButtonLink>} />
        </div>
      </>
    );
  }

  return (
    <>
      <p className="sr-only" role="status" aria-live="polite">{announcement}</p>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-start xl:gap-12">
        <section aria-labelledby="cart-items-title" className="rounded-card border border-border bg-surface p-5 sm:p-6">
          <h2 id="cart-items-title" className="sr-only">Sản phẩm trong giỏ hàng</h2>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} item={item} onDecrease={() => changeQuantity(item.id, -1)} onIncrease={() => changeQuantity(item.id, 1)} onRemove={() => removeItem(item.id)} />
            ))}
          </ul>
        </section>
        <aside aria-label="Tóm tắt giỏ hàng">
          <CartSummary itemCount={calculateCartItemCount(items)} subtotal={calculateCartSubtotal(items)} />
        </aside>
      </div>
    </>
  );
}
