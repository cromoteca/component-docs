import { Button } from "@hilla/react-components/Button.js";
import { SplitLayout } from "@hilla/react-components/SplitLayout.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { useState } from "react";

type Orientation = "horizontal" | "vertical" | undefined;

export default function SplitLayoutOrientation() {
  const [orientation, setOrientation] = useState<Orientation>("horizontal");

  function changeOrientation() {
    setOrientation(orientation === "horizontal" ? "vertical" : "horizontal");
  }

  return (
    <>
      <Button onClick={changeOrientation}>Change orientation</Button>
      <SplitLayout orientation={orientation} style={{ maxHeight: "350px" }}>
        <VerticalLayout>
          <TextField label="Top 1" className="w-full" />
          <TextField label="Top 2" className="w-full" />
          <TextField label="Top 3" className="w-full" />
        </VerticalLayout>
        <VerticalLayout>
          <TextField label="Bottom 1" className="w-full" />
          <TextField label="Bottom 2" className="w-full" />
          <TextField label="Bottom 3" className="w-full" />
        </VerticalLayout>
      </SplitLayout>
    </>
  );
}
