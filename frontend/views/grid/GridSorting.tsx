import { Grid } from "@hilla/react-components/Grid.js";
import { GridSortColumn } from "@hilla/react-components/GridSortColumn.js";
import useFruits from "./Fruits.js";

export default function GridSorting() {
  const { fruits } = useFruits();

  return (
    <Grid items={fruits}>
      <GridSortColumn path="name" />
      <GridSortColumn path="quantity" />
    </Grid>
  );
}
