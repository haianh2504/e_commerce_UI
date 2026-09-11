"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ErrorState } from "@/components/feedback/ErrorState";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";

export default function AccountError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <><StoreHeader /><main id="main-content" tabIndex={-1} className="grid min-h-[75svh] place-items-center px-4 pb-12 pt-30 outline-none lg:pt-32"><ErrorState title="Không thể hiển thị tài khoản" description="Đã có lỗi khi tải giao diện. Bạn có thể thử lại." action={<Button onClick={reset}>Thử lại</Button>} /></main><StoreFooter /></>;
}
