import { useState } from "react";
import { calculateScoreMetric } from "./calculate";

const calculateFromString = (
  stringSpread: string,
  stringDistance: string
): number => {
  const spread = +stringSpread;
  const distance = +stringDistance;

  const isSmtNaN = Number.isNaN(spread) || Number.isNaN(distance);

  return isSmtNaN ? 0 : calculateScoreMetric(spread, distance);
};

export const useMoaCalculator = (initialSpread = 10, initialDistance = 50) => {
  const [params, setParams] = useState({
    spread: initialSpread.toString(),
    distance: initialDistance.toString(),
  });

  const setSpread = (spread: string) => setParams({ ...params, spread });
  const setDistance = (distance: string) => setParams({ ...params, distance });

  const { spread, distance } = params;
  const moa = calculateFromString(spread, distance);

  return {
    spread,
    distance,
    moa,
    setSpread,
    setDistance,
  };
};
