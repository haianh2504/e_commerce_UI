"use client";

import Image from "next/image";
import { useState } from "react";

import type { ProductImage } from "@/data/mock/products";
import { cn } from "@/lib/cn";

type ProductGalleryProps = {
  images: ProductImage[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex] ?? images[0];

  if (!selectedImage) return null;

  return (
    <section aria-label={`Hình ảnh ${productName}`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-surface-subtle sm:aspect-[5/4] lg:aspect-[4/5]">
        <Image
          key={selectedImage.src}
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          priority
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 52vw"
          className="object-cover"
        />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3 sm:mt-4 sm:max-w-md">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            aria-label={`Xem hình ${index + 1} của ${productName}`}
            aria-pressed={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-button border-2 bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              selectedIndex === index ? "border-primary" : "border-transparent hover:border-border",
            )}
          >
            <Image src={image.src} alt="" fill sizes="9rem" className="object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
}
