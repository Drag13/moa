import practiceResults from "../data/log.json";
import { calculateScoreMetric } from "../shared/math";

export const practiceResultsLoader = () => {
  return Promise.resolve(mapPracticesDto(practiceResults));
};

type PracticeResult = {
  distance: number;
  score: number;
  date: Date;
  ammoId: string;
};

export const mapPracticesDto = (practices: unknown): PracticeResult[] => {
  if (!Array.isArray(practices)) {
    return [];
  }

  return practices
    .map(({ groups, date }) =>
      groups.map(({ distance, result, ammo }: any) => ({
        distance,
        score: calculateScoreMetric(result, distance),
        ammoId: ammo,
        date: new Date(date),
      }))
    )
    .flat();
};
