import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import history from "../helpers/history";
import Layout from "../components/layout";
import Home from "./home";
import User from "./user";
import login from "./login";
import notFound from "./notFound";
import { URL_PAGES } from "../helpers/constants/routes";
import { AnimatedRoute } from "react-router-transition";

const Animate = ({ component, ...otherProps }) => {
  const comp = () => {
    return <div style={{ zIndex: 3, padding: "20px", paddingBottom: "130px" }}>{component}</div>;
  };

  return (
    <AnimatedRoute
      component={comp}
      {...otherProps}
      atEnter={{ offset: -100 }}
      atLeave={{ offset: -100 }}
      atActive={{ offset: 0 }}
      mapStyles={(styles) => ({
        width: "100%",
        minWidth: "360px",
        position: "absolute",
        zIndex: 2,
        marginTop: "48px",
        marginBottom: "80px",
        transform: styles.offset !== 0 ? `translateX(${styles.offset}%)` : ""
      })}
    />
  );
};

function PagesIndex() {
  return (
    <Router history={history}>
      <Switch>
      <Route exact path={URL_PAGES.login.path} component={login} />
        <Route exact path={URL_PAGES.notFound.path} component={notFound} />
        <Layout>
          <Animate exact path={URL_PAGES.home.path} component={<Home />} />
          <Animate exact path={URL_PAGES.user.path} component={<User />} />
          </Layout>
      </Switch>
    </Router>
  );
}

export default PagesIndex;
