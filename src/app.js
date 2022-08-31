import React from "react";
import { BrowserRouter as Routes, useRoutes } from "react-router-dom";
import routeData from "./router";

const Router = () => useRoutes(routeData);

const App = () => {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
      <Router />
    </Routes>
  );
};

export default App;
