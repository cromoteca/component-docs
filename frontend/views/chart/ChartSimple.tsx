import { Chart } from "@hilla/react-components/Chart.js";
import { ChartSeries } from "@hilla/react-components/ChartSeries.js";

export default function ChartSimple() {
  const diameters = [4900, 12100, 12800, 6800, 143000, 125000, 51100, 49500];

  return (
    <Chart title="Simple Chart" subtitle="Example">
      <ChartSeries type="column" values={diameters} title="Diameters" />
    </Chart>
  );
}
