import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { initialMockCart } from "@/data/mock/cart";
import { ShoppingCart } from "@/features/cart/components/ShoppingCart";

export const metadata: Metadata = {
  title: "Giỏ hàng",
  description: "Xem và điều chỉnh giỏ hàng minh họa tại KOMO.",
};

export default function CartPage() {
  return (
    <>
      <StoreHeader />
      <main className="min-h-[75svh] pt-18 lg:pt-20">
        <Container className="py-10 sm:py-12 lg:py-16">
          <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Giỏ hàng" }]} />
          <header className="mb-9 mt-6 sm:mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-text-secondary">Giao diện minh họa</p>
            <h1 className="mt-2 font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Giỏ hàng của bạn</h1>
          </header>
          <ShoppingCart initialItems={initialMockCart} />
        </Container>
      </main>
      <StoreFooter />
    </>
  );
}
