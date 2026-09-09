export function calculateMockTotal(unitPrice: number, quantity: number) {
  return unitPrice * quantity;
}

export function normalizeQuantity(value: number) {
  return Number.isFinite(value) ? Math.max(1, Math.floor(value)) : 1;
}
