import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Cliente from "./cliente";
import history from "../helpers/history";
import Layout from "./layout";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#1d4688" }
    // secondary: { main: "#007EFF" }
  }
});

// DEFINIR RUTAS
const index = () => (
  <MuiThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route exact path="/home" component={Home} />
          <Route exact path="/cliente" component={Cliente} />
        </Layout>
      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default index;
