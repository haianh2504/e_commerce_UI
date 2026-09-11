import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/Container";

type AuthShellProps = {
  children: ReactNode;
  description: string;
  footer: ReactNode;
  title: string;
};

export function AuthShell({ children, description, footer, title }: AuthShellProps) {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-svh bg-background px-4 py-8 outline-none sm:px-6 sm:py-12">
      <Container size="content" className="flex min-h-[calc(100svh-6rem)] items-center justify-center px-0">
        <div className="w-full max-w-md rounded-card border border-border bg-surface p-5 sm:p-8">
          <Link href="/" className="inline-block rounded-sm font-heading text-2xl font-semibold tracking-[-0.05em] focus-visible:ring-2 focus-visible:ring-primary">
            KOMO
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.12em] text-text-secondary">Khu vực tài khoản</p>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{title}</h1>
          <p className="mt-3 text-text-secondary">{description}</p>
          <div className="mt-8">{children}</div>
          <div className="mt-7 border-t border-border pt-6 text-center text-sm text-text-secondary">{footer}</div>
          <p className="mt-5 text-center text-xs text-text-secondary">Biểu mẫu chỉ minh họa giao diện, không gửi hoặc lưu thông tin.</p>
        </div>
      </Container>
    </main>
  );
}
