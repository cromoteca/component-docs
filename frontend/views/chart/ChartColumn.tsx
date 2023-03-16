import { Chart } from "@hilla/react-components/Chart.js";
import { ChartSeries } from "@hilla/react-components/ChartSeries.js";

export default function ChartColumn() {
  return (
    <Chart
      title="Column Chart"
      type="column"
      categories={["Jan", "Feb", "Mar"]}
    >
      <ChartSeries title="Tokyo" values={[49.9, 71.5, 106.4]} />
      <ChartSeries title="New York" values={[83.6, 78.8, 98.5]} />
      <ChartSeries title="London" values={[48.9, 38.8, 39.3]} />
    </Chart>
  );
}
