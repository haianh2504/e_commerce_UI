import type { Metadata } from "next";
import { CatalogPage } from "@/features/catalog/components/CatalogPage";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Khám phá danh mục ghế, bàn học và sofa minh họa của KOMO.",
};

type ProductsPageProps = { searchParams: Promise<{ q?: string | string[] }> };

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const value = (await searchParams).q;
  const query = (Array.isArray(value) ? value[0] : value)?.slice(0, 80).trim();
  return <CatalogPage query={query} />;
}
