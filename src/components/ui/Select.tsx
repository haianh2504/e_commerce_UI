import type { ReactNode, SelectHTMLAttributes } from "react";

import { cn } from "@/lib/cn";
import { controlClasses, describedBy, Field } from "./Field";

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "id"> & {
  children: ReactNode;
  error?: string;
  helperText?: string;
  id: string;
  label: string;
};

export function Select({
  children,
  className,
  error,
  helperText,
  id,
  label,
  required,
  ...props
}: SelectProps) {
  return (
    <Field
      id={id}
      label={label}
      helperText={helperText}
      error={error}
      required={required}
    >
      <select
        {...props}
        id={id}
        required={required}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={describedBy(
          id,
          error,
          helperText,
          props["aria-describedby"],
        )}
        className={cn(controlClasses, "appearance-none", className)}
      >
        {children}
      </select>
    </Field>
  );
}
