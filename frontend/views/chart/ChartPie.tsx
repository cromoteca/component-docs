import { Chart } from "@hilla/react-components/Chart.js";
import { ChartSeries } from "@hilla/react-components/ChartSeries.js";

export default function ChartPie() {
  return (
    <Chart type="pie" title="Pie Chart" tooltip>
      <ChartSeries
        title="Brands"
        values={[
          { name: "Chrome", y: 38 },
          { name: "Firefox", y: 24 },
          { name: "Edge", y: 15, sliced: true, selected: true },
          { name: "Internet Explorer", y: 8 },
        ]}
      />
    </Chart>
  );
}
