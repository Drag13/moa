import { useLoaderData } from "react-router-dom";
import ammos from "../data/ammo.json";
import { LoaderData } from "../shared/utility-types";

const mapAmmoDto = (ammo: any) => {
  const priceData = ammo.prices.at(-1);
  return { name: ammo.name, price: { value: priceData.price } };
};

export const ammoPageLoader = ({ params }: { params: { code?: string } }) => {
  const ammoNameToSearch = params.code;

  // TODO: write isNullOrEmpty
  if (ammoNameToSearch == null || ammoNameToSearch === "") {
    return Promise.reject({ code: 400, message: "Bad Request" });
  }

  // TODO: write match function for strings
  const ammo = ammos.find(
    (a) => a.id.toLocaleLowerCase() === ammoNameToSearch.toLocaleLowerCase()
  );

  return ammo
    ? Promise.resolve(ammo).then(mapAmmoDto)
    : Promise.reject({ code: 404, message: "Not Found" });
};

export type AmmoPageData = LoaderData<typeof ammoPageLoader>;

export const useAmmoPageData = () => {
  return useLoaderData() as AmmoPageData;
};
