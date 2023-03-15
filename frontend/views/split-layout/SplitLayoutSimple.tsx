import { SplitLayout } from "@hilla/react-components/SplitLayout.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";

export default function SplitLayoutSimple() {
  return (
    <SplitLayout>
      <VerticalLayout>
        <TextField label="Left 1" className="w-full" />
        <TextField label="Left 2" className="w-full" />
        <TextField label="Left 3" className="w-full" />
        <TextField label="Left 4" className="w-full" />
        <TextField label="Left 5" className="w-full" />
        <TextField label="Left 6" className="w-full" />
      </VerticalLayout>
      <VerticalLayout>
        <TextField label="Right 1" className="w-full" />
        <TextField label="Right 2" className="w-full" />
        <TextField label="Right 3" className="w-full" />
        <TextField label="Right 4" className="w-full" />
        <TextField label="Right 5" className="w-full" />
        <TextField label="Right 6" className="w-full" />
      </VerticalLayout>
    </SplitLayout>
  );
}
