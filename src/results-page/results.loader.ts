import { fetchLogs } from "../shared/services/fetch/log";
import { mapLogsDtoToLogs } from "../shared/services/mapper";

export const practiceResultsLoader = () => {
  return fetchLogs(mapLogsDtoToLogs);
};
