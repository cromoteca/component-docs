import { ProgressBar } from "@hilla/react-components/ProgressBar.js";

export default function ProgressBarIndeterminate() {
  return (
    <div style={{ color: "var(--lumo-secondary-text-color)" }}>
      <div>Generating report...</div>
      <ProgressBar indeterminate />
    </div>
  );
}
