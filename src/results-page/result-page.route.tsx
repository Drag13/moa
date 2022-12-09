import { RouteObject } from "react-router-dom";
import { AppRoutes } from "../shared/path";
import { ResultsPage } from "./result-page";
import { resultPageLoader } from "./result.page.loader";

export const resultsPageRoute: RouteObject = {
  path: AppRoutes.Logs(),
  element: <ResultsPage />,
  loader: resultPageLoader,
};
