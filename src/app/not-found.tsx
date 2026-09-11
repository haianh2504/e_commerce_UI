import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Không tìm thấy trang",
  description: "Trang bạn đang tìm không tồn tại trên giao diện KOMO.",
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return (
    <>
      <StoreHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="grid min-h-[75svh] place-items-center px-4 pb-14 pt-32 text-center outline-none lg:pt-36"
      >
        <Container size="content" className="px-0">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-text-secondary">
            Lỗi 404
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl">
            Không tìm thấy trang
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-text-secondary">
            Đường dẫn này không tồn tại hoặc đã thay đổi. Bạn có thể quay lại
            trang chủ hoặc tiếp tục khám phá danh mục sản phẩm minh họa.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/">Về trang chủ</ButtonLink>
            <ButtonLink href="/products" variant="secondary">
              Xem sản phẩm
            </ButtonLink>
          </div>
        </Container>
      </main>
      <StoreFooter />
    </>
  );
}
