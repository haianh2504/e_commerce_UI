import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { initialMockCart } from "@/data/mock/cart";
import { Checkout } from "@/features/checkout/components/Checkout";

export const metadata: Metadata = {
  title: "Thanh toán",
  description: "Hoàn tất thông tin giao hàng trong quy trình thanh toán minh họa của KOMO.",
};

export default function CheckoutPage() {
  return (
    <>
      <StoreHeader />
      <main className="min-h-[75svh] pt-18 lg:pt-20">
        <Container className="py-10 sm:py-12 lg:py-16">
          <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Giỏ hàng", href: "/cart" }, { label: "Thanh toán" }]} />
          <header className="mb-9 mt-6 sm:mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-text-secondary">Giao diện minh họa</p>
            <h1 className="mt-2 font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Thanh toán</h1>
            <p className="mt-4 max-w-2xl text-text-secondary">Điền thông tin giao hàng và kiểm tra lại sản phẩm. Không có đơn hàng hay thanh toán thật nào được tạo.</p>
          </header>
          <Checkout items={initialMockCart} />
        </Container>
      </main>
      <StoreFooter />
    </>
  );
}
