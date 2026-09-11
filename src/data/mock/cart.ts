import { products } from "./products";

export type MockCartItem = {
  id: string;
  image: string;
  imageAlt: string;
  name: string;
  productHref: string;
  quantity: number;
  unitPrice: number;
};

const [loungeChair, studyDesk, sofa] = products;

export const initialMockCart: MockCartItem[] = [
  {
    id: loungeChair.id,
    image: loungeChair.image,
    imageAlt: loungeChair.imageAlt,
    name: loungeChair.name,
    productHref: loungeChair.href,
    quantity: 1,
    unitPrice: loungeChair.price,
  },
  {
    id: studyDesk.id,
    image: studyDesk.image,
    imageAlt: studyDesk.imageAlt,
    name: studyDesk.name,
    productHref: studyDesk.href,
    quantity: 2,
    unitPrice: studyDesk.price,
  },
  {
    id: sofa.id,
    image: sofa.image,
    imageAlt: sofa.imageAlt,
    name: sofa.name,
    productHref: sofa.href,
    quantity: 1,
    unitPrice: sofa.price,
  },
];
