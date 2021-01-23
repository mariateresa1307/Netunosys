import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import history from "../helpers/history";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import header from "../assets/images/2logonet.png";
import { useSelector, useDispatch } from "react-redux";
import { menuClose } from "../actions/menu";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import ListAltIcon from "@material-ui/icons/ListAlt";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import ReceiptIcon from "@material-ui/icons/Receipt";
import PaymentIcon from "@material-ui/icons/Payment";
import ApartmentIcon from "@material-ui/icons/Apartment";
import HouseIcon from "@material-ui/icons/House";
import { URL_PAGES } from "../helpers/constants/routes";
import SettingsIcon from "@material-ui/icons/Settings";
import { useTheme } from "@material-ui/core/styles";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import DescriptionIcon from "@material-ui/icons/Description";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import PersonIcon from "@material-ui/icons/Person";
const Menu = (props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const menu = useSelector((store) => store.menu);

  const [state, setState] = useState({
    collapInmueble: false,
    collapPropietario: false,
    collapConfiguracion: false
  });

  const goTo = (path) => {
    history.push(path);

    setTimeout(function () {
      dispatch(menuClose());
    }, 500);
  };

  const handleCollapse = (itemName) => {
    setState((prevState) => {
      let collapesItems = {};
      for (const name in prevState) {
        collapesItems = {
          ...collapesItems,
          [name]: false
        };
      }
      return {
        ...collapesItems,
        [itemName]: !prevState[itemName]
      };
    });
  };

  return (
    <Drawer anchor="left" open={menu.open} onClose={() => dispatch(menuClose())}>
      <div style={{ width: "300px" }}>
        <img
          src={header}
          alt="Administradora Yuruary"
          style={{
            width: "180px",
            textAlign: "center",
            display: "block",
            margin: "auto",
            marginTop: "17px",
            marginBottom: "20px"
          }}
        />
        <Divider style={{ background: theme.palette.secondary.main }} />
        <List>
          <ListItem button onClick={() => goTo(URL_PAGES.home.path)}>
            <ListItemIcon style={{ marginRight: "-15px" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Inicio"} />
          </ListItem>

          <ListItem button onClick={() => handleCollapse("collapInmueble")}>
            <ListItemIcon style={{ marginRight: "-15px" }}>
              <HomeWorkIcon />
            </ListItemIcon>
            <ListItemText primary={"Propiedad"} />
            {state.inmueble ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <div style={{ backgroundColor: "#b5b4b21f" }}>
            <Collapse in={state.collapInmueble} timeout="auto" unmountOnExit style={{ marginLeft: "25px" }}>
              <List component="div" disablePadding>
                <ListItem button onClick={() => goTo(URL_PAGES.inmueble.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Gestión Propiedad "} />
                </ListItem>
                <ListItem button onClick={() => goTo("/reporteInmuheble")} disabled>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <ListAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Reportes Propiedad" />
                </ListItem>
              </List>
            </Collapse>
          </div>

          <ListItem button onClick={() => handleCollapse("collapPropietario")}>
            <ListItemIcon style={{ marginRight: "-15px" }}>
              <RecentActorsIcon />
            </ListItemIcon>
            <ListItemText primary={"Propietario"} />
            {state.collapPropietario ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <div style={{ backgroundColor: "#b5b4b21f" }}>
            <Collapse in={state.collapPropietario} timeout="auto" unmountOnExit style={{ marginLeft: "25px" }}>
              <List component="div" disablePadding>
                <ListItem button onClick={() => goTo(URL_PAGES.gestionPropietario.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary=" Gestion Propietario  " />
                </ListItem>

                <ListItem button onClick={() => goTo(URL_PAGES.gestionBeneficiario.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <FaceIcon />
                  </ListItemIcon>
                  <ListItemText primary=" Gestion Beneficiario  " />
                </ListItem>

                <ListItem button onClick={() => goTo("/reportePropietario")} disabled>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <InsertChartIcon />
                  </ListItemIcon>
                  <ListItemText primary=" Reportes Propietario  " />
                </ListItem>

                <ListItem button onClick={() => goTo("/FacturacionPropietario")} disabled>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <ReceiptIcon />
                  </ListItemIcon>
                  <ListItemText primary="Facturacion Propietario" />
                </ListItem>

                <ListItem button onClick={() => goTo("/EstadoCuentaPropietario")} disabled>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <ListAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Estado de cuenta" />
                </ListItem>

                <ListItem button onClick={() => goTo(URL_PAGES.liquidacion.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <PaymentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Liquidacion de Pagos" />
                </ListItem>
              </List>
            </Collapse>
          </div>

          <ListItem button onClick={() => handleCollapse("collapAlquiler")}>
            <ListItemIcon style={{ marginRight: "-15px" }}>
              <HouseIcon />
            </ListItemIcon>
            <ListItemText primary={"Alquiler"} />
            {state.collapAlquiler ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <div style={{ backgroundColor: "#b5b4b21f" }}>
            <Collapse in={state.collapAlquiler} timeout="auto" unmountOnExit style={{ marginLeft: "25px" }}>
              <List component="div" disablePadding>
                <ListItem button onClick={() => goTo(URL_PAGES.alquiler.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <ApartmentIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Gestión Alquiler"} />
                </ListItem>
                <ListItem button onClick={() => goTo(URL_PAGES.inquilino.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <ApartmentIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Gestión Inquilino"} />
                </ListItem>

                <ListItem button onClick={() => goTo(URL_PAGES.caja.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <PaymentIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Caja"} />
                </ListItem>

                <ListItem button >
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <BrandingWatermarkIcon />
                  </ListItemIcon>
                  <ListItemText primary={""} />
                </ListItem>

                <ListItem button onClick={() => goTo("/FacturacionAlquiler")} disabled>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <ReceiptIcon />
                  </ListItemIcon>
                  <ListItemText primary="Facturacion de Aquileres" />
                </ListItem>

                <ListItem button onClick={() => goTo(URL_PAGES.alquilerReportes.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary="Reportes" />
                </ListItem>
              </List>
            </Collapse>
          </div>

          <ListItem button onClick={() => handleCollapse("collapConfiguracion")}>
            <ListItemIcon style={{ marginRight: "-15px" }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"Configuración"} />
            {state.collapConfiguracion ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <div style={{ backgroundColor: "#b5b4b21f" }}>
            <Collapse in={state.collapConfiguracion} timeout="auto" unmountOnExit style={{ marginLeft: "25px" }}>
              <List component="div" disablePadding>
                <ListItem button onClick={() => goTo(URL_PAGES.configMonedas.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <AutorenewIcon />
                  </ListItemIcon>
                  <ListItemText primary={""} />
                </ListItem>

                <ListItem button onClick={() => goTo(URL_PAGES.configUsuarios.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={""} />
                </ListItem>
              </List>
            </Collapse>
          </div>
          <Divider />
          <ListItem button >
            <ListItemIcon style={{ marginRight: "-15px" }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={"Cerrar sesión"} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Menu;
