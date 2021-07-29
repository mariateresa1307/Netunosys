import React from "react"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"

import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { Card } from "@material-ui/core"
import header from "../../assets/images/2logonet.png"
import Alert from "../../components/customizedSnackbars";

import Particles from "react-particles-js"
/*import { URL_PAGES } from "../../helpers/constants/routes"
import history from "../../helpers/history"
import { menuClose } from "../../actions/menu"*/
import {  useDispatch } from "react-redux"
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { loginAction } from "../../actions/users";
import InputAdornment from "@material-ui/core/InputAdornment";

import clsx from "clsx";
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

  const [values, setValues] = React.useState({
    usuario: "admin",
    password: "1234",
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /*const goTo = (path) => {
    history.push(path)

    setTimeout(function () {
      dispatch(menuClose())
    }, 500)
  }*/

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
          background: "#1A223E",
        }}
      />
      <Grid container justify="center">
        <Grid item xs={5} sm={5} md={4} style={{ zIndex: "20" }}>
          <Card style={{ marginTop: "25%" }}>
            <CssBaseline />
            
      
        <div
          style={{
            height: "170px",
            
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            borderBottomColor: "3px solid #001a39",

            borderBottomWidth: "3px",
            borderBottomStyle: "solid"
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backdropFilter: "blur(2px)",
              backgroundColor: "#ffffff61",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px"
            }}
          >
            <img
              src={header}
              alt=""
              style={{
                width: "100%",
                maxWidth: "260px",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                paddingTop: "30px"
              }}
            />
          </div>
        </div>
        <div
          style={{
            padding: "50px"
          }}
        >
          
              
              <Grid container justify="center" spacing={2}>

              <Grid item xs={12} >
              <Typography component="h1" align="center" variant="h5">
                Iniciar sesión
              </Typography>
              </Grid>

              <form className={classes.form} noValidate>
                
              <Grid item xs={12}>
              <TextField label="Usuario" fullWidth value={values.usuario} onChange={handleChange("usuario")} />
            </Grid>
                <Grid item xs={12}>
              <FormControl fullWidth className={clsx(classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  fullWidth
                  
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            
               
                <Button   type="button" 
                fullWidth variant="contained" 
                color="primary" 
                className={classes.submit} 
                
                onClick={() =>   dispatch(loginAction({ usuario: values.usuario, clave: values.password }))}>
                  Ingresar
                </Button>
              </form>
              <Alert />
              </Grid>
          
              
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
