"use client";

import { ErrorState } from "@/components/feedback/ErrorState";
import { Container } from "@/components/layout/Container";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { Button } from "@/components/ui/Button";

export default function ProductsError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <><StoreHeader /><main id="main-content" tabIndex={-1} className="min-h-[75svh] pt-18 outline-none lg:pt-20"><Container className="py-16"><ErrorState title="Không thể hiển thị sản phẩm" description="Vui lòng thử tải lại danh mục." action={<Button onClick={reset}>Thử lại</Button>} /></Container></main><StoreFooter /></>;
}
