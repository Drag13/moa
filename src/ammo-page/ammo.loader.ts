import { useLoaderData } from "react-router-dom";
import ammos from "../data/ammo.json";
import { fpsToM, grnToGram } from "../shared/math";
import { isNullOrEmpty, matchCaseInsensitive } from "../shared/string";
import { LoaderData } from "../shared/utility-types";

type AmmoDto = typeof ammos[number];

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

export const ammoPageLoader = ({ params }: { params: { code?: string } }) => {
  const ammoNameToSearch = params.code;

  if (isNullOrEmpty(ammoNameToSearch)) {
    return Promise.reject({ code: 400, message: "Bad Request" });
  }

  const ammo = ammos.find((a) => matchCaseInsensitive(a.id, ammoNameToSearch));

  return ammo
    ? Promise.resolve(ammo).then(mapAmmoDto)
    : Promise.reject({ code: 404, message: "Not Found" });
};

export type AmmoPageData = LoaderData<typeof ammoPageLoader>;

export const useAmmoPageData = () => useLoaderData() as AmmoPageData;
