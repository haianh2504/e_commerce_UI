import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  padding?: "none" | "sm" | "md";
  tone?: "surface" | "subtle";
};

const paddingClasses = {
  none: "p-0",
  sm: "p-5",
  md: "p-5 sm:p-6",
} as const;

export function Card({
  children,
  className,
  padding = "md",
  tone = "surface",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-border",
        tone === "surface" ? "bg-surface" : "bg-surface-subtle",
        paddingClasses[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
