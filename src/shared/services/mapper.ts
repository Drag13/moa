import { AmmoDto, LogEntryDto } from "../../data/migrations/initial-seed";
import { calculateScoreMetric, fpsToM, grnToGram } from "../math";

export const mapAmmoDtoToAmmo = (ammo: AmmoDto) => {
  const priceData = ammo.prices.at(-1)!;
  return {
    name: ammo.name,
    price: { value: priceData.price },
    weight: grnToGram(ammo.weightGrn),
    velocityFPS: ammo.velocityFPS,
    velocityM: fpsToM(ammo.velocityFPS),
    bk: ammo.k,
    id: ammo.id,
  };
};

export const mapLogsDtoToLogs = (practices: LogEntryDto[]) => {
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
    .flat(2)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
};
