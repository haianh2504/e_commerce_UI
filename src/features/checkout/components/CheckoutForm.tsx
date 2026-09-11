"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { mockPaymentMethods, mockShippingMethods } from "@/data/mock/checkout";
import { CheckoutOption } from "./CheckoutOption";

export function CheckoutForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    window.setTimeout(() => router.push("/checkout/confirmation"), 650);
  }
  return (
    <form onSubmit={handleSubmit} className="grid gap-6" aria-label="Thông tin thanh toán minh họa">
      <Card><fieldset><legend className="font-heading text-2xl font-semibold tracking-[-0.03em]">1. Thông tin liên hệ</legend><div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Input id="full-name" name="fullName" label="Họ và tên" autoComplete="name" required />
        <Input id="phone" name="phone" label="Số điện thoại" type="tel" inputMode="tel" autoComplete="tel" required />
        <div className="sm:col-span-2"><Input id="email" name="email" label="Email" type="email" autoComplete="email" helperText="Dùng để minh họa thông tin nhận xác nhận." required /></div>
      </div></fieldset></Card>
      <Card><fieldset><legend className="font-heading text-2xl font-semibold tracking-[-0.03em]">2. Địa chỉ giao hàng</legend><div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2"><Input id="address" name="address" label="Địa chỉ" autoComplete="street-address" required /></div>
        <Input id="ward" name="ward" label="Phường / xã" autoComplete="address-level3" required />
        <Input id="district" name="district" label="Quận / huyện" autoComplete="address-level2" required />
        <Select id="city" name="city" label="Tỉnh / thành phố" autoComplete="address-level1" required><option value="">Chọn tỉnh / thành phố</option><option value="ho-chi-minh">TP. Hồ Chí Minh</option><option value="ha-noi">Hà Nội</option><option value="da-nang">Đà Nẵng</option><option value="other">Tỉnh / thành phố khác</option></Select>
        <div className="sm:col-span-2"><Textarea id="delivery-note" name="deliveryNote" label="Ghi chú giao hàng (không bắt buộc)" autoComplete="off" /></div>
      </div></fieldset></Card>
      <Card><fieldset><legend className="font-heading text-2xl font-semibold tracking-[-0.03em]">3. Phương thức giao hàng</legend><div className="mt-6 grid gap-3">{mockShippingMethods.map((option, index) => <CheckoutOption key={option.id} name="shippingMethod" option={option} defaultChecked={index === 0} />)}</div></fieldset></Card>
      <Card><fieldset><legend className="font-heading text-2xl font-semibold tracking-[-0.03em]">4. Phương thức thanh toán</legend><div className="mt-6 grid gap-3">{mockPaymentMethods.map((option, index) => <CheckoutOption key={option.id} name="paymentMethod" option={option} defaultChecked={index === 0} />)}</div></fieldset></Card>
      <div className="rounded-card border border-warning/25 bg-warning-subtle p-5 text-sm leading-6 text-warning"><strong className="block">Đây là quy trình minh họa</strong>Thao tác xác nhận chỉ mở trang kết quả mẫu; không lưu thông tin, tạo đơn hàng hay xử lý thanh toán.</div>
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between"><ButtonLink href="/cart" variant="secondary">Quay lại giỏ hàng</ButtonLink><Button type="submit" size="lg" isLoading={isSubmitting} loadingLabel="Đang mở xác nhận">Xác nhận đơn hàng minh họa</Button></div>
    </form>
  );
}
