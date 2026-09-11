import Image from "next/image";

import { Button, ButtonLink } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-primary px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="final-cta-heading">
      <Image
        src="/images/komo/final-cta-cozy-home.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[48%_60%] sm:object-center"
      />
      <div className="absolute inset-0 bg-primary/68" />
      <div className="relative mx-auto grid w-full max-w-3xl justify-items-center text-center">
        <p className="rounded-full bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">Không gian của bạn</p>
        <h2 id="final-cta-heading" className="mt-6 font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">Sẵn sàng làm mới không gian sống?</h2>
        <p className="mt-5 max-w-2xl leading-7 text-white/82 sm:text-lg">Khám phá những sản phẩm được lựa chọn để mang lại sự thoải mái cho ngôi nhà của bạn.</p>
        <div className="mt-8 grid w-full gap-3 sm:w-auto sm:grid-cols-2">
          <ButtonLink href="/products" size="lg" variant="imageCta">Khám phá sản phẩm</ButtonLink>
          <Button size="lg" variant="secondary" disabled className="border-white/60 bg-transparent text-white">Liên hệ</Button>
        </div>
        <div className="mt-10 border-t border-white/25 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span className="sr-only">Xếp hạng minh họa: 4,9 trên 5</span>
            <span className="flex gap-1 text-rating-star" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => <StarIcon key={index} />)}
            </span>
            <strong className="text-xl">4.9</strong>
          </div>
          <p className="mt-2 text-base text-white">Được tin tưởng bởi 200+ khách hàng</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-white/70">Số liệu đánh giá minh họa</p>
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <path d="m10 1.8 2.5 5.1 5.7.8-4.1 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4.1-4 5.7-.8L10 1.8Z" fill="currentColor" />
    </svg>
  );
}
