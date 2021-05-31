import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { Card } from "@material-ui/core"
import header from "../../assets/images/2logonet.png"
import Divider from "@material-ui/core/Divider"
import Particles from "react-particles-js"
import { URL_PAGES } from "../../helpers/constants/routes"
import history from "../../helpers/history"
import { useSelector, useDispatch } from "react-redux"
import { menuClose } from "../../actions/menu"
import Fondo from "../../assets/images/fondo.jpg"
const params = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
}

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
  )
}

const useStyles = makeStyles((theme) => ({
  body: {
    height: "50%",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "50%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignIn() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const goTo = (path) => {
    history.push(path)

    setTimeout(function () {
      dispatch(menuClose())
    }, 500)
  }

  React.useEffect(() => {
    const r = document.getElementById("root")
    r.style.height = "100%"

    const b = document.getElementsByTagName("body")
    b[0].style.height = "100%"

    const h = document.getElementsByTagName("html")
    h[0].style.height = "100%"
  }, [])

  return (
    <>
      <Particles
        params={params}
        style={{
          position: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url("${Fondo}")`,
        }}
      />
      <Grid container justify="center">
        <Grid item xs={5} sm={5} md={4} style={{ zIndex: "20" }}>
          <Card style={{ marginTop: "25%" }}>
            <CssBaseline />
            <div className={classes.paper} style={{ marginTop: "50px", marginBottom: "80px" }}>
              <img // image
                src={header}
                alt="Administradora Yuruary"
                style={{
                  maxWidth: "300px",
                  width: "110%",
                  textAlign: "center",
                  display: "block",
                  margin: "auto",
                  marginTop: "-22px",
                  marginBottom: "0px",
                }}
              />
              <Divider />
              <Typography component="h1" variant="h5">
                Iniciar Sesion
              </Typography>
              <form className={classes.form} noValidate>
                <TextField variant="outlined" margin="normal" required fullWidth id="User" label="Usuario" name="User" autoComplete="email" autoFocus />
                <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordarme" />
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={() => goTo(URL_PAGES.home.path)}>
                  Ingresar
                </Button>
              </form>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Copyright />
        </Grid>
      </Grid>
    </>
  )
}
