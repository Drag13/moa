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

  const tops = calculateTop(stats, currentStats);
  const topByAverage = tops.topByAverage;
  const topByMin = tops.topByMin;
  return (
    <section>
      <p>
        Max: <Moa value={max} />
      </p>
      <p>
        Min: <Moa value={min} />
      </p>
      <p>
        Average: <Moa value={average} />{" "}
      </p>
      <p>Top {topByAverage} by average</p>
      <p>Top {topByMin} by min</p>
    </section>
  );
}

function calculateStatistics(results: PracticeResult[]): StatInfo[] {
  const stats = results.reduce((acc, v) => {
    const entry = acc[v.ammoId] ?? {
      count: 0,
      max: Number.NEGATIVE_INFINITY,
      min: Number.POSITIVE_INFINITY,
      sum: 0,
      code: v.ammoId,
    };

    entry.count += 1;
    entry.sum += v.score;

    if (entry.max < v.score) {
      entry.max = v.score;
    }
    if (entry.min > v.score) {
      entry.min = v.score;
    }

    acc[v.ammoId] = entry;

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

function calculateTop(allStats: StatInfo[], current: StatInfo) {
  const results = { topByAverage: 1, topByMin: 1 };

  for (let i = 0; i < allStats.length; i++) {
    const { average, min, code } = allStats[i];
    if (code === current.code) {
      continue;
    }

    if (average < current.average) {
      results.topByAverage += 1;
    }

    if (min < current.min) {
      results.topByMin += 1;
    }
  }

  return results;
}
