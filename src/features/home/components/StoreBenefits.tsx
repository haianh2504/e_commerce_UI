import type { ReactNode } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";

type Benefit = { title: string; description: string; label: string; action: string; labelClassName: string; icon: ReactNode };

const benefits: Benefit[] = [
  { title: "Giao hàng toàn quốc", description: "Nhận sản phẩm thuận tiện tại các tỉnh thành trên toàn quốc. Theo dõi đơn hàng dễ dàng.", label: "Nhanh chóng", action: "Tìm hiểu thêm", labelClassName: "bg-success-subtle text-success", icon: <DeliveryIcon /> },
  { title: "Đổi trả dễ dàng", description: "Quy trình đổi trả rõ ràng, hỗ trợ tận tình khi bạn cần thay đổi.", label: "An tâm mua sắm", action: "Xem chính sách", labelClassName: "bg-warning-subtle text-warning", icon: <ReturnIcon /> },
  { title: "Thanh toán an toàn", description: "Đa dạng phương thức thanh toán với quy trình bảo mật, minh bạch và an toàn.", label: "Bảo mật", action: "Xem phương thức", labelClassName: "bg-surface-subtle text-primary", icon: <PaymentIcon /> },
  { title: "Hỗ trợ tận tâm", description: "KOMO luôn sẵn sàng tư vấn và giải đáp mọi thắc mắc trước và sau mua hàng.", label: "Luôn đồng hành", action: "Liên hệ KOMO", labelClassName: "bg-error-subtle text-error", icon: <SupportIcon /> },
];

const reassurances = [
  { title: "Chính sách minh bạch", description: "Thông tin rõ ràng, dễ dàng tra cứu.", icon: <ShieldIcon /> },
  { title: "Bảo mật thông tin", description: "An toàn tuyệt đối cho mọi giao dịch.", icon: <LockIcon /> },
  { title: "Hỗ trợ trước & sau mua hàng", description: "Luôn đồng hành cùng bạn.", icon: <HeartIcon /> },
];

export function StoreBenefits() {
  return (
    <div>
      <SectionHeading titleId="benefits-heading" eyebrow="An tâm mua sắm" title="Vì sao chọn KOMO?" description="Những hỗ trợ thiết thực giúp hành trình mua sắm nội thất của bạn thuận tiện và an tâm hơn." />

      <ul className="mt-9 grid gap-4 md:grid-cols-2 lg:mt-12 xl:grid-cols-4">
        {benefits.map((benefit) => (
          <li key={benefit.title} className="flex min-w-0 flex-col rounded-card border border-border bg-surface p-5 shadow-sm sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-full bg-surface-subtle text-primary">{benefit.icon}</span>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${benefit.labelClassName}`}>{benefit.label}</span>
            </div>
            <h3 className="mt-6 font-heading text-xl font-semibold text-primary">{benefit.title}</h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">{benefit.description}</p>
            <button type="button" disabled aria-describedby="benefit-action-note" className="mt-auto flex min-h-11 w-fit cursor-not-allowed items-center gap-3 pt-6 font-semibold text-primary opacity-65">{benefit.action}<ArrowIcon /></button>
          </li>
        ))}
      </ul>

      <p id="benefit-action-note" className="sr-only">Các liên kết thông tin đang chờ điểm đến được phê duyệt.</p>

      <ul className="mt-6 grid rounded-card border border-border bg-surface px-5 py-3 shadow-sm md:grid-cols-3 md:px-3">
        {reassurances.map((item, index) => (
          <li key={item.title} className={`flex items-center gap-4 py-4 md:px-6 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}>
            <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center text-primary">{item.icon}</span>
            <div><h3 className="font-heading font-semibold text-primary">{item.title}</h3><p className="mt-1 text-sm leading-5 text-text-secondary">{item.description}</p></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const iconClasses = "size-8";
const sharedIconProps = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function DeliveryIcon() { return <svg viewBox="0 0 32 32" className={iconClasses} {...sharedIconProps}><path d="M3.5 7.5h15v14h-15zM18.5 12h5l5 5v4.5h-10z"/><circle cx="9" cy="23.5" r="2.5"/><circle cx="23.5" cy="23.5" r="2.5"/><path d="M3.5 11h9"/></svg>; }
function ReturnIcon() { return <svg viewBox="0 0 32 32" className={iconClasses} {...sharedIconProps}><path d="M7 11h13.5a7 7 0 0 1 0 14H12"/><path d="m10.5 6.5-4.5 4.5 4.5 4.5"/><path d="M12 19v7h-7v-7z"/></svg>; }
function PaymentIcon() { return <svg viewBox="0 0 32 32" className={iconClasses} {...sharedIconProps}><rect x="3.5" y="7" width="25" height="18" rx="2.5"/><path d="M3.5 12h25M8 19h6"/><path d="m21 18 2 2 4-4"/></svg>; }
function SupportIcon() { return <svg viewBox="0 0 32 32" className={iconClasses} {...sharedIconProps}><path d="M6 17v-2a10 10 0 0 1 20 0v2"/><path d="M6 17H4.5A1.5 1.5 0 0 0 3 18.5v5A1.5 1.5 0 0 0 4.5 25H8v-8zM26 17h1.5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5H24v-8zM24 25c-1 2-3 3-6 3"/></svg>; }
function ShieldIcon() { return <svg viewBox="0 0 32 32" className={iconClasses} {...sharedIconProps}><path d="M16 3.5c3.5 2.2 7 3 10 3.5v8.2c0 6.5-4.2 10.8-10 13.3-5.8-2.5-10-6.8-10-13.3V7c3-.5 6.5-1.3 10-3.5Z"/><path d="m11.5 16 3 3 6-7"/></svg>; }
function LockIcon() { return <svg viewBox="0 0 32 32" className={iconClasses} {...sharedIconProps}><rect x="7" y="13" width="18" height="15" rx="2"/><path d="M11 13V9a5 5 0 0 1 10 0v4M16 19v4"/></svg>; }
function HeartIcon() { return <svg viewBox="0 0 32 32" className={iconClasses} {...sharedIconProps}><path d="M16 27S5 20.5 5 12.5A6.5 6.5 0 0 1 16 8a6.5 6.5 0 0 1 11 4.5C27 20.5 16 27 16 27Z"/></svg>; }
function ArrowIcon() { return <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true" {...sharedIconProps}><path d="M3 10h13m-4-4 4 4-4 4"/></svg>; }
