import { AppRoutes } from "../shared/path";
import { NewLogPage } from "./new-log-page";

export const newLogPageRoute = {
  path: AppRoutes.NewLogPage(),
  element: <NewLogPage />,
};
