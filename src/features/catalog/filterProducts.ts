import type { MockProduct, ProductCategory } from "@/data/mock/products";

export type AvailabilityFilter = "all" | "available" | "unavailable";
export type PriceFilter = "all" | "under-3m" | "3m-6m" | "over-6m";

export type CatalogFilters = {
  availability: AvailabilityFilter;
  category: ProductCategory | "all";
  price: PriceFilter;
  query: string;
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .toLocaleLowerCase("vi-VN")
    .trim();
}

export function filterProducts(
  items: MockProduct[],
  filters: CatalogFilters,
) {
  const query = normalize(filters.query);

  return items.filter((product) => {
    const matchesQuery =
      !query || normalize(`${product.name} ${product.category}`).includes(query);
    const matchesCategory =
      filters.category === "all" || product.category === filters.category;
    const matchesAvailability =
      filters.availability === "all" ||
      (filters.availability === "available" && product.available) ||
      (filters.availability === "unavailable" && !product.available);
    const matchesPrice =
      filters.price === "all" ||
      (filters.price === "under-3m" && product.price < 3_000_000) ||
      (filters.price === "3m-6m" &&
        product.price >= 3_000_000 &&
        product.price <= 6_000_000) ||
      (filters.price === "over-6m" && product.price > 6_000_000);

    return matchesQuery && matchesCategory && matchesAvailability && matchesPrice;
  });
}
