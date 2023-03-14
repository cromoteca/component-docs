import { Grid } from "@hilla/react-components/Grid.js";
import { GridFilterColumn } from "@hilla/react-components/GridFilterColumn.js";
import { useFruits } from "./Fruits.js";

export default function GridFiltering() {
    const { fruits } = useFruits();

    return (
        <Grid items={fruits}>
            <GridFilterColumn path='name' />
            <GridFilterColumn path='quantity' />
        </Grid>
    );
}
