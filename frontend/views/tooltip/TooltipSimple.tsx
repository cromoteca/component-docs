import { Icon } from "@hilla/react-components/Icon.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { Tooltip } from "@hilla/react-components/Tooltip.js";
import "@vaadin/vaadin-lumo-styles/vaadin-iconset.js";

export default function TooltipSimple() {
  return (
    <TextField placeholder="Search">
      <Icon slot="prefix" icon="lumo:search" />
      <Tooltip slot="tooltip" text='Wrap in "quotes" for exact phrase' />
    </TextField>
  );
}
