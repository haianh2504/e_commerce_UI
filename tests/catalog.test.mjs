import assert from "node:assert/strict";
import test from "node:test";

import { featuredCategories } from "../src/data/mock/categories.ts";
import { featuredProducts } from "../src/data/mock/products.ts";
import { products } from "../src/data/mock/products.ts";
import { filterProducts } from "../src/features/catalog/filterProducts.ts";
import { formatVnd } from "../src/lib/formatCurrency.ts";

test("Milestone 2 exposes exactly the approved featured categories", () => {
  assert.deepEqual(
    featuredCategories.map(({ name }) => name),
    ["Ghế", "Bàn học", "Sofa"],
  );
  assert.deepEqual(
    featuredCategories.map(({ href }) => href),
    ["/categories/ghe", "/categories/ban-hoc", "/categories/sofa"],
  );
  assert.ok(featuredCategories.every(({ imageAlt }) => imageAlt.length > 0));
});

test("homepage includes four complete fictional featured products", () => {
  assert.equal(featuredProducts.length, 4);

  for (const product of featuredProducts) {
    assert.ok(product.name.length > 0);
    assert.ok(product.imageAlt.length > 0);
    assert.ok(product.price > 0);
    assert.equal(product.href, `/products/${product.id}`);
  }
});

test("every mock product links to a complete product detail route", () => {
  for (const product of products) {
    assert.equal(product.href, `/products/${product.id}`);
    assert.ok(product.description.length > 0);
    assert.ok(product.gallery.length > 0);
    assert.ok(product.specifications.length > 0);
  }
});

test("catalog filters combine search, category, price, and availability", () => {
  const result = filterProducts(products, {
    query: "ghe",
    category: "Ghế",
    price: "under-3m",
    availability: "available",
  });

  assert.ok(result.length > 0);
  assert.ok(result.every((product) => product.category === "Ghế"));
  assert.ok(result.every((product) => product.price < 3_000_000));
  assert.ok(result.every((product) => product.available));
});

test("catalog search is insensitive to Vietnamese diacritics", () => {
  const result = filterProducts(products, {
    query: "moc mien",
    category: "all",
    price: "all",
    availability: "all",
  });

  assert.equal(result[0]?.name, "Bàn học Mộc Miên");
});

test("VND prices use Vietnamese grouping and the đồng symbol", () => {
  const formatted = formatVnd(3_290_000).replace(/\s/g, " ");

  assert.match(formatted, /3\.290\.000/);
  assert.match(formatted, /₫/);
});
