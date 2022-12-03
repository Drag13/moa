import { createHashRouter } from "react-router-dom";
import { mmToMoaRoute } from "./calculator/mm-to-moa.route";
import { LandingRoute } from "./landing/Landing.route";

export const AppRouter = createHashRouter([LandingRoute, mmToMoaRoute]);
