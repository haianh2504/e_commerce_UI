import type { MockCartItem } from "@/data/mock/cart";
import { CheckoutForm } from "./CheckoutForm";
import { OrderSummary } from "./OrderSummary";

export function Checkout({ items }: { items: MockCartItem[] }) {
  return <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start xl:gap-12"><CheckoutForm /><aside aria-label="Tóm tắt đơn hàng"><OrderSummary items={items} /></aside></div>;
}
