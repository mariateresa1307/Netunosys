import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "./menu";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { menuOpen } from "../actions/menu";
import history from "../helpers/history";
import { URL_PAGES } from "../helpers/constants/routes";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import CustomizedSnackbars from "./customizedSnackbars";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import Drawer from "@material-ui/core/Drawer";
import DrawerNoti from "./drawernoti";
import moment from "moment";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "rgba(48, 64, 116, 0.5)",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
 
  
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    zIndex: 1,
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
  },
  contenthome: {
    zIndex: 1,
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "#ff1583"
  }
}))(Badge);

function checkIsValidPage() {
  let validPage = false;
  for (const section in URL_PAGES) {
    if (URL_PAGES[section].path === history.location.pathname) {
      validPage = true;
    }
  }

  return validPage;
}


export default function Layout(props) {
  const classes = useStyles();
  const dispatch = useDispatch();


  

  
  const [notification, setNotification] = React.useState(false);

  const validPage = checkIsValidPage();
  if (!validPage) history.push(URL_PAGES.notFound.path);

  

  return (
    <div className={classes.root} style={{ minWidth: "360px" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={0}
          className={clsx(classes.appBar, "headerblr")}
        >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu"
          onClick={() => dispatch(menuOpen())}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            NETUNO
          </Typography>
    
          <div>
            <IconButton style={{ color: "white" }} onClick={() => setNotification(true)}>
              <StyledBadge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </StyledBadge>
            </IconButton>
            <Drawer anchor={"right"} open={notification} onClose={() => setNotification(false)}>
              <DrawerNoti />
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
      <Menu />
      <div
        style={{
          height: "200px",
          width: "100%",
          minWidth: "360px",
          position: "absolute",
          zIndex: 1,
          backgroundColor: "#304074",
          borderBottom: "5px solid #ff8d04"
        }}
      />
      {props.children}
      <CustomizedSnackbars />
    </div>
  );
}
