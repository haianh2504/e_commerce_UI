import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Tìm hiểu định hướng của KOMO dành cho góc học tập và không gian sống hiện đại.",
};

export default function AboutPage() {
  return (
    <>
      <StoreHeader />
      <main id="main-content" tabIndex={-1} className="pt-18 outline-none lg:pt-20">
        <section
          className="py-14 sm:py-20 lg:py-24"
          aria-labelledby="about-title"
        >
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 grid gap-6 lg:order-1">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-text-secondary">
                  Về KOMO
                </p>
                <h1
                  id="about-title"
                  className="font-heading text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl"
                >
                  Tiện nghi mỗi ngày, giá trị trong tầm tay.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-text-secondary">
                  KOMO hướng đến những món nội thất thiết thực, thoải mái và dễ
                  kết hợp cho góc học tập cũng như không gian sống hiện đại.
                </p>
                <ButtonLink href="/products" size="lg" className="w-fit">
                  Khám phá sản phẩm
                </ButtonLink>
              </div>
              <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-card bg-surface-subtle lg:order-2">
                <Image
                  src="/images/komo/category-desk.jpg"
                  alt="Góc học tập ấm áp với bàn và ghế gỗ"
                  fill
                  fetchPriority="high"
                  sizes="(max-width: 1023px) 92vw, 46vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        <section
          className="bg-surface py-16 sm:py-20"
          aria-labelledby="mission-title"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-text-secondary">
                  Định hướng
                </p>
                <h2
                  id="mission-title"
                  className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-primary sm:text-4xl"
                >
                  Không gian tốt bắt đầu từ nhu cầu thật
                </h2>
              </div>
              <div className="grid gap-8 text-base leading-8 text-text-secondary sm:grid-cols-2">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    Cho việc học tập
                  </h3>
                  <p className="mt-3">
                    Bàn học và ghế được giới thiệu với bố cục rõ ràng, giúp học
                    sinh và người trẻ dễ hình dung một góc tập trung gọn gàng.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    Cho cuộc sống tại nhà
                  </h3>
                  <p className="mt-3">
                    Sofa và ghế thư giãn hướng đến cảm giác ấm cúng, hiện đại và
                    phù hợp với nhịp sinh hoạt hằng ngày.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <StoreFooter />
    </>
  );
}
