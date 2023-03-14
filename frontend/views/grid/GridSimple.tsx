import { Grid } from "@hilla/react-components/Grid.js";
// FIXME GridColumn is also exported from Grid.js
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { useFruits } from "./Fruits.js";

export default function GridSimple() {
    const { fruits } = useFruits();

    return (
        <Grid items={fruits}>
            <GridColumn path='name' />
            <GridColumn path='quantity' />
        </Grid>
    );
}
