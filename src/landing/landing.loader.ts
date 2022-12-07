import { useLoaderData } from "react-router-dom";
import ammoData from "../data/ammo.json";
import practiceResults from "../data/log.json";
import { LoaderData } from "../shared/utility-types";
import { mapAmmosDto, mapPracticesDto } from "./landing.mapper";

export const landingLoader = () =>
  Promise.resolve({
    practiceResults: mapPracticesDto(practiceResults),
    ammoData: mapAmmosDto(ammoData),
  });

type LandingData = LoaderData<typeof landingLoader>;

export const usePracticeData = () => {
  const { practiceResults } = useLoaderData() as LandingData;
  return practiceResults;
};

export const useAmmoData = () => {
  const { ammoData } = useLoaderData() as LandingData;
  return ammoData;
};
