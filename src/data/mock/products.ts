export const productCategories = ["Ghế", "Bàn học", "Sofa"] as const;
export type ProductCategory = (typeof productCategories)[number];

export type MockProduct = {
  available: boolean;
  category: ProductCategory;
  description: string;
  gallery: ProductImage[];
  href: string;
  id: string;
  image: string;
  imageAlt: string;
  name: string;
  price: number;
  specifications: ProductSpecification[];
};

export type ProductImage = {
  alt: string;
  src: string;
};

export type ProductSpecification = {
  label: string;
  value: string;
};

const categoryDetails: Record<ProductCategory, Pick<MockProduct, "description" | "gallery" | "specifications">> = {
  "Ghế": {
    description: "Thiết kế gọn gàng với đường nét mềm mại, phù hợp cho góc đọc sách, bàn ăn hoặc không gian nghỉ ngơi hằng ngày. Nội dung và thông số dưới đây là dữ liệu minh họa cho giao diện.",
    gallery: [
      { src: "/images/komo/product-lounge-chair.jpg", alt: "Góc chính của ghế trong không gian sáng" },
      { src: "/images/komo/product-oak-chair.jpg", alt: "Chi tiết khung gỗ và đệm ngồi của ghế" },
      { src: "/images/komo/category-chair.jpg", alt: "Ghế được bố trí trong góc phòng khách" },
    ],
    specifications: [
      { label: "Chất liệu minh họa", value: "Gỗ và vải bọc" },
      { label: "Không gian gợi ý", value: "Phòng khách, góc đọc sách" },
      { label: "Bảo quản", value: "Lau bằng khăn mềm, khô" },
    ],
  },
  "Bàn học": {
    description: "Mẫu bàn có hình khối thanh thoát và bề mặt rộng rãi cho góc học tập hoặc làm việc tại nhà. Nội dung và thông số dưới đây là dữ liệu minh họa cho giao diện.",
    gallery: [
      { src: "/images/komo/product-study-desk.jpg", alt: "Góc chính của bàn học gỗ sáng màu" },
      { src: "/images/komo/category-desk.jpg", alt: "Bàn học trong không gian làm việc nhiều ánh sáng" },
    ],
    specifications: [
      { label: "Chất liệu minh họa", value: "Gỗ hoàn thiện màu tự nhiên" },
      { label: "Không gian gợi ý", value: "Góc học tập, phòng làm việc" },
      { label: "Bảo quản", value: "Tránh độ ẩm cao và nhiệt trực tiếp" },
    ],
  },
  "Sofa": {
    description: "Kiểu dáng êm ái, cân đối cho không gian sinh hoạt nhỏ và hiện đại. Nội dung và thông số dưới đây là dữ liệu minh họa cho giao diện.",
    gallery: [
      { src: "/images/komo/product-sofa.jpg", alt: "Góc chính của sofa hai chỗ màu kem" },
      { src: "/images/komo/category-sofa.jpg", alt: "Sofa trong phòng khách sáng và trung tính" },
    ],
    specifications: [
      { label: "Chất liệu minh họa", value: "Vải bọc và chân gỗ" },
      { label: "Không gian gợi ý", value: "Phòng khách, căn hộ nhỏ" },
      { label: "Bảo quản", value: "Hút bụi nhẹ và vệ sinh tại chỗ" },
    ],
  },
};

function product(product: Omit<MockProduct, "description" | "gallery" | "href" | "specifications">): MockProduct {
  const details = categoryDetails[product.category];
  return {
    ...product,
    ...details,
    gallery: [
      { src: product.image, alt: product.imageAlt },
      ...details.gallery.filter((image) => image.src !== product.image),
    ],
    href: `/products/${product.id}`,
  };
}

export const products: MockProduct[] = [
  product({ id: "ghe-an-nhien", name: "Ghế thư giãn An Nhiên", category: "Ghế", price: 3290000, available: true, image: "/images/komo/product-lounge-chair.jpg", imageAlt: "Ghế thư giãn bọc vải xanh ô-liu với khung gỗ sồi" }),
  product({ id: "ban-moc-mien", name: "Bàn học Mộc Miên", category: "Bàn học", price: 2690000, available: true, image: "/images/komo/product-study-desk.jpg", imageAlt: "Bàn học gỗ sồi sáng màu có một ngăn kéo" }),
  product({ id: "sofa-goc-nho", name: "Sofa Góc Nhỏ", category: "Sofa", price: 7990000, available: true, image: "/images/komo/product-sofa.jpg", imageAlt: "Sofa hai chỗ màu kem với chân gỗ thấp" }),
  product({ id: "ghe-ban-mai", name: "Ghế gỗ Ban Mai", category: "Ghế", price: 1890000, available: true, image: "/images/komo/product-oak-chair.jpg", imageAlt: "Ghế gỗ sồi có lưng cong và đệm ngồi màu cát" }),
  product({ id: "ghe-may", name: "Ghế tựa Mây", category: "Ghế", price: 2490000, available: false, image: "/images/komo/category-chair.jpg", imageAlt: "Ghế bành xanh ô-liu đặt cạnh cửa sổ" }),
  product({ id: "ghe-nang", name: "Ghế đọc sách Nắng", category: "Ghế", price: 4190000, available: true, image: "/images/komo/product-lounge-chair.jpg", imageAlt: "Ghế đọc sách bọc vải xanh với tay vịn bằng gỗ" }),
  product({ id: "ban-trong-tre", name: "Bàn học Trong Trẻo", category: "Bàn học", price: 3590000, available: true, image: "/images/komo/category-desk.jpg", imageAlt: "Bàn học gỗ sáng màu trong căn phòng thoáng" }),
  product({ id: "ban-hien", name: "Bàn học Hiên", category: "Bàn học", price: 4890000, available: false, image: "/images/komo/product-study-desk.jpg", imageAlt: "Bàn học gỗ nhỏ gọn với ngăn kéo" }),
  product({ id: "sofa-som-mai", name: "Sofa Sớm Mai", category: "Sofa", price: 9490000, available: true, image: "/images/komo/category-sofa.jpg", imageAlt: "Sofa màu kem trong phòng khách sáng" }),
  product({ id: "sofa-em", name: "Sofa Êm", category: "Sofa", price: 6290000, available: false, image: "/images/komo/product-sofa.jpg", imageAlt: "Sofa hai chỗ màu kem trên thảm trung tính" }),
  product({ id: "ban-hoc-lam", name: "Bàn học Lam", category: "Bàn học", price: 2190000, available: true, image: "/images/komo/category-desk.jpg", imageAlt: "Bàn học gỗ sáng màu cạnh cửa sổ" }),
  product({ id: "ghe-moc", name: "Ghế Mộc", category: "Ghế", price: 1590000, available: true, image: "/images/komo/product-oak-chair.jpg", imageAlt: "Ghế gỗ sồi có đệm ngồi màu cát" }),
];

export const featuredProducts = products.slice(0, 4);
