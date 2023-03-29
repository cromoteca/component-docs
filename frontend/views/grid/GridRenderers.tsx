import { Button } from "@hilla/react-components/Button.js";
import { Grid } from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import useFruits from "./Fruits.js";

export default function GridRenderers() {
  const { fruits } = useFruits();

  return (
    <Grid items={fruits}>
      <GridColumn header="Item Name">
        {({ item }) => <Button>{item.name.toUpperCase()}</Button>}
      </GridColumn>
      <GridColumn header="#">
        {({ item }) => <span>{item.symbol.repeat(item.quantity)}</span>}
      </GridColumn>
    </Grid>
  );
}
