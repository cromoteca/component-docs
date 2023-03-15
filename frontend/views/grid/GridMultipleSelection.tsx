import { Grid } from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { GridSelectionColumn } from "@hilla/react-components/GridSelectionColumn.js";
import useFruits from "./Fruits.js";

export default function GridMultipleSelection() {
  const { fruits, selectedFruits, setSelectedFruits } = useFruits();

  return (
    <Grid
      items={fruits}
      selectedItems={selectedFruits}
      onSelectedItemsChanged={({ detail: { value } }) =>
        setSelectedFruits(value)
      }
    >
      <GridSelectionColumn />
      <GridColumn path="name" />
      <GridColumn path="quantity" />
    </Grid>
  );
}
