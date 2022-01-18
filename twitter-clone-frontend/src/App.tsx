import { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "./routes";

import "./App.css";

function App() {
  return (
    <Suspense fallback={<div></div>}>
      <HashRouter>{renderRoutes(routes)}</HashRouter>
    </Suspense>
  );
}

export default App;
