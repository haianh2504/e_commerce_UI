import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Xác nhận minh họa",
  description: "Xem trạng thái hoàn tất của quy trình thanh toán minh họa tại KOMO.",
  robots: { index: false, follow: false },
};
export default function CheckoutConfirmationPage() {
  return <><StoreHeader /><main id="main-content" tabIndex={-1} className="min-h-[75svh] pt-18 outline-none lg:pt-20"><Container size="content" className="py-12 sm:py-16 lg:py-24"><Card className="text-center">
    <div className="mx-auto grid size-14 place-items-center rounded-full bg-success-subtle text-2xl font-bold text-success" aria-hidden="true">✓</div>
    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-success">Hoàn tất bản trình diễn</p>
    <h1 className="mx-auto mt-2 max-w-xl font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Bạn đã hoàn thành quy trình thanh toán minh họa</h1>
    <p className="mx-auto mt-5 max-w-2xl text-text-secondary">Không có đơn hàng thật, mã đơn hàng, giao dịch thanh toán hoặc thông tin khách hàng nào được tạo hay lưu lại.</p>
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><ButtonLink href="/products">Tiếp tục khám phá</ButtonLink><ButtonLink href="/cart" variant="secondary">Quay lại giỏ hàng</ButtonLink></div>
  </Card></Container></main><StoreFooter /></>;
}
