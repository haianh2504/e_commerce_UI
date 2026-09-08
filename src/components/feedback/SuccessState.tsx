import type { ReactNode } from "react";

import { StatePanel } from "./StatePanel";

export type SuccessStateProps = {
  action?: ReactNode;
  description: string;
  title?: string;
};

export function SuccessState({
  action,
  description,
  title = "Complete",
}: SuccessStateProps) {
  return (
    <StatePanel
      title={title}
      description={description}
      action={action}
      tone="success"
      role="status"
      live="polite"
    />
  );
}
