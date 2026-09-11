"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { Card } from "@/components/ui/Card";
import type { MockReview } from "@/data/mock/reviews";

export function CustomerReviews({ reviews }: { reviews: MockReview[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(reviews.length > 1);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanGoBack(track.scrollLeft > 2);
    setCanGoForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateControls();
    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(track);
    track.addEventListener("scroll", updateControls, { passive: true });

    return () => {
      resizeObserver.disconnect();
      track.removeEventListener("scroll", updateControls);
    };
  }, [updateControls]);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="min-w-0 max-w-full">
      <div className="flex items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-text-secondary">Trải nghiệm khách hàng</p>
          <h2 id="reviews-heading" className="mt-2 font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Khách hàng nói gì về chúng tôi?</h2>
          <p className="mt-4 text-text-secondary">Nội dung đánh giá dưới đây là dữ liệu minh họa cho giao diện.</p>
        </div>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <CarouselButton label="Xem đánh giá trước" disabled={!canGoBack} onClick={() => move(-1)} direction="previous" />
          <CarouselButton label="Xem đánh giá tiếp theo" disabled={!canGoForward} onClick={() => move(1)} direction="next" />
        </div>
      </div>

      <ul ref={trackRef} className="mt-9 flex max-w-full snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-3 [scrollbar-width:thin] lg:mt-12 lg:gap-4" aria-label="Đánh giá khách hàng minh họa">
        {reviews.map((review) => (
          <li key={review.id} className="w-[calc(50%_-_0.375rem)] shrink-0 snap-start lg:w-[calc(25%_-_0.75rem)]">
            <Card padding="none" className="flex h-full min-w-0 flex-col overflow-hidden p-3 sm:p-4">
              <div className="flex min-w-0 flex-wrap items-start justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  <div aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full bg-surface-subtle font-heading text-xs font-semibold text-primary">{getInitials(review.name)}</div>
                  <div className="min-w-0">
                    <p className="truncate font-heading text-sm font-semibold">{review.name}</p>
                    <p className="mt-0.5 truncate text-[0.5625rem] font-semibold uppercase tracking-[0.06em] text-text-secondary">Đánh giá minh họa</p>
                    <p className="text-[0.6875rem] text-text-secondary">{review.relativeDate}</p>
                  </div>
                </div>
                <div className="inline-flex shrink-0 items-center gap-1 rounded-full bg-success-subtle px-2 py-1 text-[0.6875rem] font-semibold text-success">
                  <CheckIcon />
                  <span>Đã mua hàng</span>
                </div>
              </div>
              <p className="sr-only">Đánh giá minh họa: {review.rating} trên 5 sao</p>
              <div aria-hidden="true" className="mt-4 flex gap-0.5 text-rating-star">{Array.from({ length: review.rating }, (_, index) => <StarIcon key={index} />)}</div>
              <blockquote className="mt-4 grow font-heading text-sm font-medium leading-6 tracking-[-0.015em] sm:text-base sm:leading-7">
                <span aria-hidden="true" className="text-text-secondary/35">“</span>{review.text}<span aria-hidden="true" className="text-text-secondary/60">”</span>
              </blockquote>
              <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-button bg-surface-subtle">
                <Image src={review.image} alt={review.imageAlt} fill sizes="(max-width: 1023px) 46vw, 21vw" className="object-cover" />
              </div>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-end gap-2 sm:hidden">
        <CarouselButton label="Xem đánh giá trước" disabled={!canGoBack} onClick={() => move(-1)} direction="previous" />
        <CarouselButton label="Xem đánh giá tiếp theo" disabled={!canGoForward} onClick={() => move(1)} direction="next" />
      </div>
    </div>
  );
}

function CarouselButton({ direction, label, ...props }: { direction: "previous" | "next"; label: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" aria-label={label} className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-primary hover:bg-surface-subtle disabled:cursor-not-allowed disabled:opacity-40" {...props}><span aria-hidden="true">{direction === "previous" ? "←" : "→"}</span></button>;
}

function StarIcon() {
  return <svg viewBox="0 0 20 20" className="size-3.5 sm:size-4"><path d="m10 1.8 2.5 5.1 5.7.8-4.1 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4.1-4 5.7-.8L10 1.8Z" fill="currentColor" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 20 20" className="size-3.5" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="currentColor" /><path d="m5.8 10.1 2.6 2.6 5.8-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>;
}

function getInitials(name: string) {
  return name.split(" ").map((part) => part[0]).slice(-2).join("").toUpperCase();
}
