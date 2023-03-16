import { Chart } from "@hilla/react-components/Chart.js";
import { ChartSeries } from "@hilla/react-components/ChartSeries.js";

export default function ChartSimple() {
  return (
    <Chart title="Simple Chart" subtitle="Example of chart">
      <ChartSeries
        type="column"
        values={[4900, 12100, 12800, 6800, 143000, 125000, 51100, 49500]}
        title="Diameters"
      />
    </Chart>
  );
}
