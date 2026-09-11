"use client";

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
    <div>
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

      <ul ref={trackRef} className="mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:thin] lg:mt-12" aria-label="Đánh giá khách hàng minh họa">
        {reviews.map((review) => (
          <li key={review.id} className="w-full shrink-0 snap-start sm:w-[calc(50%_-_0.5rem)] lg:w-[calc(33.333%_-_0.7rem)]">
            <Card className="h-full">
              <p className="sr-only">Đánh giá minh họa: {review.rating} trên 5 sao</p>
              <div aria-hidden="true" className="flex gap-1 text-warning">{Array.from({ length: review.rating }, (_, index) => <StarIcon key={index} />)}</div>
              <blockquote className="mt-5 text-lg leading-8">“{review.text}”</blockquote>
              <p className="mt-6 border-t border-border pt-5 font-semibold">{review.name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary">Đánh giá minh họa</p>
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
  return <svg viewBox="0 0 20 20" width="18" height="18"><path d="m10 1.8 2.5 5.1 5.7.8-4.1 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4.1-4 5.7-.8L10 1.8Z" fill="currentColor" /></svg>;
}
