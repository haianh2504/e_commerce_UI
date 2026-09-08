import { StatePanel } from "./StatePanel";

export type LoadingStateProps = {
  description?: string;
  title?: string;
};

export function LoadingState({
  description = "Please wait while the content is prepared.",
  title = "Loading",
}: LoadingStateProps) {
  return (
    <StatePanel
      title={title}
      description={description}
      icon={<span className="ui-spinner block" />}
      role="status"
      live="polite"
    />
  );
}
