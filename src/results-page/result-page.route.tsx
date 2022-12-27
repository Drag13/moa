import { RouteObject } from "react-router-dom";
import { AppRoutes } from "../shared/path";
import { LogsPage } from "./result-page";
import { logsPageLoader } from "./result.page.loader";

export const logsPageRoute: RouteObject = {
  path: AppRoutes.Logs(),
  element: <LogsPage />,
  loader: logsPageLoader,
};
