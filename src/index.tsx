import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

const ROOT_SELECTOR = "#root";
const HTMLRoot = document.querySelector(ROOT_SELECTOR);

if (HTMLRoot == null) {
  throw new Error(`Root element with selector ${ROOT_SELECTOR} doesn't exists`);
}

ReactDOM.createRoot(HTMLRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();
