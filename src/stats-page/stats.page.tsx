import { ArcElement, Tooltip, Legend } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useStatsData } from "./stats.loader";

ChartJS.register(ArcElement, Tooltip, Legend);

function transformToDayliStat(data: { date: Date; score: number }[]) {
  const result = new Map();
  data.forEach(({ date, score }) => {
    const stat = result.get(date.toISOString());
    if (stat != null) {
      stat.value += score;
      stat.counter += 1;
    } else {
      result.set(date.toISOString(), { value: score, counter: 1 });
    }
  });

  return result;
}

export default function NewLogPage() {
  const logs = useStatsData().sort((a, b) => (a.date > b.date ? 1 : -1));

  const preparedData = [...transformToDayliStat(logs).entries()];
  const values = preparedData.map(([_, v]) => v.value / v.counter);
  const labels = preparedData.map(([k]) => new Date(k).toDateString());

  const dataset = {
    datasets: [
      {
        label: "score",
        data: values,
      },
    ],
    labels,
  };
  return (
    <>
      <div style={{ maxWidth: "800px" }}>
        <Chart data={dataset} type="bar" />
      </div>
    </>
  );
}
