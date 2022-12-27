import { PureComponent, ReactNode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ammoPageRoute } from "./ammo-page/ammo-page.route";
import { mmToMoaRoute } from "./calculator-page/mm-to-moa.route";
import { Layout } from "./Layout";
import { logsPageRoute } from "./results-page/result-page.route";

const AppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [logsPageRoute, mmToMoaRoute, ammoPageRoute],
    },
  ]);

export class AppRouterProvider extends PureComponent {
  render(): ReactNode {
    return <RouterProvider router={AppRouter()}></RouterProvider>;
  }
}
