import assert from "node:assert/strict";
import test from "node:test";

import { mockReviews } from "../src/data/mock/reviews.ts";

test("homepage review carousel has enough structured mock entries to scroll on desktop", () => {
  assert.ok(mockReviews.length > 3);
  assert.equal(new Set(mockReviews.map((review) => review.id)).size, mockReviews.length);
});

test("every homepage review is explicitly usable as mock five-star content", () => {
  for (const review of mockReviews) {
    assert.equal(review.rating, 5);
    assert.ok(review.name.trim().length > 0);
    assert.ok(review.text.trim().length > 0);
  }
});
