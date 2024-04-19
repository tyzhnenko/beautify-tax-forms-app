import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";

import log from "loglevel";

// import "../public/css/tailwind.css";

if (process.env.NODE_ENV === "development") {
  log.setLevel("debug");
} else {
  log.setLevel("error");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
