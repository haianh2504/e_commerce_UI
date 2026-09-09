"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

const navigation = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/products" },
  { label: "Ghế", href: "/categories/ghe" },
  { label: "Bàn học", href: "/categories/ban-hoc" },
  { label: "Sofa", href: "/categories/sofa" },
  { label: "Về chúng tôi", href: "/about" },
] as const;

type StoreHeaderProps = {
  overlay?: boolean;
};

export function StoreHeader({ overlay = false }: StoreHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const isTransparent = overlay && !isScrolled && !isMenuOpen;

  useEffect(() => {
    if (!overlay) return;

    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, [overlay]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200",
        isTransparent
          ? "border-transparent bg-transparent text-white"
          : "border-border/80 bg-background/95 text-primary shadow-[0_8px_30px_rgba(9,35,40,0.06)] backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-18 w-full max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8 xl:px-12">
        <Link
          href="/"
          aria-label="KOMO — Trang chủ"
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-4"
        >
          <span className="font-heading text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
            KOMO
          </span>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <nav aria-label="Điều hướng chính">
            <ul className="flex items-center gap-0.5">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-full px-2.5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 xl:px-3.5",
                    isTransparent
                      ? "hover:bg-white/14"
                      : "hover:bg-surface-subtle",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            </ul>
          </nav>
          <SearchForm inputId="header-search-desktop" transparent={isTransparent} />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 lg:hidden",
            isTransparent
              ? "border-white/50 bg-black/10 text-white hover:bg-black/20"
              : "border-border bg-surface text-primary hover:bg-surface-subtle",
          )}
          aria-label="Mở menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-primary/55 transition-opacity lg:hidden",
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden="true"
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        ref={drawerRef}
        id="mobile-navigation"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(88vw,23rem)] flex-col bg-background p-6 text-primary shadow-2xl transition-transform duration-200 lg:hidden",
          isMenuOpen ? "translate-x-0" : "pointer-events-none translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu điều hướng"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <div className="flex items-center justify-between border-b border-border pb-5">
          <span className="font-heading text-xl font-semibold">Khám phá KOMO</span>
          <button
            ref={closeButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface hover:bg-surface-subtle"
            aria-label="Đóng menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="mt-6"><SearchForm inputId="header-search-mobile" /></div>
        <nav aria-label="Điều hướng di động" className="mt-5">
          <ul className="grid gap-1">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex min-h-12 items-center justify-between rounded-button px-4 py-3 font-semibold hover:bg-surface-subtle"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-auto border-t border-border pt-5 text-sm text-text-secondary">
          Tiện nghi mỗi ngày, giá trị trong tầm tay.
        </p>
      </div>
    </header>
  );
}

function SearchForm({ inputId, transparent = false }: { inputId: string; transparent?: boolean }) {
  return (
    <form action="/products" method="get" role="search" className="relative w-full lg:w-48 xl:w-56">
      <label htmlFor={inputId} className="sr-only">Tìm kiếm sản phẩm</label>
      <input
        id={inputId}
        name="q"
        type="search"
        maxLength={80}
        placeholder="Tìm sản phẩm"
        className={cn(
          "h-11 w-full rounded-button border py-2 pl-4 pr-11 text-sm outline-none placeholder:text-current placeholder:opacity-60 focus:ring-2 focus:ring-current focus:ring-offset-2",
          transparent ? "border-white/45 bg-black/10 text-white focus:ring-offset-primary" : "border-border bg-surface text-primary focus:ring-offset-background",
        )}
      />
      <button type="submit" aria-label="Tìm kiếm" className="absolute right-0 top-0 inline-flex size-11 items-center justify-center rounded-button">
        <SearchIcon />
      </button>
    </form>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16 16 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
