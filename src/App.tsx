import React from "react";
import AppRouter from "./hoc/AppRouter";

import ReactGA from "react-ga4";

const TRACKING_ID = "G-D3Y8ZC86BD";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
}

export default App;
