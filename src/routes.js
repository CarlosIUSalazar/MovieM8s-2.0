import React from "react";
import Login from "./Login";
import Join from "./Join";
import Table from "./components/Table"

const routes = [
  { name: "Login", path: "/", exact: true, main: () => <Login /> },
  { name: "Join", path: "/login", exact: true, main: () => <Join /> }
  //{ name: "Table", path: "/table", exact: true, main: () => <Table /> }

];

export default routes;
