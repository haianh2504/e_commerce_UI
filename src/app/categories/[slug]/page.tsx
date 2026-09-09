import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ProductCategory } from "@/data/mock/products";
import { CatalogPage } from "@/features/catalog/components/CatalogPage";

const categories: Record<string, ProductCategory> = { ghe: "Ghế", "ban-hoc": "Bàn học", sofa: "Sofa" };
type CategoryPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories[(await params).slug];
  return category ? { title: category, description: `Khám phá danh mục ${category.toLocaleLowerCase("vi-VN")} minh họa của KOMO.` } : {};
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = categories[(await params).slug];
  if (!category) notFound();
  return <CatalogPage category={category} />;
}
