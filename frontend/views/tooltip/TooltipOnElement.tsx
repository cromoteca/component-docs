import { Tooltip } from "@hilla/react-components/Tooltip.js";

export default function TooltipOnElement() {
  return (
    <>
      <h2 id="heading">Heading with tooltip</h2>
      <Tooltip for="heading" text="This is a tooltip" position="top-start" />
    </>
  );
}
