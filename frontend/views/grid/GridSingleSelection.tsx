import { Grid } from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import useFruits from "./Fruits.js";

export default function GridSingleSelection() {
  const { fruits, selectedFruits, setSelectedFruits } = useFruits();

  return (
    <Grid
      items={fruits}
      selectedItems={selectedFruits}
      onActiveItemChanged={({ detail: { value } }) =>
        setSelectedFruits(value ? [value] : [])
      }
    >
      <GridColumn path="name" />
      <GridColumn path="quantity" />
    </Grid>
  );
}
