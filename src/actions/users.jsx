import { alertError, alertSuccess } from "./alert"
import history from "../helpers/history"
import { URL_PAGES } from "../helpers/constants/routes"
import { USER_DATASET, OCPE } from "../helpers/constants/reducers"
import { loginService, guardarUsuarioService, obtenerUsuarioService, obtenerCantidadPorEstadoService, logOutService } from "../services/users-service"
import { soloCaracteresSinEspacios, RegexPassword } from "../helpers/regex"

const userDataset_success = (dataset) => ({ type: USER_DATASET.SUCCESS, dataset })
const obtenerCantidadPorEstadoSuccess = (dataset) => ({ type: OCPE.SUCCESS, dataset })

export const loginAction = ({ usuario, clave }) => (dispatch) => {
  const regMail = new RegExp(
    // eslint-disable-next-line
    soloCaracteresSinEspacios
  )
  const regMail1 = new RegExp(
    // eslint-disable-next-line
    RegexPassword
  )

  if (!regMail.test(usuario) || !regMail1.test(clave) === null) return dispatch(alertError("Datos son invalidos"))

  loginService({ usuario, clave })
    .then((res) => {
      //   console.log("aqui2")
      localStorage.setItem("NETUNOTOKEN", res.data.token)
      history.push(URL_PAGES.home.path)
    })
    .catch((error) => dispatch(alertError(error.toString())))
}
/*------------------------------------------------------------- */
export const logOutAction = (payload) => (dispatch) => {
  logOutService(payload)
    .then((res) => {
      //console.log("aqui2")
      localStorage.clear()

      history.push(URL_PAGES.login.path)
    })
    .catch((error) => dispatch(alertError(error.toString())))
}
/*-------------------------------------------------------------*/
export const obtenerUsuarioAction = (payload) => (dispatch) => {
  obtenerUsuarioService(payload)
    .then((res) => {
      //console.log(res.data)
      dispatch(userDataset_success(res.data))
    })
    .catch((error) => dispatch(alertError(error.toString())))
}

export const guardarUsuarioAction = (payload) => (dispatch) => {
  guardarUsuarioService(payload)
    .then((res) => {
      dispatch(alertSuccess("Guardado"))
    })
    .catch((error) => dispatch(alertError(error.toString())))
}

export const obtenerCantidadPorEstadoAction = (payload) => (dispatch) => {
  obtenerCantidadPorEstadoService(payload)
    .then((res) => {
      dispatch(obtenerCantidadPorEstadoSuccess(res.data))
    })
    .catch((error) => dispatch(alertError(error.toString())))
}
