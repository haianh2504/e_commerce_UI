export type MockReview = {
  id: string;
  name: string;
  rating: 5;
  text: string;
  relativeDate: string;
  image: string;
  imageAlt: string;
};

export const mockReviews: MockReview[] = [
  { id: "review-1", name: "Lan Anh", rating: 5, text: "Sản phẩm đẹp, chắc chắn và phù hợp với góc học tập.", relativeDate: "2 tuần trước", image: "/images/komo/category-desk.jpg", imageAlt: "Bàn học gỗ trong không gian sáng" },
  { id: "review-2", name: "Minh Khoa", rating: 5, text: "Thiết kế tối giản và dễ kết hợp với không gian trong nhà.", relativeDate: "3 tuần trước", image: "/images/komo/category-chair.jpg", imageAlt: "Ghế nội thất trong không gian sống" },
  { id: "review-3", name: "Thu Hà", rating: 5, text: "Bố cục thông tin rõ ràng, giúp mình dễ tham khảo sản phẩm.", relativeDate: "1 tháng trước", image: "/images/komo/category-sofa.jpg", imageAlt: "Sofa trong phòng khách hiện đại" },
  { id: "review-4", name: "Hoàng Nam", rating: 5, text: "Các lựa chọn nội thất được trình bày gọn gàng và dễ so sánh.", relativeDate: "1 tháng trước", image: "/images/komo/product-study-desk.jpg", imageAlt: "Bàn học được trưng bày trong phòng" },
  { id: "review-5", name: "Ngọc Mai", rating: 5, text: "Mình dễ dàng tìm được mẫu phù hợp với căn phòng nhỏ.", relativeDate: "2 tháng trước", image: "/images/komo/product-sofa.jpg", imageAlt: "Sofa nhỏ trong không gian nội thất" },
];
