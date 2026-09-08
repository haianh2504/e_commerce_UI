import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

const toneClasses = {
  neutral: "border-border bg-surface text-text-primary",
  success: "border-success/25 bg-success-subtle text-success",
  error: "border-error/25 bg-error-subtle text-error",
} as const;

type StatePanelProps = {
  action?: ReactNode;
  description: string;
  icon?: ReactNode;
  live?: "assertive" | "polite";
  role?: "alert" | "status";
  title: string;
  tone?: keyof typeof toneClasses;
};

export function StatePanel({
  action,
  description,
  icon,
  live,
  role,
  title,
  tone = "neutral",
}: StatePanelProps) {
  return (
    <div
      className={cn(
        "grid justify-items-start gap-3 rounded-card border p-5 sm:p-6",
        toneClasses[tone],
      )}
      role={role}
      aria-live={live}
    >
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      <div className="grid gap-1">
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-85">{description}</p>
      </div>
      {action}
    </div>
  );
}
