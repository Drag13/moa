import React from "react";
import { AppRoutes } from "../shared/path";
import NewLogEntryPage from "./new-log-page";

export const newLogPageRoute = {
  path: AppRoutes.NewLogPage(),
  element: <NewLogEntryPage />,
};
