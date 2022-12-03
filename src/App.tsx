import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./AppRouter";

import "./App.css";

function App() {
  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;
