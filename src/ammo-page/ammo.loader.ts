import { useLoaderData } from "react-router-dom";
import { practiceResultsLoader } from "../results-page/results.loader";
import { fpsToM, grnToGram } from "../shared/math";
import { fetchAmmoById } from "../shared/services/fetch";
import { isNullOrEmpty } from "../shared/string";
import { LoaderData } from "../shared/utility-types";
import { AmmoDto } from "../data/migrations/initial-seed";

const mapAmmoDto = (ammo: AmmoDto) => {
  const priceData = ammo.prices.at(-1)!;
  return {
    name: ammo.name,
    price: { value: priceData.price },
    weight: grnToGram(ammo.weightGrn),
    velocityFPS: ammo.velocityFPS,
    velocityM: fpsToM(ammo.velocityFPS),
    bk: ammo.k,
  };
};

export const ammoLoader = async (ammoNameToSearch: string | undefined) => {
  if (isNullOrEmpty(ammoNameToSearch)) {
    return Promise.reject({ code: 400, message: "Bad Request" });
  }

  const ammo = await fetchAmmoById(ammoNameToSearch);

  return ammo
    ? Promise.resolve(ammo).then(mapAmmoDto)
    : Promise.reject({ code: 404, message: "Not Found" });
};

export const ammoPageLoader = ({
  params: { code },
}: {
  params: { code?: string };
}) => {
  return Promise.all([ammoLoader(code), practiceResultsLoader()]).then(
    ([ammo, results]) => ({ ammo, results })
  );
};

export type AmmoPageData = LoaderData<typeof ammoPageLoader>;

export const useAmmoPageData = () => useLoaderData() as AmmoPageData;
