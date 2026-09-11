"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ComponentProps, type Ref } from "react";

import { cn } from "@/lib/cn";

const productNavigation = [
  { label: "Tất cả sản phẩm", href: "/products" },
  { label: "Ghế", href: "/categories/ghe" },
  { label: "Bàn học", href: "/categories/ban-hoc" },
  { label: "Sofa", href: "/categories/sofa" },
] as const;

export function StoreHeader({ overlay = false }: { overlay?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLLIElement>(null);
  const productsButtonRef = useRef<HTMLButtonElement>(null);
  const firstProductRef = useRef<HTMLAnchorElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isTransparent = overlay && !isScrolled && !isMenuOpen;

  useEffect(() => {
    if (!overlay) return;
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, [overlay]);

  useEffect(() => {
    if (!isProductsOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!productsRef.current?.contains(event.target as Node)) setIsProductsOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsProductsOpen(false);
        productsButtonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isProductsOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setIsMenuOpen(false); return; }
      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [isMenuOpen]);

  const openProducts = () => {
    setIsProductsOpen(true);
    requestAnimationFrame(() => firstProductRef.current?.focus());
  };
  const openSearch = () => {
    setIsSearchOpen(true);
    requestAnimationFrame(() => searchInputRef.current?.focus());
  };
  const navLinkClasses = cn("block cursor-pointer rounded-full px-3 py-2 text-base font-normal leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2", isTransparent ? "hover:bg-white/14" : "hover:bg-surface-subtle");

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200", isTransparent ? "border-transparent bg-transparent text-white" : "border-border/80 bg-background/95 text-primary shadow-[0_8px_30px_rgba(9,35,40,0.06)] backdrop-blur-md")}>
      <div className="mx-auto flex h-18 w-full max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8 xl:px-12">
        <Link href="/" aria-label="KOMO — Trang chủ" className="rounded-sm focus-visible:ring-2 focus-visible:ring-current"><span className="font-heading text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">KOMO</span></Link>
        <div className="hidden items-center gap-1 xl:flex">
          <nav aria-label="Điều hướng chính"><ul className="flex items-center gap-0.5">
            <li><Link href="/" className={cn(navLinkClasses, "font-semibold")}>Trang chủ</Link></li>
            <li ref={productsRef} className="relative" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsProductsOpen(false); }}>
              <button ref={productsButtonRef} type="button" className={cn(navLinkClasses, "flex items-center gap-1.5")} aria-expanded={isProductsOpen} aria-controls="desktop-products-menu" onClick={() => setIsProductsOpen((open) => !open)} onKeyDown={(event) => { if (event.key === "ArrowDown") { event.preventDefault(); openProducts(); } }}>Sản phẩm <ChevronIcon open={isProductsOpen} /></button>
              <div id="desktop-products-menu" className={cn("absolute left-0 top-[calc(100%+0.5rem)] w-56 rounded-card border border-border bg-surface p-2 text-primary shadow-[0_16px_40px_rgba(9,35,40,0.14)]", isProductsOpen ? "block" : "hidden")}>{productNavigation.map((item, index) => <Link key={item.href} ref={index === 0 ? firstProductRef : undefined} href={item.href} className="flex min-h-11 cursor-pointer items-center rounded-button px-4 py-2 text-base font-normal leading-6 hover:bg-surface-subtle" onClick={() => setIsProductsOpen(false)}>{item.label}</Link>)}</div>
            </li>
            <li><Link href="/about" className={navLinkClasses}>Về chúng tôi</Link></li>
          </ul></nav>
          {isSearchOpen ? <SearchForm inputId="header-search-desktop" inputRef={searchInputRef} transparent={isTransparent} onClose={() => setIsSearchOpen(false)} /> : <button type="button" className={navLinkClasses} onClick={openSearch} aria-expanded={isSearchOpen} aria-controls="header-search-desktop">Tìm kiếm</button>}
          <Link href="/cart" className={navLinkClasses}>Giỏ hàng</Link>
          <Link href="/login" className={cn("ml-2 inline-flex min-h-11 cursor-pointer items-center rounded-button px-5 text-base font-normal leading-6 focus-visible:ring-2 focus-visible:ring-current", isTransparent ? "border border-white/55 bg-white text-primary hover:bg-background" : "bg-primary text-white hover:bg-[#15363c]")}>Đăng nhập</Link>
        </div>
        <button ref={menuButtonRef} type="button" className={cn("inline-flex size-11 cursor-pointer items-center justify-center rounded-full border xl:hidden", isTransparent ? "border-white/50 bg-black/10 text-white hover:bg-black/20" : "border-border bg-surface text-primary hover:bg-surface-subtle")} aria-label="Mở menu" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen(true)}><MenuIcon /></button>
      </div>

      <div className={cn("fixed inset-0 z-50 bg-primary/55 transition-opacity xl:hidden", isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0")} aria-hidden="true" onClick={() => setIsMenuOpen(false)} />
      <div ref={drawerRef} id="mobile-navigation" className={cn("fixed inset-y-0 right-0 z-50 flex w-[min(88vw,23rem)] flex-col overflow-y-auto bg-background p-6 text-primary shadow-2xl transition-transform duration-200 xl:hidden", isMenuOpen ? "translate-x-0" : "pointer-events-none translate-x-full")} role="dialog" aria-modal="true" aria-label="Menu điều hướng" aria-hidden={!isMenuOpen} inert={!isMenuOpen}>
        <div className="flex items-center justify-between border-b border-border pb-5"><span className="font-heading text-xl font-semibold">Khám phá KOMO</span><button ref={closeButtonRef} type="button" className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface hover:bg-surface-subtle" aria-label="Đóng menu" onClick={() => setIsMenuOpen(false)}><CloseIcon /></button></div>
        <div className="mt-6"><SearchForm inputId="header-search-mobile" /></div>
        <nav aria-label="Điều hướng di động" className="mt-5"><ul className="grid gap-1">
          <li><MobileLink href="/" emphasized onClick={() => setIsMenuOpen(false)}>Trang chủ</MobileLink></li>
          <li><button type="button" className="flex min-h-12 w-full cursor-pointer items-center justify-between rounded-button px-4 py-3 text-base font-normal leading-6 hover:bg-surface-subtle" aria-expanded={isMobileProductsOpen} aria-controls="mobile-products-menu" onClick={() => setIsMobileProductsOpen((open) => !open)}>Sản phẩm <ChevronIcon open={isMobileProductsOpen} /></button><div id="mobile-products-menu" className={cn("ml-4 border-l border-border pl-2", isMobileProductsOpen ? "grid" : "hidden")}>{productNavigation.map((item) => <MobileLink key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</MobileLink>)}</div></li>
          <li><MobileLink href="/about" onClick={() => setIsMenuOpen(false)}>Về chúng tôi</MobileLink></li>
          <li><MobileLink href="/cart" onClick={() => setIsMenuOpen(false)}>Giỏ hàng</MobileLink></li>
        </ul></nav>
        <Link href="/login" className="mt-6 inline-flex min-h-12 cursor-pointer items-center justify-center rounded-button bg-primary px-5 text-base font-normal leading-6 text-white hover:bg-[#15363c]" onClick={() => setIsMenuOpen(false)}>Đăng nhập</Link>
        <p className="mt-auto border-t border-border pt-5 text-sm text-text-secondary">Tiện nghi mỗi ngày, giá trị trong tầm tay.</p>
      </div>
    </header>
  );
}

