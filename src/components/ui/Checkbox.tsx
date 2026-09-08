import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/cn";
import { describedBy } from "./Field";

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "type"
> & {
  description?: string;
  error?: string;
  id: string;
  label: string;
};

export function Checkbox({
  className,
  description,
  error,
  id,
  label,
  ...props
}: CheckboxProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <div className="flex items-start gap-3">
        <input
          {...props}
          id={id}
          type="checkbox"
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={describedBy(
            id,
            error,
            description,
            props["aria-describedby"],
          )}
          className="mt-0.5 size-5 shrink-0 accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-55"
        />
        <label htmlFor={id} className="grid cursor-pointer gap-1 text-sm">
          <span className="font-semibold text-text-primary">{label}</span>
          {description ? (
            <span id={`${id}-help`} className="text-text-secondary">
              {description}
            </span>
          ) : null}
        </label>
      </div>
      {error ? (
        <p id={`${id}-error`} className="pl-8 text-sm text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
