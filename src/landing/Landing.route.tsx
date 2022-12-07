import { RouteObject } from "react-router-dom";
import { AppRoutes } from "../shared/path";
import { Landing } from "./Landing";
import { landingLoader } from "./landing.loader";

export const LandingRoute: RouteObject = {
  path: AppRoutes.Logs,
  element: <Landing />,
  loader: landingLoader,
};
