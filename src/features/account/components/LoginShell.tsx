import Link from "next/link";
import type { ReactNode } from "react";

export function LoginShell({ children }: { children: ReactNode }) {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-svh bg-background p-3 outline-none sm:p-5 lg:p-6">
      <div className="relative mx-auto grid min-h-[calc(100svh-1.5rem)] max-w-[100rem] overflow-hidden rounded-card border border-border bg-surface lg:min-h-[calc(100svh-3rem)] lg:grid-cols-[minmax(25rem,43%)_minmax(0,57%)]">
        <Link href="/" aria-label="KOMO — Trang chủ" className="absolute left-6 top-6 z-10 rounded-sm font-heading text-2xl font-semibold tracking-[-0.05em] focus-visible:ring-2 focus-visible:ring-primary sm:left-8 sm:top-8">KOMO</Link>
        <Link href="/" aria-label="Đóng và về trang chủ" className="absolute right-6 top-6 z-10 inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-2xl leading-none hover:bg-surface-subtle focus-visible:ring-2 focus-visible:ring-primary sm:right-8 sm:top-8">×</Link>

        <section className="flex min-h-[calc(100svh-3rem)] flex-col px-5 pb-8 pt-24 sm:px-10 sm:pb-10 sm:pt-28 lg:min-h-0 lg:px-12 xl:px-16">
          <div className="my-auto w-full max-w-lg self-center">{children}</div>
          <p className="mt-12 text-sm text-text-secondary">Chưa có tài khoản? <Link href="/register" className="font-semibold text-primary underline underline-offset-4">Đăng ký</Link></p>
        </section>

        <aside aria-hidden="true" className="hidden min-h-full items-center justify-center border-l border-border bg-surface-subtle p-10 lg:flex">
          <div className="max-w-md text-center">
            <p className="font-heading text-3xl font-semibold tracking-[-0.04em]">Không gian dành cho bạn</p>
            <p className="mt-4 leading-7 text-text-secondary">Khu vực hình ảnh được giữ tối giản cho đến khi có tài sản trực quan được phê duyệt.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
