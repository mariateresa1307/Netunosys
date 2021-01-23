import { alertError } from "./alert";
import { success } from "../helpers/auxiliares";
import { CONFIGURACION } from "../helpers/constants/reducers";
import {
  obtenerCambioDelDia,
  obtenerListaYConteoDeBancosRegistrados,
  listarBancosService,
  guardarBanco,
  borrarBanco,
  guardarNuevaTasa,
  obtenerIVA,
  guardarNuevoIVA
} from "../services/configuracion";

export const obtenerCambioDelDiaAction = (moneda) => (dispatch) => {
  obtenerCambioDelDia(moneda)
    .then((res) => {
      switch (moneda) {
        case "USD":
          return dispatch(success(CONFIGURACION.SUCCESS_OBTENER_CAMBIO_DEL_DIA_USD, res.data));
        case "EUR":
          return dispatch(success(CONFIGURACION.SUCCESS_OBTENER_CAMBIO_DEL_DIA_EUR, res.data));
        case "PTR":
          return dispatch(success(CONFIGURACION.SUCCESS_OBTENER_CAMBIO_DEL_DIA_PTR, res.data));
        default:
          console.log("ok");
          break;
      }
    })
    .catch((error) => dispatch(alertError(error.toString())));
};

export const obtenerListaYConteoDeBancosRegistradosAction = () => (dispatch) => {
  obtenerListaYConteoDeBancosRegistrados()
    .then((res) => {
      dispatch(success(CONFIGURACION.SUCCESS_OBTENER_LISTA_Y_CONTEO_BANCOS, res.data));
    })
    .catch((error) => dispatch(alertError(error.toString())));
};

export const listarBancosAction = () => (dispatch) => {
  listarBancosService()
    .then((res) => {
      dispatch(success(CONFIGURACION.SUCCESS_TIPO_BANCO, res.data));
    })
    .catch((error) => dispatch(alertError(error.toString())));
};

export const guardarBancoAction = (payload) => (dispatch) => {
  guardarBanco(payload)
    .then(() => {
      dispatch(obtenerListaYConteoDeBancosRegistradosAction());
    })
    .catch((error) => dispatch(alertError(error.toString())));
};

export const borrarBancoAction = (payload) => (dispatch) => {
  borrarBanco(payload)
    .then(() => {
      dispatch(obtenerListaYConteoDeBancosRegistradosAction());
    })
    .catch((error) => dispatch(alertError(error.toString())));
};

export const guardarNuevaTasaAction = (payload) => (dispatch) => {
  guardarNuevaTasa(payload)
    .then(() => {
      dispatch(obtenerCambioDelDiaAction(payload.moneda));
    })
    .catch((error) => dispatch(alertError(error.toString())));
};

export const obtenerIVAAction = () => (dispatch) => {
  obtenerIVA()
    .then((res) => {
      dispatch(success(CONFIGURACION.SUCCESS_IVA, res.data));
    })
    .catch((error) => dispatch(alertError(error.toString())));
};

export const guardarNuevIVAAction = (payload) => (dispatch) => {
  guardarNuevoIVA(payload)
    .then((res) => {
      dispatch(obtenerIVAAction());
    })
    .catch((error) => dispatch(alertError(error.toString())));
};
