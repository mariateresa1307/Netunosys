import { AXIOS } from "../helpers/axios";
import { API_URL } from "../helpers/constants/routes";

export const loginService = async (formData) => {
  return AXIOS.post(`${API_URL.base}${API_URL.routes.login}`, formData)
    .then((response) => response)
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const obtenerUsuarioService = async ({ page, limit }) => {
  const formData = {
    page: page ? page : 1,
    limit: limit ? limit : 5
  };


  return AXIOS.post(`${API_URL.base}${API_URL.routes.usuario}`, formData)
    .then((response) => response)
    .catch((error) => {
      return Promise.reject(error);
    });

  }
