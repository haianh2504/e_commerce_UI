import Link from "next/link";

import { Container } from "./Container";

const footerLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/products" },
  { label: "Giỏ hàng", href: "/cart" },
  { label: "Tài khoản", href: "/account" },
  { label: "Giới thiệu", href: "/about" },
] as const;

export function StoreFooter() {
  return (
    <footer className="bg-primary py-12 text-white sm:py-16">
      <Container>
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div className="max-w-xl">
            <Link href="/" className="rounded-sm font-heading text-3xl font-semibold tracking-[-0.04em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-primary">
              KOMO
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              Nội thất thiết thực cho góc học tập và không gian sống hiện đại,
              thoải mái mỗi ngày.
            </p>
          </div>
          <nav aria-label="Điều hướng chân trang" className="md:justify-self-end">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="rounded-sm text-white/80 hover:text-white hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="pt-6 text-xs text-white/55">© KOMO. Giao diện minh họa cho dự án học tập.</p>
      </Container>
    </footer>
  );
}
