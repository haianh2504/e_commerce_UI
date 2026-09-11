import type { MockCartItem } from "@/data/mock/cart";

export function calculateLineTotal(item: MockCartItem) {
  return item.unitPrice * item.quantity;
}

export function calculateCartSubtotal(items: MockCartItem[]) {
  return items.reduce((total, item) => total + calculateLineTotal(item), 0);
}

export function calculateCartItemCount(items: MockCartItem[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}
