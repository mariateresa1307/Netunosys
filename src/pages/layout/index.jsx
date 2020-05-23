import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import LogoNetuno from "../../assets/images/netuno.png";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AssignmentIcon from "@material-ui/icons/Assignment";
import RouterIcon from "@material-ui/icons/Router";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import RecentActorsIcon from "@material-ui/icons/RecentActors";


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
    boxShadow: "none"
  },
  appBar: {
    backGroundColor: "#1d4688",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    zIndex: 1,
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class index extends Component {
  constructor(props) {
    super(props);

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      open: false,
      openInv: false
    };
  }

  handleClick() {
    this.setState(prevState => ({ openInv: !prevState.openInv }));
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          elevation={0}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: this.state.open
          })}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(
                classes.menuButton,
                this.state.open && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Client IP Inventory
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <img
              src={LogoNetuno}
              alt="NETUNO"
              style={{
                width: "150px",
                textAlign: "center",
                display: "block",
                margin: "auto"
              }}
            />
            <IconButton onClick={this.handleDrawerClose}>
              {this.state.open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
         
          <List>
              <ListItem button key={"Home"}  component={Link}  to="/home" >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>

            <ListItem
              button
              okey={"Client Inventory"}
              onClick={this.handleClick}
            >
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary="Client Inventory" />
              {this.state.openInv ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={this.state.openInv} timeout="auto" unmountOnExit>
              <Link to="/cliente">
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <RecentActorsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Clientes Inventory" />
                  </ListItem>
                </List>
              </Link>

              <Link to="/DSoft">
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <RemoveCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Desconectados Soft" />
                  </ListItem>
                </List>
              </Link>

              <Link to="/PorInstalar">
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Por Instalar" />
                  </ListItem>
                </List>
              </Link>
            </Collapse>

            <Link to="/vlanInventory">
            <ListItem button key={"Vlan Inventory"}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={"Vlan Inventory"} />
            </ListItem>
              </Link>

            <ListItem button key={"Super Bloques IP"}>
              <ListItemIcon>
                <RouterIcon />
              </ListItemIcon>
              <ListItemText primary={"Super Bloques IP"} />
            </ListItem>

            <ListItem button key={"Servicios"}>
              <ListItemIcon>
                <SettingsInputAntennaIcon />
              </ListItemIcon>
              <ListItemText primary={"Servicios"} />
            </ListItem>
          </List>

          <Divider />
          <List>
            {["All Inventory", "Reportes", "User"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
   
        <div
          id="1234"
          style={{
            height: "226px",
            width: "100%",
            position: "fixed",
            zIndex: "0",
            backgroundImage:
              "linear-gradient(to top, #aae1ed, #7db8d1, #588fb5, #3f6796, #304074)",
            borderBottom: "3px solid #ff8d04"
          }}
        ></div>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: this.state.open
          })}
        >
          <div className={classes.drawerHeader} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(index);
