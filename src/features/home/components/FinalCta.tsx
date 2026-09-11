import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="relative flex min-h-[80svh] w-full items-center overflow-hidden bg-primary px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="final-cta-heading">
      <Image
        src="/images/komo/final-cta-cozy-home.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[48%_60%] sm:object-center"
      />
      <div className="absolute inset-0 bg-primary/68" />
      <div className="relative mx-auto grid w-full max-w-3xl justify-items-center text-center">
        <p className="rounded-full bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">Sẵn sàng khám phá?</p>
        <h2 id="final-cta-heading" className="mt-6 font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">Sẵn sàng làm mới không gian sống?</h2>
        <p className="mt-5 max-w-2xl leading-7 text-white/82 sm:text-lg">Khám phá ghế, bàn học và sofa được tuyển chọn cho góc học tập và không gian sống mỗi ngày.</p>
        <div className="mt-8 grid w-full gap-3 sm:w-auto sm:grid-cols-2">
          <ButtonLink href="/products" size="lg" className="border-white bg-white text-primary hover:bg-background">Khám phá sản phẩm</ButtonLink>
          <ButtonLink href="/about" size="lg" variant="secondary" className="border-white bg-transparent text-white hover:bg-white/10">Tìm hiểu về KOMO</ButtonLink>
        </div>
      </div>
    </section>
  );
}
