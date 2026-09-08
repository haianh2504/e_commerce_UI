import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

const gapClasses = {
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
} as const;

type StackProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  gap?: keyof typeof gapClasses;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Stack<T extends ElementType = "div">({
  as,
  children,
  className,
  gap = "md",
  ...props
}: StackProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn("flex flex-col", gapClasses[gap], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
