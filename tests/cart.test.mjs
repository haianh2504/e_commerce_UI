import assert from "node:assert/strict";
import test from "node:test";

import { calculateCartItemCount, calculateCartSubtotal, calculateLineTotal } from "../src/features/cart/cartCalculations.ts";

const initialMockCart = [
  { id: "chair", image: "", imageAlt: "", name: "Chair", productHref: "/products/chair", quantity: 1, unitPrice: 3_290_000 },
  { id: "desk", image: "", imageAlt: "", name: "Desk", productHref: "/products/desk", quantity: 2, unitPrice: 2_690_000 },
  { id: "sofa", image: "", imageAlt: "", name: "Sofa", productHref: "/products/sofa", quantity: 1, unitPrice: 7_990_000 },
];

test("cart calculations derive line totals, item count, and subtotal from mock items", () => {
  assert.equal(calculateLineTotal(initialMockCart[1]), initialMockCart[1].unitPrice * 2);
  assert.equal(calculateCartItemCount(initialMockCart), 4);
  assert.equal(calculateCartSubtotal(initialMockCart), 16_660_000);
});

test("empty cart calculations return zero", () => {
  assert.equal(calculateCartItemCount([]), 0);
  assert.equal(calculateCartSubtotal([]), 0);
});
