import { RouteObject } from "react-router-dom";
import { AppRoutes } from "../shared/path";
import { MoaCalculator } from "./calculator";

export const mmToMoaRoute: RouteObject = {
  path: AppRoutes.Calculator(),
  element: <MoaCalculator />,
  index: true,
};
