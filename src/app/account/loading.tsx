import { Container } from "@/components/layout/Container";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { LoadingState } from "@/components/feedback/LoadingState";

export default function AccountLoading() {
  return <><StoreHeader /><main className="min-h-[75svh] pt-18 lg:pt-20"><Container className="py-16"><LoadingState title="Đang tải tài khoản" description="Đang chuẩn bị dữ liệu giao diện minh họa." /></Container></main></>;
}
