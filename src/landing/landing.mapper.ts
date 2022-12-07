import { calculateScoreMetric } from "../calculator/calculate";

type PracticeResult = {
  distance: number;
  score: number;
  date: Date;
  ammoId: string;
};

type Ammo = {
  id: string;
  name: string;
  velocity: number;
  price: number;
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

export const mapAmmosDto = (ammos: unknown): Ammo[] => {
  if (!Array.isArray(ammos)) {
    return [];
  }

  return ammos.map((ammo) => ({
    id: ammo.id,
    name: ammo.name,
    velocity: ammo.velocity,
    price: ammo.prices.at(-1),
  }));
};
