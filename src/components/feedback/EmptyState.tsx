import type { ReactNode } from "react";

import { StatePanel } from "./StatePanel";

export type EmptyStateProps = {
  action?: ReactNode;
  description: string;
  title: string;
};

export function EmptyState({ action, description, title }: EmptyStateProps) {
  return (
    <StatePanel title={title} description={description} action={action} />
  );
}
