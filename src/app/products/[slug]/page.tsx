import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { products } from "@/data/mock/products";
import { ProductGallery } from "@/features/product/components/ProductGallery";
import { PurchasePanel } from "@/features/product/components/PurchasePanel";

type ProductPageProps = { params: Promise<{ slug: string }> };

function findProduct(slug: string) {
  return products.find((product) => product.id === slug);
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = findProduct((await params).slug);
  return product ? { title: product.name, description: product.description } : {};
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = findProduct((await params).slug);
  if (!product) notFound();

  return (
    <>
      <StoreHeader />
      <main className="min-h-[75svh] pt-18 lg:pt-20">
        <Container className="py-8 sm:py-10 lg:py-14">
          <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Sản phẩm", href: "/products" }, { label: product.category, href: `/categories/${product.category === "Ghế" ? "ghe" : product.category === "Bàn học" ? "ban-hoc" : "sofa"}` }, { label: product.name }]} />

          <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.75fr)] lg:items-start lg:gap-x-12 lg:gap-y-16 xl:gap-x-16">
            <div className="lg:col-start-1 lg:row-start-1">
              <ProductGallery images={product.gallery} productName={product.name} />
            </div>
            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-full">
              <PurchasePanel available={product.available} productName={product.name} unitPrice={product.price} />
            </div>
            <div className="grid gap-10 border-t border-border pt-10 lg:col-start-1 lg:row-start-2 lg:pt-14">
              <section aria-labelledby="product-description">
              <h2 id="product-description" className="font-heading text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Mô tả sản phẩm</h2>
              <p className="mt-5 max-w-2xl text-text-secondary">{product.description}</p>
              </section>
              <section aria-labelledby="product-specifications">
                <h2 id="product-specifications" className="font-heading text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Thông tin chi tiết</h2>
                <dl className="mt-5 divide-y divide-border border-y border-border">
                  {product.specifications.map((specification) => (
                    <div key={specification.label} className="grid grid-cols-[minmax(8rem,0.8fr)_1fr] gap-4 py-4 text-sm sm:text-base">
                      <dt className="text-text-secondary">{specification.label}</dt>
                      <dd className="font-semibold text-primary">{specification.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <StoreFooter />
    </>
  );
}
