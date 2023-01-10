import { useLoaderData } from "react-router-dom";
import { fetchAllAmmos } from "../data/fetch/ammo";
import { fetchLogs } from "../data/fetch/log";
import { mapAmmoDtoToAmmo, mapLogsDtoToLogs } from "../shared/services/mapper";
import { LoaderData } from "../shared/utility-types";

export const logsPageLoader = () =>
  Promise.all([
    fetchAllAmmos(mapAmmoDtoToAmmo),
    fetchLogs(mapLogsDtoToLogs),
  ]).then(([ammos, logs]) => ({
    ammos,
    logs,
  }));

export type ResultPageData = LoaderData<typeof logsPageLoader>;
export const useResultPageData = () => {
  return useLoaderData() as ResultPageData;
};
