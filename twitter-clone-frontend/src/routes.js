import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/Login" />,
  },
  {
    path: "/login",
    exact: true,
    component: lazy(() => import("./View/Login")),
  },
  {
    path: "/signup",
    exact: true,
    component: lazy(() => import("./View/SignUp")),
  },
];

export default routes;
