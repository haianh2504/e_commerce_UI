export type MockCheckoutOption = { description: string; id: string; label: string };

export const mockShippingMethods: MockCheckoutOption[] = [{
  id: "standard",
  label: "Giao hàng tiêu chuẩn (minh họa)",
  description: "Thời gian và phí giao hàng sẽ do hệ thống chính thức xác nhận.",
}];

export const mockPaymentMethods: MockCheckoutOption[] = [{
  id: "cod",
  label: "Thanh toán khi nhận hàng (minh họa)",
  description: "Lựa chọn này chỉ mô phỏng giao diện và không tạo giao dịch.",
}];
