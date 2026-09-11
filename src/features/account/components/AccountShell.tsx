import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/Container";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { StoreHeader } from "@/components/layout/StoreHeader";

const accountNavigation = [
  { href: "/account", label: "Tổng quan" },
  { href: "/account/profile", label: "Thông tin cá nhân" },
  { href: "/account/orders", label: "Đơn hàng" },
] as const;

type AccountShellProps = { children: ReactNode; description: string; title: string };

export function AccountShell({ children, description, title }: AccountShellProps) {
  return (
    <>
      <StoreHeader />
      <main id="main-content" tabIndex={-1} className="min-h-[75svh] pt-18 outline-none lg:pt-20">
        <Container className="py-10 sm:py-14 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-text-secondary">Tài khoản minh họa</p>
            <h1 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">{title}</h1>
            <p className="mt-4 text-text-secondary">{description}</p>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start">
            <nav aria-label="Điều hướng tài khoản" className="rounded-card border border-border bg-surface p-2">
              <ul className="grid grid-cols-1 gap-1 sm:grid-cols-3 lg:grid-cols-1">
                {accountNavigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="flex min-h-11 items-center rounded-button px-4 py-2 text-sm font-semibold hover:bg-surface-subtle focus-visible:ring-2 focus-visible:ring-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>{children}</div>
          </div>
        </Container>
      </main>
      <StoreFooter />
    </>
  );
}
