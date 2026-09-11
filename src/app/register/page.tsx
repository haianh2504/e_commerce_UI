import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { AuthShell } from "@/features/account/components/AuthShell";

export const metadata: Metadata = { title: "Đăng ký" };

export default function RegisterPage() {
  return (
    <AuthShell title="Tạo tài khoản" description="Điền thông tin để xem bố cục đăng ký minh họa." footer={<>Đã có tài khoản? <Link className="font-semibold text-primary underline underline-offset-4" href="/login">Đăng nhập</Link></>}>
      <form className="grid gap-5" aria-label="Biểu mẫu đăng ký minh họa">
        <Input id="register-name" label="Họ và tên" name="name" autoComplete="name" required />
        <Input id="register-email" label="Email" type="email" name="email" autoComplete="email" placeholder="ban@example.com" required />
        <Input id="register-password" label="Mật khẩu" type="password" name="password" autoComplete="new-password" helperText="Yêu cầu mật khẩu chính thức sẽ do hệ thống xác thực quy định." required />
        <Button type="button" size="lg" className="w-full" aria-describedby="register-note">Tạo tài khoản</Button>
        <p id="register-note" className="text-center text-sm text-text-secondary">Không có tài khoản hoặc dữ liệu nào được tạo.</p>
      </form>
    </AuthShell>
  );
}
