import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { getMockOrderTotal, mockOrders } from "@/data/mock/account";
import { AccountShell } from "@/features/account/components/AccountShell";
import { formatVnd } from "@/lib/formatCurrency";

export function generateStaticParams() {
  return mockOrders.map((order) => ({ id: order.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return {
    title: mockOrders.some((order) => order.id === id) ? `Đơn ${id}` : "Không tìm thấy đơn hàng",
    description: "Xem chi tiết đơn hàng minh họa trong giao diện tài khoản KOMO.",
    robots: { index: false, follow: false },
  };
}

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = mockOrders.find((candidate) => candidate.id === id);
  if (!order) notFound();

  return (
    <AccountShell title={`Đơn ${order.id}`} description="Chi tiết này hoàn toàn là dữ liệu minh họa và không xác nhận một giao dịch thật.">
      <Breadcrumb items={[{ label: "Tài khoản", href: "/account" }, { label: "Đơn hàng", href: "/account/orders" }, { label: order.id }]} />
      <Card className="mt-5">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
          <div><p className="text-sm text-text-secondary">Ngày đặt minh họa</p><p className="mt-1 font-semibold"><time dateTime={order.date}>{order.displayDate}</time></p></div>
          <Badge>{order.status}</Badge>
        </div>
        <ul className="divide-y divide-border" aria-label="Sản phẩm trong đơn minh họa">
          {order.items.map((item) => (
            <li key={item.id} className="grid grid-cols-[5rem_1fr] gap-4 py-5 sm:grid-cols-[6rem_1fr_auto] sm:items-center">
              <Image src={item.image} alt={item.imageAlt} width={96} height={120} className="aspect-4/5 w-full rounded-button object-cover" />
              <div><Link href={item.productHref} className="font-semibold hover:underline">{item.name}</Link><p className="mt-1 text-sm text-text-secondary">Số lượng: {item.quantity} · {formatVnd(item.unitPrice)} / sản phẩm</p></div>
              <p className="col-start-2 font-semibold sm:col-auto">{formatVnd(item.unitPrice * item.quantity)}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-border pt-5"><span className="font-semibold">Tổng minh họa</span><strong className="text-xl">{formatVnd(getMockOrderTotal(order))}</strong></div>
      </Card>
    </AccountShell>
  );
}
