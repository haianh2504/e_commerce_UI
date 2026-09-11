import { LoadingState } from "@/components/feedback/LoadingState";
import { Container } from "@/components/layout/Container";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";

export default function ProductsLoading() {
  return <><StoreHeader /><main id="main-content" tabIndex={-1} className="min-h-[75svh] pt-18 outline-none lg:pt-20"><Container className="py-16"><LoadingState title="Đang tải sản phẩm" description="Danh mục đang được chuẩn bị." /></Container></main><StoreFooter /></>;
}
