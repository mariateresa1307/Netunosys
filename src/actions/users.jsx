import { alertError, alertSuccess } from "./alert";
import history from "../helpers/history";
import { URL_PAGES } from "../helpers/constants/routes";
import { USER_DATASET, ROLES } from "../helpers/constants/reducers";
import {
    loginService,
    obtenerUsuarioService,
    
    
  } from "../services/users-service";
const userDataset_success = (dataset) => ({ type: USER_DATASET.SUCCESS, dataset });
const roles_success = (dataset) => ({ type: ROLES.SUCCESS, dataset });

export const loginAction = ({ usuario, clave }) => (dispatch) => {
  const regMail = new RegExp(
    // eslint-disable-next-line
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  );
console.log("action");
  if (!regMail.test(usuario) || clave === null) return dispatch(alertError("Datos son invalidos"));

  loginService({ usuario, clave })
    .then((res) => {
      console.log(res);
      localStorage.setItem("YRYUSER", JSON.stringify(res.data));
      history.push(URL_PAGES.home.path);
    })
    .catch((error) => dispatch(alertError(error.toString())));
};

export const cerrarSesionAction = () => {
  localStorage.removeItem("YRYUSER");
  history.push(URL_PAGES.login.path);
};

export const obtenerUsuarioAction = (payload) => (dispatch) => {
  obtenerUsuarioService(payload)
    .then((res) => {
      dispatch(userDataset_success(res.data));
    })
    .catch((error) => dispatch(alertError(error.toString())));
};

