"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ErrorState } from "@/components/feedback/ErrorState";

export default function AccountError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <main className="grid min-h-svh place-items-center p-4"><ErrorState title="Không thể hiển thị tài khoản" description="Đã có lỗi khi tải giao diện. Bạn có thể thử lại." action={<Button onClick={reset}>Thử lại</Button>} /></main>;
}
