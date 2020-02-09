import React from "react";
import { Route, Redirect, Switch, Router } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import history from "../helpers/history";
import Layout from "./layout";
// DEFINIR RUTAS
const index = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Layout>
        <Route exact path="/home" component={Home} />
      </Layout>
    </Switch>
  </Router>
);

export default index;
