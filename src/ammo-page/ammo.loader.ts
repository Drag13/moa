import { useLoaderData } from "react-router-dom";
import { fetchAmmoById } from "../data/fetch/ammo";
import { fetchLogs } from "../data/fetch/log";
import { mapAmmoDtoToAmmo, mapLogsDtoToLogs } from "../shared/services/mapper";
import { isNullOrEmpty } from "../shared/string";
import { LoaderData } from "../shared/utility-types";

export const ammoLoader = async (ammoNameToSearch: string | undefined) => {
  if (isNullOrEmpty(ammoNameToSearch)) {
    return Promise.reject({ code: 400, message: "Bad Request" });
  }

  const ammo = await fetchAmmoById(ammoNameToSearch, mapAmmoDtoToAmmo);

  return ammo ? ammo : Promise.reject({ code: 404, message: "Not Found" });
};

export const ammoPageLoader = ({
  params: { code },
}: {
  params: { code?: string };
}) => {
  return Promise.all([ammoLoader(code), fetchLogs(mapLogsDtoToLogs)]).then(
    ([ammo, results]) => ({ ammo, results })
  );
};

export type AmmoPageData = LoaderData<typeof ammoPageLoader>;

export const useAmmoPageData = () => useLoaderData() as AmmoPageData;
