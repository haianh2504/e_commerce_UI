import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formatVnd } from "@/lib/formatCurrency";

type CartSummaryProps = {
  itemCount: number;
  subtotal: number;
};

export function CartSummary({ itemCount, subtotal }: CartSummaryProps) {
  return (
    <Card className="lg:sticky lg:top-28">
      <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em]">Tóm tắt giỏ hàng</h2>
      <dl className="mt-6 grid gap-4">
        <div className="flex justify-between gap-4 text-text-secondary">
          <dt>Sản phẩm ({itemCount})</dt>
          <dd>{formatVnd(subtotal)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-border pt-4 text-lg font-semibold">
          <dt>Tạm tính</dt>
          <dd>{formatVnd(subtotal)}</dd>
        </div>
      </dl>
      <p className="mt-4 text-sm leading-6 text-text-secondary">Tổng hiển thị là dữ liệu minh họa. Phí giao hàng và tổng cuối cùng sẽ được xác định trong quy trình thanh toán.</p>
      <ButtonLink href="/checkout" size="lg" className="mt-6 w-full">Tiến hành thanh toán</ButtonLink>
      <ButtonLink href="/products" variant="ghost" className="mt-2 w-full">Tiếp tục mua sắm</ButtonLink>
    </Card>
  );
}
