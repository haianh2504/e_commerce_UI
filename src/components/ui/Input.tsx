import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/cn";
import { controlClasses, describedBy, Field } from "./Field";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  error?: string;
  helperText?: string;
  id: string;
  label: string;
};

export function Input({
  className,
  error,
  helperText,
  id,
  label,
  required,
  ...props
}: InputProps) {
  return (
    <Field
      id={id}
      label={label}
      helperText={helperText}
      error={error}
      required={required}
    >
      <input
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
        className={cn(controlClasses, className)}
      />
    </Field>
  );
}
