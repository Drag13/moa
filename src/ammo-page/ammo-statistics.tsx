import { Moa } from "../shared/moa/moa";
import { matchCaseInsensitive } from "../shared/string";
import { PracticeResult } from "../shared/types/practice-results";

type AmmoStatisticsProps = {
  logs: PracticeResult[];
  ammoId: string;
};

export function AmmoStatistics({ ammoId, logs }: AmmoStatisticsProps) {
  const stats = calculateStatistics(logs);
  const currentStats = stats.find(({ code }) =>
    matchCaseInsensitive(code, ammoId)
  );

  if (!currentStats) {
    throw new Error("Not Found");
  }

  const { average, max, min } = currentStats;

  const { topByAverage, topByMin } = calculateTop(stats, currentStats);
  return (
    <section>
      <p>Top {topByAverage} by average</p>
      <p>Top {topByMin} by min</p>
      <p>
        Average: <Moa value={average} />{" "}
      </p>
      <p>
        Min: <Moa value={min} />
      </p>
      <p>
        Max: <Moa value={max} />
      </p>
    </section>
  );
}

function calculateStatistics(results: PracticeResult[]): StatInfo[] {
  const stats = results.reduce((acc, v) => {
    const ammoStats = acc[v.ammoId] ?? {
      count: 0,
      max: Number.NEGATIVE_INFINITY,
      min: Number.POSITIVE_INFINITY,
      sum: 0,
      code: v.ammoId,
    };

    ammoStats.count += 1;
    ammoStats.sum += v.score;

    if (ammoStats.max < v.score) {
      ammoStats.max = v.score;
    }
    if (ammoStats.min > v.score) {
      ammoStats.min = v.score;
    }

    acc[v.ammoId] = ammoStats;

    return acc;
  }, {} as Record<string, { min: number; max: number; sum: number; count: number; code: string }>);

  const withAverage = Object.values(stats).map((v) => ({
    min: v.min,
    max: v.max,
    average: v.sum / v.count,
    code: v.code,
    count: v.count,
  }));

  return withAverage;
}

type StatInfo = {
  code: string;
  min: number;
  max: number;
  count: number;
  average: number;
};

const MIN_AMOUNT_TO_INCLUDE = 3;

function calculateTop(allStats: StatInfo[], current: StatInfo) {
  return allStats.reduce(
    (acc, { average, min, count }) => {
      if (count < MIN_AMOUNT_TO_INCLUDE) {
        return acc;
      }

      if (average < current.average) {
        acc.topByAverage += 1;
      }

      if (min < current.min) {
        acc.topByMin += 1;
      }

      return acc;
    },
    { topByAverage: 1, topByMin: 1 }
  );
}
