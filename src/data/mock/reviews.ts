export type MockReview = {
  id: string;
  name: string;
  rating: 5;
  text: string;
};

export const mockReviews: MockReview[] = [
  { id: "review-1", name: "Lan Anh", rating: 5, text: "Sản phẩm đẹp, chắc chắn và phù hợp với góc học tập." },
  { id: "review-2", name: "Minh Khoa", rating: 5, text: "Thiết kế tối giản và dễ kết hợp với không gian trong nhà." },
  { id: "review-3", name: "Thu Hà", rating: 5, text: "Bố cục thông tin rõ ràng, giúp mình dễ tham khảo sản phẩm." },
  { id: "review-4", name: "Hoàng Nam", rating: 5, text: "Các lựa chọn nội thất được trình bày gọn gàng và dễ so sánh." },
  { id: "review-5", name: "Ngọc Mai", rating: 5, text: "Mình dễ dàng tìm được mẫu phù hợp với căn phòng nhỏ." },
];
