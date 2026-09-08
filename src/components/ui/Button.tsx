import Link, { type LinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/cn";

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-button font-semibold leading-none transition-[background-color,border-color,color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-55 motion-reduce:transition-none";

const variantClasses = {
  primary:
    "border border-primary bg-primary text-white hover:bg-[#15363c] active:translate-y-px",
  secondary:
    "border border-primary bg-surface text-primary hover:bg-surface-subtle active:translate-y-px",
  ghost:
    "border border-transparent bg-transparent text-primary hover:bg-surface-subtle active:translate-y-px",
} as const;

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "min-h-12 rounded-button-prominent px-6 py-3.5 text-base",
} as const;

type ButtonStyleProps = {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleProps & {
    isLoading?: boolean;
  };

function buttonClasses({
  variant = "primary",
  size = "md",
}: ButtonStyleProps) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size]);
}

export function Button({
  children,
  className,
  disabled,
  isLoading = false,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn(buttonClasses({ size, variant }), className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
    >
      {isLoading ? <span className="ui-spinner" aria-hidden="true" /> : null}
      <span>
        {isLoading ? (
          <>
            Loading<span className="sr-only">: {children}</span>
          </>
        ) : (
          children
        )}
      </span>
    </button>
  );
}

export type ButtonLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  ButtonStyleProps & {
    children: ReactNode;
  };

export function ButtonLink({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonClasses({ size, variant }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}
