import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { mockAccount } from "@/data/mock/account";
import { AccountShell } from "@/features/account/components/AccountShell";

export const metadata: Metadata = { title: "Thông tin cá nhân" };

export default function ProfilePage() {
  return (
    <AccountShell title="Thông tin cá nhân" description="Xem bố cục thông tin hồ sơ. Thay đổi không được lưu trong bản trình diễn.">
      <form className="grid gap-5 rounded-card border border-border bg-surface p-5 sm:p-6" aria-label="Thông tin cá nhân minh họa">
        <Input id="profile-name" label="Họ và tên" name="name" autoComplete="name" defaultValue={mockAccount.name} />
        <Input id="profile-email" label="Email" name="email" type="email" autoComplete="email" defaultValue={mockAccount.email} />
        <Input id="profile-phone" label="Số điện thoại" name="phone" type="tel" autoComplete="tel" defaultValue={mockAccount.phone} />
        <div><Button type="button" aria-describedby="profile-note">Lưu thay đổi</Button><p id="profile-note" className="mt-3 text-sm text-text-secondary">Nút chỉ minh họa, dữ liệu sẽ không được lưu.</p></div>
      </form>
    </AccountShell>
  );
}
