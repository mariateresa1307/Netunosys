import React from "react"
import CustomModal from "../../components/customModal"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import { Spring } from "react-spring/renderprops"
import IconButton from "@material-ui/core/IconButton"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import InputAdornment from "@material-ui/core/InputAdornment"
import FilledInput from "@material-ui/core/FilledInput"
import Typography from "@material-ui/core/Typography"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import Select from "@material-ui/core/Select"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}))

const ModalUsuario = (props) => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  })
  const [age, setAge] = React.useState("")

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <CustomModal header={" Gestionar Usuarios"} {...props}>
        <Grid
          container
          spacing={4}
          justify="center"
          style={{
            marginTop: "20px",
          }}
        >
          <Grid item xs={12} sm={9} md={8} ls={6}>
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                style={{
                  textAlign: "center",
                }}
              >
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={300}>
                  {(springProps) => (
                    <AccountCircleIcon
                      style={{
                        color: "#a9a9a9",
                        fontSize: "200px",
                        ...springProps,
                      }}
                    />
                  )}
                </Spring>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  textAlign: "center",
                }}
              >
                <Typography variant="h5">Datos del usuario</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField label="Cedula" fullWidth variant="filled" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField label="Nombre" fullWidth variant="filled" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField label="Apellido" fullWidth variant="filled" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField label="Correo" fullWidth variant="filled" />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment fullWdth position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth variant="filled">
                  <InputLabel id="demo-simple-select-filled-label">Rol </InputLabel>
                  <Select fullWidth labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={age} onChange={handleChange}>
                    <MenuItem value={10}>Administrador</MenuItem>
                    <MenuItem value={20}>HelpDesk</MenuItem>
                    <MenuItem value={30}>Supervisor</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid
                item
                xs={12}
                style={{
                  textAlign: "right",
                }}
              >
                <Button variant="contained" color="primary" disableElevation>
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CustomModal>
    </>
  )
}

export default ModalUsuario
