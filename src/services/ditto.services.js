import * as axios from "axios";
import { API_RESOURCES_ROUTES } from "../helpers/constantsUrl";

export const GET = async () => {
  return axios
    .get(`${API_RESOURCES_ROUTES.API_URL}${API_RESOURCES_ROUTES.DITTO}`)
    .then((response) => response)
    .catch((error) => {
      return Promise.reject(error);
    });
};
