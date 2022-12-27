import { fetchLogs } from "../shared/services/fetch";
import { mapLogsDtoToLogs } from "../shared/services/mapper";

export const practiceResultsLoader = () => {
  return fetchLogs(mapLogsDtoToLogs);
};
