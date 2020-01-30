import React from "react";
import { Route, Redirect, Switch, Router } from "react-router-dom";
import Login from "./login"
import history from "../helpers/history";


const index = () => (

    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Login} />

        </Switch>
    </Router>

);

export default index;