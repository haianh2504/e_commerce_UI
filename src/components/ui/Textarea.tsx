import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/cn";
import { controlClasses, describedBy, Field } from "./Field";

export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id"
> & {
  error?: string;
  helperText?: string;
  id: string;
  label: string;
};

export function Textarea({
  className,
  error,
  helperText,
  id,
  label,
  required,
  rows = 4,
  ...props
}: TextareaProps) {
  return (
    <Field
      id={id}
      label={label}
      helperText={helperText}
      error={error}
      required={required}
    >
      <textarea
        {...props}
        id={id}
        rows={rows}
        required={required}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={describedBy(
          id,
          error,
          helperText,
          props["aria-describedby"],
        )}
        className={cn(controlClasses, "resize-y", className)}
      />
    </Field>
  );
}
