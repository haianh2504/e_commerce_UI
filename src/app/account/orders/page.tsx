import type { Metadata } from "next";

import { mockOrders } from "@/data/mock/account";
import { AccountShell } from "@/features/account/components/AccountShell";
import { OrderList } from "@/features/account/components/OrderList";

export const metadata: Metadata = { title: "Đơn hàng" };

export default function OrdersPage() {
  return <AccountShell title="Đơn hàng của bạn" description="Danh sách bên dưới là dữ liệu minh họa cho giao diện lịch sử đơn hàng."><OrderList orders={mockOrders} /></AccountShell>;
}
