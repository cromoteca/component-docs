import { Chart } from "@hilla/react-components/Chart.js";
import { ChartSeries } from "@hilla/react-components/ChartSeries.js";

export default function ChartPolar() {
  return (
    <Chart polar title="Polar Chart">
      <ChartSeries
        type="column"
        title="Column"
        values={[8, 7, 6, 5, 4, 3, 2, 1]}
      />
      <ChartSeries type="line" title="Line" values={[1, 2, 3, 4, 5, 6, 7, 8]} />
      <ChartSeries type="area" title="Area" values={[1, 8, 2, 7, 3, 6, 4, 5]} />
    </Chart>
  );
}
