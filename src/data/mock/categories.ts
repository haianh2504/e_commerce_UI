export type MockCategory = {
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  name: string;
};

export const featuredCategories: MockCategory[] = [
  {
    name: "Ghế",
    description: "Tựa lưng thoải mái cho góc đọc sách và làm việc mỗi ngày.",
    href: "/categories/ghe",
    image: "/images/komo/category-chair.jpg",
    imageAlt: "Ghế bành bọc vải xanh ô-liu trong góc phòng nhiều ánh sáng",
  },
  {
    name: "Bàn học",
    description: "Không gian gọn gàng để tập trung học tập và sáng tạo.",
    href: "/categories/ban-hoc",
    image: "/images/komo/category-desk.jpg",
    imageAlt: "Bàn học gỗ sồi nhỏ gọn cạnh cửa sổ",
  },
  {
    name: "Sofa",
    description: "Điểm tựa êm ái, hài hòa cho những khoảnh khắc ở nhà.",
    href: "/categories/sofa",
    image: "/images/komo/category-sofa.jpg",
    imageAlt: "Sofa màu kem trong phòng khách ấm áp",
  },
];
