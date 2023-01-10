import { PureComponent, ReactNode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ammoPageRoute } from "./ammo-page/ammo-page.route";
import { BASE_PATH } from "./appconst";
import { mmToMoaRoute } from "./calculator-page/mm-to-moa.route";
import { Layout } from "./Layout";
import { newLogPageRoute } from "./new-log-page/new-log-page.route";
import { logsPageRoute } from "./results-page/result-page.route";
import { progressPageRoute } from "./stats-page/progress-page.route";

const createAppRouter = () =>
  createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          logsPageRoute,
          mmToMoaRoute,
          ammoPageRoute,
          newLogPageRoute,
          progressPageRoute,
        ],
      },
    ],
    { basename: BASE_PATH }
  );

export class AppRouterProvider extends PureComponent {
  render(): ReactNode {
    return <RouterProvider router={createAppRouter()}></RouterProvider>;
  }
}
