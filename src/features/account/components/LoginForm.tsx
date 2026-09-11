"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { controlClasses, Field } from "@/components/ui/Field";
import { cn } from "@/lib/cn";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const preventSubmission = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <form className="grid gap-5" aria-label="Biểu mẫu đăng nhập minh họa" onSubmit={preventSubmission}>
      <Input id="login-email" label="Email" type="email" name="email" autoComplete="email" placeholder="ban@example.com" required />
      <Field id="login-password" label="Mật khẩu" required>
        <div className="relative">
          <input id="login-password" type={showPassword ? "text" : "password"} name="password" autoComplete="current-password" required className={cn(controlClasses, "pr-14")} />
          <button type="button" className="absolute right-1 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-button text-text-secondary hover:bg-surface-subtle hover:text-primary" aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"} aria-pressed={showPassword} onClick={() => setShowPassword((visible) => !visible)}><EyeIcon crossed={showPassword} /></button>
        </div>
      </Field>
      <Button type="submit" size="lg" className="mt-2 w-full" aria-describedby="login-disclosure">Đăng nhập</Button>
      <p id="login-disclosure" className="text-center text-sm text-text-secondary">Biểu mẫu minh họa — thông tin không được gửi hoặc lưu trữ.</p>
    </form>
  );
}

function EyeIcon({ crossed }: { crossed: boolean }) {
  return <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"><path d="M2.5 12s3.4-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.4 5.5-9.5 5.5S2.5 12 2.5 12Z" fill="none" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />{crossed ? <path d="m4 4 16 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /> : null}</svg>;
}
