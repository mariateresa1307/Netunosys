import React from "react";
import {Select ,Button ,TextField, Typography, MenuItem, FormControl,InputLabel, Divider, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import clx from "classnames";
import CardContent from "@material-ui/core/CardContent";
import ModalResource from "../../../../components/modalResources"

import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  base: {
    position: "relative",
    borderRadius: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      paddingLeft: "0px",
      paddingTop: "10px"
    }
  },
  titleText: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      display: "block"
    }
  },

  normal: {
    backgroundColor: "#304074"
  },
  danger: {
    backgroundColor: "#f74e4ee8"
  }
}));

const ModalClient = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  return (
    <>
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden"
        }}
      >
        <div
          style={{
            minWidth: "500px"
          }}
        >
          <div className={clx(classes.base, classes.normal)}>
            <Grid container>
              <Grid item xs={12} sm={9} md={8}>
                <Typography variant="subtitle1" className={classes.titleText}>
                 Tarjetas y Puertos
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3} md={4} style={{ textAlign: "right" }}>
                <Tooltip title="Crear nuevo Recurso">
                  <IconButton onClick={handleClickOpen}>
                    <AddIcon style={{ color: "white" }} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </div>
          <Card
            style={{
              marginTop: "-40px",
              paddingTop: "40px",
              marginLeft: "40px",
              marginRight: "40px",
              background: "#ffffff85"
            }}
            elevation={0}
            variant={"elevation"}
          >
            <CardContent
              style={{
                marginLeft: "20px",
                marginRight: "20px"
              }}
            >
          
            </CardContent>
          </Card>
        </div>
      </div>

      <ModalResource open={open} handleClose={handleClose} tittle={"Gestionar Recursos"} />
    </>
  );
};

export default ModalClient;
