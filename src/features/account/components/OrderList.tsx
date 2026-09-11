import Link from "next/link";

import { EmptyState } from "@/components/feedback/EmptyState";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formatVnd } from "@/lib/formatCurrency";
import { getMockOrderTotal, type MockOrder } from "@/data/mock/account";

export function OrderList({ orders }: { orders: MockOrder[] }) {
  if (orders.length === 0) {
    return <EmptyState title="Chưa có đơn hàng" description="Các đơn hàng sẽ xuất hiện tại đây khi dữ liệu tài khoản được kết nối." action={<ButtonLink href="/products">Khám phá sản phẩm</ButtonLink>} />;
  }

  return (
    <div className="grid gap-4">
      {orders.map((order) => (
        <Card key={order.id}>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-heading text-xl font-semibold">{order.id}</h2>
                <Badge>{order.status}</Badge>
              </div>
              <p className="mt-2 text-sm text-text-secondary"><time dateTime={order.date}>{order.displayDate}</time> · {order.items.length} sản phẩm</p>
            </div>
            <p className="text-lg font-semibold">{formatVnd(getMockOrderTotal(order))}</p>
          </div>
          <div className="mt-5 border-t border-border pt-5">
            <Link href={`/account/orders/${order.id}`} className="inline-flex min-h-11 items-center rounded-sm font-semibold underline decoration-border underline-offset-4 hover:decoration-primary focus-visible:ring-2 focus-visible:ring-primary">
              Xem chi tiết đơn minh họa
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