function MobileLink({ children, emphasized = false, ...props }: ComponentProps<typeof Link> & { emphasized?: boolean }) { return <Link {...props} className={cn("flex min-h-12 cursor-pointer items-center justify-between rounded-button px-4 py-3 text-base font-normal leading-6 hover:bg-surface-subtle", emphasized && "font-semibold")}>{children}<span aria-hidden="true">↗</span></Link>; }
function SearchForm({ inputId, inputRef, onClose, transparent = false }: { inputId: string; inputRef?: Ref<HTMLInputElement>; onClose?: () => void; transparent?: boolean }) { return <form action="/products" method="get" role="search" className="relative w-full xl:w-64"><label htmlFor={inputId} className="sr-only">Tìm kiếm sản phẩm</label><input ref={inputRef} id={inputId} name="q" type="search" maxLength={80} placeholder="Tìm sản phẩm" className={cn("h-11 w-full rounded-button border py-2 pl-4 pr-20 text-sm outline-none placeholder:text-current placeholder:opacity-60 focus:ring-2 focus:ring-current focus:ring-offset-2", transparent ? "border-white/45 bg-black/10 text-white focus:ring-offset-primary" : "border-border bg-surface text-primary focus:ring-offset-background")} /><button type="submit" aria-label="Tìm kiếm" className="absolute right-0 top-0 inline-flex size-11 cursor-pointer items-center justify-center rounded-button hover:bg-current/10"><SearchIcon /></button>{onClose ? <button type="button" aria-label="Đóng tìm kiếm" className="absolute right-10 top-0 inline-flex size-11 cursor-pointer items-center justify-center hover:opacity-70" onClick={onClose}>×</button> : null}</form>; }
function ChevronIcon({ open }: { open: boolean }) { return <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" className={cn("transition-transform", open && "rotate-180")}><path d="m5 7.5 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function MenuIcon() { return <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>; }
function CloseIcon() { return <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>; }
function SearchIcon() { return <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="m16 16 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>; }
