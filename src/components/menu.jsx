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
    collapCliente: false,
    collapVlan: false,
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

          <ListItem button onClick={() => handleCollapse("collapCliente")}>
            <ListItemIcon style={{ marginRight: "-15px" }}>
              <HomeWorkIcon />
            </ListItemIcon>
            <ListItemText primary={"Clientes"} />
            {state.inmueble ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <div style={{ backgroundColor: "#b5b4b21f" }}>
            <Collapse in={state.collapCliente} timeout="auto" unmountOnExit style={{ marginLeft: "25px" }}>
              <List component="div" disablePadding>
                <ListItem button onClick={() => goTo(URL_PAGES.inmueble.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Clientes IP "} />
                </ListItem>
              </List>
            </Collapse>
          </div>

          <ListItem button onClick={() => handleCollapse("collapVlan")}>
            <ListItemIcon style={{ marginRight: "-15px" }}>
              <RecentActorsIcon />
            </ListItemIcon>
            <ListItemText primary={"Asignacion de Vlan"} />
            {state.collapVlan ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <div style={{ backgroundColor: "#b5b4b21f" }}>
            <Collapse in={state.collapVlan} timeout="auto" unmountOnExit style={{ marginLeft: "25px" }}>
              <List component="div" disablePadding>
                <ListItem button onClick={() => goTo(URL_PAGES.gestionPropietario.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary=" Gestion de Vlan  " />
                </ListItem>

                <ListItem button onClick={() => goTo(URL_PAGES.gestionBeneficiario.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <FaceIcon />
                  </ListItemIcon>
                  <ListItemText primary=" Gestion Dslam  " />
                </ListItem>

            
              </List>
            </Collapse>
          </div>

          <ListItem button onClick={() => handleCollapse("collapIP")}>
            <ListItemIcon style={{ marginRight: "-15px" }}>
              <HouseIcon />
            </ListItemIcon>
            <ListItemText primary={"IP"} />
            {state.collapIP ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <div style={{ backgroundColor: "#b5b4b21f" }}>
            <Collapse in={state.collapIP} timeout="auto" unmountOnExit style={{ marginLeft: "25px" }}>
              <List component="div" disablePadding>
                <ListItem button onClick={() => goTo(URL_PAGES.ip.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <ApartmentIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Gestión IP"} />
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

                <ListItem button onClick={() => goTo(URL_PAGES.configUsuarios.path)}>
                  <ListItemIcon style={{ marginRight: "-15px" }}>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Gestion de Usuarios"} />
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
