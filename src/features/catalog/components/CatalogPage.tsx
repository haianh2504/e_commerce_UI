import { Container } from "@/components/layout/Container";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { ProductCategory } from "@/data/mock/products";

import { Catalog } from "./Catalog";

type CatalogPageProps = { category?: ProductCategory; query?: string };

export function CatalogPage({ category, query }: CatalogPageProps) {
  return (
    <>
      <StoreHeader />
      <main id="main-content" tabIndex={-1} className="min-h-[75svh] pt-18 outline-none lg:pt-20">
        <Container className="py-10 sm:py-12 lg:py-16">
          <Breadcrumb items={category ? [{ label: "Trang chủ", href: "/" }, { label: "Sản phẩm", href: "/products" }, { label: category }] : [{ label: "Trang chủ", href: "/" }, { label: "Sản phẩm" }]} />
          <header className="mb-9 mt-6 sm:mb-12">
            <h1 className="font-heading text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl">{category ?? "Tất cả sản phẩm"}</h1>
          </header>
          <Catalog key={`${category ?? "all"}-${query ?? ""}`} initialCategory={category} initialQuery={query} />
        </Container>
      </main>
      <StoreFooter />
    </>
  );
}
