import { Chart } from "@hilla/react-components/Chart.js";
import { ChartSeries } from "@hilla/react-components/ChartSeries.js";

export default function ChartArea() {
  return (
    <Chart
      type="area"
      title="Area Chart"
      stacking="normal"
      categories={"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",")}
    >
      <ChartSeries
        title="United States dollar"
        values={[135, 125, 89, 124, 105, 81, 111, 94, 95, 129, 98, 84]}
      />
      <ChartSeries
        title="Euro"
        values={[62, 72, 89, 68, 94, 92, 110, 100, 109, 89, 86, 105]}
      />
      <ChartSeries
        title="Japanese yen"
        values={[30, 25, 32, 26, 15, 31, 24, 32, 21, 8, 12, 32]}
      />
      <ChartSeries
        title="Pound sterling"
        values={[32, 21, 8, 12, 32, 21, 12, 30, 25, 19, 26, 15]}
      />
    </Chart>
  );
}
