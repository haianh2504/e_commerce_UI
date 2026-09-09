import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredCategories } from "@/data/mock/categories";
import { featuredProducts } from "@/data/mock/products";
import { ProductGrid } from "@/features/catalog/components/ProductGrid";

export const metadata: Metadata = {
  title: "Nội thất cho nhịp sống mỗi ngày",
  description:
    "Khám phá ghế, bàn học và sofa trong không gian nội thất ấm áp của KOMO.",
};

export default function HomePage() {
  return (
    <>
      <StoreHeader overlay />
      <main>
        <section
          className="relative flex min-h-[76svh] items-center overflow-hidden bg-primary text-white sm:min-h-[80svh]"
          aria-labelledby="hero-title"
        >
          <Image
            src="/images/komo/hero-living-room.jpg"
            alt="Phòng khách hiện đại với sofa, ghế thư giãn và bàn học bằng gỗ"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,22,25,0.62)_0%,rgba(4,22,25,0.30)_38%,rgba(4,22,25,0.58)_100%)]" />
          <Container className="relative flex justify-center pt-20 text-center">
            <div className="grid max-w-3xl justify-items-center gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                KOMO · Nội thất cho cuộc sống
              </p>
              <h1
                id="hero-title"
                className="font-heading text-[clamp(2.25rem,6.5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-balance"
              >
                Nâng tầm cuộc sống mỗi ngày
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Khám phá những sản phẩm nội thất chất lượng, được tuyển chọn để
                biến ngôi nhà thành không gian sống đầy cảm hứng.
              </p>
              <ButtonLink
                href="/products"
                size="lg"
                className="mt-1 border-white bg-white text-primary hover:bg-background"
              >
                Khám phá bộ sưu tập
                <ArrowIcon />
              </ButtonLink>
            </div>
          </Container>
        </section>

        <section
          className="py-16 sm:py-20 lg:py-24"
          aria-labelledby="category-heading"
        >
          <Container>
            <SectionHeading
              titleId="category-heading"
              eyebrow="Không gian của bạn"
              title="Bắt đầu từ món đồ phù hợp"
              description="Ba lựa chọn thiết thực để hoàn thiện góc học tập và không gian sống theo cách riêng của bạn."
            />
            <div className="mt-9 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
              {featuredCategories.map((category) => (
                <article
                  key={category.name}
                  className="group relative aspect-[4/3] overflow-hidden rounded-card bg-primary text-white"
                >
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(max-width: 767px) 92vw, 31vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
                  <Link
                    href={category.href}
                    className="absolute inset-0 flex items-end rounded-card p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset sm:p-6"
                    aria-label={`Khám phá danh mục ${category.name}`}
                  >
                    <span className="grid gap-1">
                      <span className="font-heading text-2xl font-semibold">
                        {category.name}
                      </span>
                      <span className="max-w-xs text-sm leading-6 text-white/78">
                        {category.description}
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section
          className="bg-surface py-16 sm:py-20 lg:py-24"
          aria-labelledby="featured-heading"
        >
          <Container>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                titleId="featured-heading"
                eyebrow="Gợi ý từ KOMO"
                title="Nội thất được yêu thích"
                description="Sản phẩm và mức giá dưới đây là dữ liệu minh họa cho giao diện."
              />
              <ButtonLink
                href="/products"
                variant="secondary"
                className="w-fit shrink-0"
              >
                Xem tất cả
                <ArrowIcon />
              </ButtonLink>
            </div>
            <div className="mt-10 lg:mt-12">
              <ProductGrid products={featuredProducts} />
            </div>
          </Container>
        </section>
      </main>
      <StoreFooter />
    </>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <path
        d="M4 10h11m-4-4 4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
