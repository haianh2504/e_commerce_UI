import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { mockAccount, mockOrders } from "@/data/mock/account";
import { AccountShell } from "@/features/account/components/AccountShell";

export const metadata: Metadata = {
  title: "Tài khoản",
  description: "Xem tổng quan tài khoản minh họa tại KOMO.",
  robots: { index: false, follow: false },
};

export default function AccountPage() {
  return (
    <AccountShell title={`Xin chào, ${mockAccount.name}`} description="Tổng quan tài khoản dùng dữ liệu minh họa, không phản ánh tài khoản thật.">
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <p className="text-sm font-semibold text-text-secondary">Thông tin cá nhân</p>
          <p className="mt-3 font-heading text-xl font-semibold">{mockAccount.name}</p>
          <p className="mt-1 text-sm text-text-secondary">{mockAccount.email}</p>
          <ButtonLink href="/account/profile" variant="secondary" className="mt-6">Xem thông tin</ButtonLink>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-text-secondary">Lịch sử minh họa</p>
          <p className="mt-3 font-heading text-3xl font-semibold">{mockOrders.length}</p>
          <p className="mt-1 text-sm text-text-secondary">đơn hàng mẫu đang hiển thị</p>
          <ButtonLink href="/account/orders" variant="secondary" className="mt-6">Xem đơn hàng</ButtonLink>
        </Card>
      </div>
    </AccountShell>
  );
}
