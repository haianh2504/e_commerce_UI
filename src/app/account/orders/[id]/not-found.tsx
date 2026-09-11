import { ButtonLink } from "@/components/ui/Button";
import { EmptyState } from "@/components/feedback/EmptyState";

export default function OrderNotFound() {
  return <EmptyState title="Không tìm thấy đơn hàng" description="Mã đơn minh họa này không tồn tại trong bộ dữ liệu hiện tại." action={<ButtonLink href="/account/orders">Quay lại danh sách</ButtonLink>} />;
}
