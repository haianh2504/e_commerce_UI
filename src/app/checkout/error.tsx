"use client";
import { ErrorState } from "@/components/feedback/ErrorState";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
export default function CheckoutError({ reset }: { error: Error & { digest?: string }; reset: () => void }) { return <main className="min-h-[75svh] pt-18 lg:pt-20"><Container className="py-12 lg:py-16"><ErrorState title="Không thể hiển thị trang thanh toán" description="Đã xảy ra lỗi khi tải giao diện minh họa. Vui lòng thử lại." action={<Button onClick={reset}>Thử lại</Button>} /></Container></main>; }
