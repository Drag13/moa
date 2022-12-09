import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../shared/utility-types";
import { ammoLoader } from "./ammo.loader";
import { practiceResultsLoader } from "./results.loader";

export const resultPageLoader = () =>
  Promise.all([ammoLoader(), practiceResultsLoader()]).then(
    ([ammos, logs]) => ({
      ammos,
      logs,
    })
  );

export type ResultPageData = LoaderData<typeof resultPageLoader>;
export const useResultPageData = () => {
  return useLoaderData() as ResultPageData;
};
