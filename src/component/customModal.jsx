import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import MuiDialogContent from "@material-ui/core/DialogContent";
import building from "../assets/images/me.jpg";
import fiber from "../assets/images/fiber0.jpg";
import fiber2 from "../assets/images/fiber1.jpg";
import { render } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    margin: 0,
    padding: theme.spacing(2),
    //backgroundColor: ,
    height: "50px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();

  let bgimg = "";
  if (props.variant === "cliente") {
    bgimg = building;
  } else if (props.variant === "vlan") {
    bgimg = fiber;
  } else if (props.variant === "ip") {
    bgimg = fiber2;
  }
  return (
    <div>
      <Dialog
        fullScreen
        open={props.handleaction}
        onClose={props.close}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.close}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Agregar Nuevo
            </Typography>
            <Button
              autoFocus
              color="inherit" //onClick={handleClose}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <MuiDialogContent
          dividers
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            backgroundPositionX: "center",
          }}
        >
          {props.children}
        </MuiDialogContent>
      </Dialog>
    </div>
  );
}
