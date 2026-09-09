import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  align?: "left" | "center";
  description?: string;
  eyebrow?: string;
  title: string;
  titleId?: string;
};

export function SectionHeading({
  align = "left",
  className,
  description,
  eyebrow,
  title,
  titleId,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "grid gap-3",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-text-secondary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="font-heading text-2xl font-semibold tracking-[-0.025em] text-primary sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-text-secondary">{description}</p>
      ) : null}
    </div>
  );
}
