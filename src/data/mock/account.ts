import { products } from "./products";

export const mockAccount = {
  name: "Nguyễn Minh An",
  email: "minh.an@example.com",
  phone: "0900 000 000",
} as const;

export type MockOrderItem = {
  id: string;
  image: string;
  imageAlt: string;
  name: string;
  productHref: string;
  quantity: number;
  unitPrice: number;
};

export type MockOrder = {
  date: string;
  displayDate: string;
  id: string;
  items: MockOrderItem[];
  status: "Dữ liệu minh họa";
};

const [chair, desk, sofa] = products;

export const mockOrders: MockOrder[] = [
  {
    id: "KOMO-MH-001",
    date: "2026-08-28",
    displayDate: "28 tháng 8, 2026",
    status: "Dữ liệu minh họa",
    items: [
      {
        id: chair.id,
        image: chair.image,
        imageAlt: chair.imageAlt,
        name: chair.name,
        productHref: chair.href,
        quantity: 1,
        unitPrice: chair.price,
      },
      {
        id: desk.id,
        image: desk.image,
        imageAlt: desk.imageAlt,
        name: desk.name,
        productHref: desk.href,
        quantity: 1,
        unitPrice: desk.price,
      },
    ],
  },
  {
    id: "KOMO-MH-002",
    date: "2026-07-12",
    displayDate: "12 tháng 7, 2026",
    status: "Dữ liệu minh họa",
    items: [
      {
        id: sofa.id,
        image: sofa.image,
        imageAlt: sofa.imageAlt,
        name: sofa.name,
        productHref: sofa.href,
        quantity: 1,
        unitPrice: sofa.price,
      },
    ],
  },
];

export function getMockOrderTotal(order: MockOrder) {
  return order.items.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0,
  );
}
