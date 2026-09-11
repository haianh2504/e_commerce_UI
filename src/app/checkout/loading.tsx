import { LoadingState } from "@/components/feedback/LoadingState";
import { Container } from "@/components/layout/Container";
export default function CheckoutLoading() { return <main className="min-h-[75svh] pt-18 lg:pt-20"><Container className="py-12 lg:py-16"><LoadingState title="Đang tải trang thanh toán" description="Đang chuẩn bị biểu mẫu và tóm tắt đơn hàng minh họa." /></Container></main>; }
