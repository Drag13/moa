const METERS_IN_100_YARDS = 91.44;
const MM_IN_1_INCH = 25.6;
const K = METERS_IN_100_YARDS / MM_IN_1_INCH;

export const calculateScoreMetric = (spread: number, distance: number) =>
  distance === 0 ? 0 : K * (spread / distance);
