import { Container } from "@/components/layout/Container";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { LoadingState } from "@/components/feedback/LoadingState";

export default function AccountLoading() {
  return <><StoreHeader /><main id="main-content" tabIndex={-1} className="min-h-[75svh] pt-18 outline-none lg:pt-20"><Container className="py-16"><LoadingState title="Đang tải tài khoản" description="Đang chuẩn bị dữ liệu giao diện minh họa." /></Container></main><StoreFooter /></>;
}
