import { LoadingState } from "@/components/feedback/LoadingState";
import { Container } from "@/components/layout/Container";

export default function ProductsLoading() {
  return <main className="min-h-[75svh] pt-18 lg:pt-20"><Container className="py-16"><LoadingState title="Đang tải sản phẩm" description="Danh mục đang được chuẩn bị." /></Container></main>;
}
