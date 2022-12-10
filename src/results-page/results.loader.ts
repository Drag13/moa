import practiceResults from "../data/log.json";
import { calculateScoreMetric } from "../shared/math";

export const practiceResultsLoader = () => {
  const results = practiceResults as PracticeResultsDto;
  return Promise.resolve(mapPracticesDto(results));
};

type PracticeResultsDto = {
  date: string;
  series: {
    distance: number;
    ammo: string;
    resultsMm: number[];
    suppressor: boolean;
    onAir: boolean;
    position: string;
  }[];
}[];

type PracticeResult = {
  distance: number;
  score: number;
  date: Date;
  ammoId: string;
};

export const mapPracticesDto = (
  practices: PracticeResultsDto
): PracticeResult[] => {
  if (!Array.isArray(practices)) {
    return [];
  }

  return practices
    .map(({ series, date }) =>
      series.map(({ distance, resultsMm, ammo }) =>
        resultsMm.map((result) => ({
          result,
          distance,
          ammoId: ammo,
          date: new Date(date),
          score: calculateScoreMetric(result, distance),
        }))
      )
    )
    .flat(2);
};
