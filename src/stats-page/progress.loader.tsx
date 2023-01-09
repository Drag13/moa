import { useLoaderData } from "react-router-dom";
import { fetchLogs } from "../data/fetch/log";
import { mapLogsDtoToLogs } from "../shared/services/mapper";
import { LoaderData } from "../shared/utility-types";

export function statsLoader() {
  return fetchLogs(mapLogsDtoToLogs);
}

export function useStatsData() {
  return useLoaderData() as LoaderData<typeof statsLoader>;
}
