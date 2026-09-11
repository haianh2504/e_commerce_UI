import type { Metadata } from "next";

import { LoginForm } from "@/features/account/components/LoginForm";
import { LoginShell } from "@/features/account/components/LoginShell";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Xem giao diện đăng nhập minh họa dành cho tài khoản KOMO.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <LoginShell>
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-text-secondary">Khu vực tài khoản</p>
      <h1 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Đăng nhập</h1>
      <p className="mt-3 text-text-secondary">Đăng nhập để xem thông tin tài khoản và đơn hàng của bạn.</p>
      <div className="mt-8"><LoginForm /></div>
    </LoginShell>
  );
}
