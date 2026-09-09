import assert from "node:assert/strict";
import test from "node:test";

import { calculateMockTotal, normalizeQuantity } from "../src/features/product/productInteraction.ts";

test("mock total responds to quantity changes", () => {
  assert.equal(calculateMockTotal(3_290_000, 3), 9_870_000);
});

test("quantity is normalized to a positive whole number", () => {
  assert.equal(normalizeQuantity(2.8), 2);
  assert.equal(normalizeQuantity(0), 1);
  assert.equal(normalizeQuantity(Number.NaN), 1);
});
