"use client";

import { useEffect, useRef, useState } from "react";

import { EmptyState } from "@/components/feedback/EmptyState";
import { Button } from "@/components/ui/Button";
import {
  productCategories,
  products,
  type ProductCategory,
} from "@/data/mock/products";
import {
  filterProducts,
  type AvailabilityFilter,
  type PriceFilter,
} from "@/features/catalog/filterProducts";
import { cn } from "@/lib/cn";

import { ProductGrid } from "./ProductGrid";

type CatalogProps = {
  initialCategory?: ProductCategory;
  initialQuery?: string;
};

const priceOptions: { label: string; value: PriceFilter }[] = [
  { label: "Tất cả mức giá", value: "all" },
  { label: "Dưới 3 triệu", value: "under-3m" },
  { label: "Từ 3 đến 6 triệu", value: "3m-6m" },
  { label: "Trên 6 triệu", value: "over-6m" },
];

const availabilityOptions: { label: string; value: AvailabilityFilter }[] = [
  { label: "Tất cả trạng thái", value: "all" },
  { label: "Có sẵn", value: "available" },
  { label: "Tạm hết", value: "unavailable" },
];

export function Catalog({ initialCategory, initialQuery = "" }: CatalogProps) {
  const [category, setCategory] = useState<ProductCategory | "all">(
    initialCategory ?? "all",
  );
  const [price, setPrice] = useState<PriceFilter>("all");
  const [availability, setAvailability] =
    useState<AvailabilityFilter>("all");
  const [query, setQuery] = useState(initialQuery);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const filteredProducts = filterProducts(products, {
    availability,
    category,
    price,
    query,
  });
  const hasActiveFilters =
    category !== "all" || price !== "all" || availability !== "all" || Boolean(query);

  useEffect(() => {
    if (!isFilterOpen) return;
    const trigger = document.getElementById("open-mobile-filters");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsFilterOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [isFilterOpen]);

  function clearFilters() {
    setCategory("all");
    setPrice("all");
    setAvailability("all");
    setQuery("");
  }

  const controls = (
    <div className="grid gap-7">
      <FilterGroup legend="Danh mục">
        <RadioOption checked={category === "all"} label="Tất cả danh mục" onChange={() => setCategory("all")} />
        {productCategories.map((item) => (
          <RadioOption key={item} checked={category === item} label={item} onChange={() => setCategory(item)} />
        ))}
      </FilterGroup>
      <FilterGroup legend="Khoảng giá">
        {priceOptions.map((option) => (
          <RadioOption key={option.value} checked={price === option.value} label={option.label} onChange={() => setPrice(option.value)} />
        ))}
      </FilterGroup>
      <FilterGroup legend="Tình trạng">
        {availabilityOptions.map((option) => (
          <RadioOption key={option.value} checked={availability === option.value} label={option.label} onChange={() => setAvailability(option.value)} />
        ))}
      </FilterGroup>
      <Button variant="secondary" className="w-full" disabled={!hasActiveFilters} onClick={clearFilters}>
        Xóa bộ lọc
      </Button>
    </div>
  );

  return (
    <div className="grid gap-8 md:grid-cols-[13rem_minmax(0,1fr)] lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
      <aside className="hidden md:block" aria-label="Bộ lọc sản phẩm">
        <div className="sticky top-28 rounded-card border border-border bg-surface p-5">{controls}</div>
      </aside>

      <div className="min-w-0">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
          <p className="text-sm text-text-secondary" role="status" aria-live="polite">
            <strong className="text-primary">{filteredProducts.length}</strong> sản phẩm
            {query ? <> cho “{query}”</> : null}
          </p>
          <Button id="open-mobile-filters" variant="secondary" size="sm" className="md:hidden" aria-expanded={isFilterOpen} aria-controls="mobile-filters" onClick={() => setIsFilterOpen(true)}>
            Bộ lọc{hasActiveFilters ? " · Đang dùng" : ""}
          </Button>
        </div>

        {filteredProducts.length ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <EmptyState title="Không tìm thấy sản phẩm" description="Hãy thử từ khóa khác hoặc xóa bộ lọc đang dùng." action={hasActiveFilters ? <Button variant="secondary" onClick={clearFilters}>Xóa bộ lọc</Button> : undefined} />
        )}
      </div>

      <div className={cn("fixed inset-0 z-[60] bg-primary/55 transition-opacity md:hidden", isFilterOpen ? "opacity-100" : "pointer-events-none opacity-0")} aria-hidden="true" onClick={() => setIsFilterOpen(false)} />
      <div ref={panelRef} id="mobile-filters" role="dialog" aria-modal="true" aria-label="Bộ lọc sản phẩm" aria-hidden={!isFilterOpen} inert={!isFilterOpen} className={cn("fixed inset-y-0 right-0 z-[70] w-[min(90vw,24rem)] overflow-y-auto bg-background p-5 shadow-2xl transition-transform md:hidden", isFilterOpen ? "translate-x-0" : "pointer-events-none translate-x-full")}>
        <div className="mb-7 flex items-center justify-between border-b border-border pb-4">
          <h2 className="font-heading text-xl font-semibold">Bộ lọc</h2>
          <button ref={closeButtonRef} type="button" className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface" aria-label="Đóng bộ lọc" onClick={() => setIsFilterOpen(false)}>×</button>
        </div>
        {controls}
        <Button className="mt-6 w-full" onClick={() => setIsFilterOpen(false)}>Xem {filteredProducts.length} sản phẩm</Button>
      </div>
    </div>
  );
}

function FilterGroup({ children, legend }: { children: React.ReactNode; legend: string }) {
  return <fieldset className="grid gap-3"><legend className="mb-1 font-heading font-semibold text-primary">{legend}</legend>{children}</fieldset>;
}

function RadioOption({ checked, label, onChange }: { checked: boolean; label: string; onChange: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={checked}
      data-state={checked ? "selected" : "idle"}
      onClick={onChange}
      className={cn(
        "flex min-h-11 w-full cursor-pointer items-center rounded-button border px-4 py-2.5 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        checked
          ? "border-primary bg-primary text-white"
          : "border-border bg-surface text-text-secondary hover:border-primary hover:text-primary",
      )}
    >
      <span>{label}</span>
    </button>
  );
}
