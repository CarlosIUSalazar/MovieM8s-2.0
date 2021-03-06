import React from "react";
import Login from "./Login";
import Join from "./Join";

const routes = [
  { name: "Login", path: "/", exact: true, main: () => <Login /> },
  { name: "Join", path: "/login", exact: true, main: () => <Join /> }
];

export default routes;
