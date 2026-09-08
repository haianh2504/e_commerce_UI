import type { ReactNode } from "react";

import { StatePanel } from "./StatePanel";

export type ErrorStateProps = {
  action?: ReactNode;
  description: string;
  title?: string;
};

export function ErrorState({
  action,
  description,
  title = "Something went wrong",
}: ErrorStateProps) {
  return (
    <StatePanel
      title={title}
      description={description}
      action={action}
      tone="error"
      role="alert"
    />
  );
}
