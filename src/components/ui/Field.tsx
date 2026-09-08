import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type FieldProps = {
  children: ReactNode;
  className?: string;
  error?: string;
  helperText?: string;
  id: string;
  label: string;
  required?: boolean;
};

export function Field({
  children,
  className,
  error,
  helperText,
  id,
  label,
  required,
}: FieldProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <label htmlFor={id} className="text-sm font-semibold text-text-primary">
        {label}
        {required ? (
          <span className="ml-1 text-error" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-error">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${id}-help`} className="text-sm text-text-secondary">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

export function describedBy(
  id: string,
  error?: string,
  helperText?: string,
  existing?: string,
) {
  return cn(
    existing,
    error ? `${id}-error` : helperText ? `${id}-help` : undefined,
  );
}

export const controlClasses =
  "min-h-11 w-full rounded-button border border-border bg-surface px-4 py-2.5 text-base text-text-primary outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-text-secondary/75 hover:border-text-secondary focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:bg-surface-subtle disabled:text-text-secondary disabled:opacity-70 aria-invalid:border-error aria-invalid:ring-error/15 motion-reduce:transition-none";
