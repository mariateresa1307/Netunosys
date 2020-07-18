import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "react-particles-js";
import LogoNetuno from "../../assets/images/logo_netuno1.png";
import Netuno from "../../assets/images/netuno2.png";
import { Animated } from "react-animated-css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        NetUno
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "#060a25",
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    display: "inline-block",
    margin: theme.spacing(6),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  panelIzqierdo: {
    width: "100%",
    height: "100%",
  },

  [theme.breakpoints.down("md")]: {
    panelIzqierdo: {
      display: "none",
    },
  },
  [theme.breakpoints.up("md")]: {
    panelIzqierdo: {
      display: "block",
    },
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <>
      <Particles
        className="loginParticles"
        params={{
          particles: {
            number: {
              value: 140,
            },
            lineLinked: {
              color: "#f26807",
            },
            density: {
              enable: true,
            },
            size: {
              value: 3,
            },
          },

          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />

      <Grid container className={classes.root}>
        <Grid item xs={false} sm={false} md={7} lg={6}>
          <div className={classes.panelIzqierdo}>
            <Animated
              animationIn="lightSpeedIn"
              animationOut="fadeOutDown"
              animationInDuration={1800}
              animationOutDuration={1800}
              isVisible={true}
              className="login"
            >
              <img src={LogoNetuno} alt="" style={{ width: " 574px" }} />
            </Animated>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={6} style={{ zIndex: 1 }}>
          <Card
            style={{
              height: "100%",
            }}
            elevation={6}
          >
            <CardContent>
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <img src={Netuno} alt="" />
              </div>
              <Typography component="h1" variant="h5" align="center">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="User"
                  label="User"
                  name="User"
                  autoComplete="User"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  href="/home"
                  style={{ backgroundColor: "#060a25" }}
                >
                  Sign In
                </Button>

                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
