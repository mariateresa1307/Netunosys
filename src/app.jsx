import React from "react"
import { Route, Switch, Router } from "react-router-dom"
import history from "./helpers/history"
import Layout from "./components/layout"
import login from "./pages/login"
import Home from "./pages/home"
import ClienteIP from "./pages/customersIp"
import Customers from "./pages/customers"
import Ip from "./pages/asignamentIp/index"
import AsignacionRecursos from "./pages/assignmentResources/vlans"
import Recurso from "./pages/assignmentResources/dslam/index"
import User from "./pages/user"
import AdminUser from "./pages/user/adminUser"
import notFound from "./pages/notFound"
import { URL_PAGES } from "./helpers/constants/routes"
import { AnimatedRoute } from "react-router-transition"
import ReporteCliente from "./pages/customers/report"
import Notification from "./pages/configure/notification"
import Incidencia from "./pages/incidence/index"
import Ftto from "./pages/ftto/index"
const Animate = ({ component, ...otherProps }) => {
  const comp = () => {
    return <div style={{ zIndex: 3, padding: "20px", paddingBottom: "130px" }}>{component}</div>
  }

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
        transform: styles.offset !== 0 ? `translateX(${styles.offset}%)` : "",
      })}
    />
  )
}

function PagesIndex() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={URL_PAGES.login.path} component={login} />
        <Route exact path={URL_PAGES.notFound.path} component={notFound} />
        <Layout>
          <Animate exact path={URL_PAGES.home.path} component={<Home />} />
          <Animate exact path={URL_PAGES.notification.path} component={<Notification />} />
          <Animate exact path={URL_PAGES.reporteCliente.path} component={<ReporteCliente />} />
          <Animate exact path={URL_PAGES.clienteIp.path} component={<ClienteIP />} />
          <Animate exact path={URL_PAGES.customers.path} component={<Customers />} />
          <Animate exact path={URL_PAGES.asignacionRecursos.path} component={<AsignacionRecursos />} />
          <Animate exact path={URL_PAGES.ip.path} component={<Ip />} />
          <Animate exact path={URL_PAGES.recurso.path} component={<Recurso />} />
          <Animate exact path={URL_PAGES.user.path} component={<User />} />
          <Animate exact path={URL_PAGES.adminUser.path} component={<AdminUser />} />
          <Animate exact path={URL_PAGES.incidenciaCliente.path} component={<Incidencia />} />
          <Animate exact path={URL_PAGES.ftto.path} component={<Ftto />} />
        </Layout>
      </Switch>
    </Router>
  )
}

export default PagesIndex
