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
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import { guardarUsuarioAction } from "../../actions/users"
import { soloCaracteresSinEspacios, regexCedula, regexCorreo, RegexPassword } from "../../helpers/regex"
import { useDispatch, useSelector } from "react-redux"
import { inicialMayuscula } from "../../helpers/auxiliares"
import FormHelperText from "@material-ui/core/FormHelperText"
import { RolesDeUsuarios } from "../../helpers/constants/rol.constans"

const initialstate = {
  id: null,
  password: {
    value: "",
    error: false,
    mensajeDeError: "* Contraseña no valida, debe tener al menos ocho caracteres donde debe poseer una letra mayúscula y un numero",
  },
  showPassword: false,
  selectedRol: {
    value: "",
    error: false,
    mensajeDeError: "* Debe seleccionar un rol",
  },

  selectedEstatus: {
    value: "",
    error: false,
    mensajeDeError: "* Debe seleccionar un estado",
  },
  cedula: {
    value: true,
    error: false,
    mensajeDeError: " * Cedula no valida",
  },
  nombre: {
    value: "",
    error: false,
    mensajeDeError: " * Nombre no valido",
  },
  apellido: {
    value: "",
    error: false,
    mensajeDeError: " * Apellido no valido",
  },
  correo: {
    value: "",
    error: false,
    mensajeDeError: "* Correo no valido",
  },
  nombreUsuario: {
    value: "",
    error: false,
    mensajeDeError: "* Usuario no valido",
  },
}

const ModalUsuario = (props) => {
  const dispatch = useDispatch()

  const [values, setValues] = React.useState(initialstate)

  /**
   *
   * Guardar valores de cada onChange
   */
  const handleChange = (element) => {
    const input = element.target
    setValues((previousState) => ({ ...previousState, [input.name]: { ...previousState[input.name], value: input.value } }))
  }

  /**
   * Manejar el mostrat u Ocultar clave
   */
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  /**
   * Guadar datos/validacion
   */
  const saveData = () => {
    const State = { ...values }
    let hasError = false
    if (regexCedula.test(values.cedula.value)) {
      State.cedula.error = false
    } else {
      State.cedula.error = true
      hasError = true
    }

    if (soloCaracteresSinEspacios.test(values.nombre.value)) {
      State.nombre.error = false
    } else {
      State.nombre.error = true

      hasError = true
    }
    if (soloCaracteresSinEspacios.test(values.apellido.value)) {
      State.apellido.error = false
    } else {
      State.apellido.error = true
      hasError = true
    }
    if (regexCorreo.test(values.correo.value)) {
      State.correo.error = false
    } else {
      State.correo.error = true
      hasError = true
    }
    if (soloCaracteresSinEspacios.test(values.nombreUsuario.value)) {
      State.nombreUsuario.error = false
    } else {
      State.nombreUsuario.error = true
      hasError = true
    }

    if (RegexPassword.test(values.password.value)) {
      State.password.error = false
    } else {
      State.password.error = true
      hasError = true
    }
    //console.log(values.selectedRol.value)
    if (values.selectedRol.value !== "") {
      State.selectedRol.error = false
    } else {
      State.selectedRol.error = true
      hasError = true
    }

    if (values.selectedEstatus.value !== "") {
      State.selectedEstatus.error = false
    } else {
      State.selectedEstatus.error = true
      hasError = true
    }

    setValues(State)

    if (hasError === false) {
      dispatch(guardarUsuarioAction(values))
    }
  }
  /**
   * Agregar en el localState los valores si se tienen datos a modificar
   */
  React.useEffect(() => {
    // si el modal es abierto
    if (props.open) {
      // Si hay datos en el prop dataToEdit (guarda los datos a modificar)
      if (props.dataToEdit) {
        // setear los valores una sola vez
        //console.log(props.dataToEdit)
        setValues((prev) => ({
          ...prev,
          id: props.dataToEdit.id,
          cedula: { ...prev.cedula, value: props.dataToEdit.cedula },
          nombre: { ...prev.nombre, value: props.dataToEdit.nombre },
          apellido: { ...prev.apellido, value: props.dataToEdit.apellido },
          correo: { ...prev.correo, value: props.dataToEdit.correo },
          nombreUsuario: { ...prev.usuario, value: props.dataToEdit.usuario },
          password: { ...prev.password, value: props.dataToEdit.clave },
          selectedRol: { ...prev.selectedRol, value: props.dataToEdit.rol },

          selectedEstatus: { ...prev.selectedEstatus, value: props.dataToEdit.activo },
        }))
      } else {
        // si esta vacio quiere decir que se abrio para agregar,
        // por lo tanto, todos los campos se resetean a su estado inicial
        setValues(initialstate)
      }
    }
  }, [props.open, props.dataToEdit])

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
                        color: "#5e5e5f",
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
                <TextField
                  label="Cedula"
                  fullWidth
                  variant="filled"
                  value={values.cedula.value}
                  onChange={handleChange}
                  name="cedula"
                  helperText={values.cedula.error ? values.cedula.mensajeDeError : null}
                  error={values.cedula.error}
                  type="number"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Nombre"
                  fullWidth
                  variant="filled"
                  value={values.nombre.value}
                  onChange={handleChange}
                  name="nombre"
                  type="text"
                  helperText={values.nombre.error ? values.nombre.mensajeDeError : null}
                  error={values.nombre.error}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Apellido"
                  fullWidth
                  variant="filled"
                  value={values.apellido.value}
                  onChange={handleChange}
                  name="apellido"
                  helperText={values.apellido.error ? values.apellido.mensajeDeError : null}
                  error={values.apellido.error}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Correo"
                  fullWidth
                  variant="filled"
                  value={values.correo.value}
                  onChange={handleChange}
                  name="correo"
                  helperText={values.correo.error ? values.correo.mensajeDeError : null}
                  error={values.correo.error}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Nombre de Usuario"
                  fullWidth
                  variant="filled"
                  value={values.nombreUsuario.value}
                  onChange={handleChange}
                  name="nombreUsuario"
                  helperText={values.nombreUsuario.error ? values.nombreUsuario.mensajeDeError : null}
                  error={values.nombreUsuario.error}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Password"
                  fullWidth
                  variant="filled"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password.value}
                  onChange={handleChange}
                  name="password"
                  helperText={values.password.error ? values.password.mensajeDeError : null}
                  error={values.password.error}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormControl variant="filled" fullWidth error={values.selectedRol.error}>
                  <InputLabel>Rol Usuario</InputLabel>

                  <Select fullWidth name="selectedRol" value={values.selectedRol.value} onChange={handleChange} variant="filled">
                    <MenuItem value={RolesDeUsuarios.ADMIN}>Administrador</MenuItem>
                    <MenuItem value={RolesDeUsuarios.HELPDESK}>Operador HelpDesk</MenuItem>
                  </Select>
                  <FormHelperText>{values.selectedRol.error ? values.selectedRol.mensajeDeError : null}</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormControl variant="filled" fullWidth error={values.selectedEstatus.error}>
                  <InputLabel>Estado</InputLabel>

                  <Select fullWidth name="selectedEstatus" value={values.selectedEstatus.value} onChange={handleChange} variant="filled">
                    <MenuItem value={true}>Activo</MenuItem>
                    <MenuItem value={false}>Inactivo</MenuItem>
                  </Select>

                  <FormHelperText>{values.selectedEstatus.error ? values.selectedEstatus.mensajeDeError : null}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  textAlign: "right",
                }}
              >
                <Button variant="contained" color="primary" disableElevation onClick={() => saveData()}>
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
