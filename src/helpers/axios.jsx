import axios from "axios"
import history from "./history"
import { URL_PAGES } from "./constants/routes"

let AXIOS = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 100000,
})

AXIOS.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("NETUNOTOKEN")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

AXIOS.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error && error.response) {
      /**
       * No esta autorizado
       */
      if (error.response.status) {
        switch (error.response.status) {
          case 401: {
            /**
             * Redireccionar al login
             */
            history.push(URL_PAGES.login.path)
            return Promise.reject("Sesión no autorizada")
          }
          default: {
            return Promise.reject(error.toString())
          }
        }
      } else if (error.response.data) {
        /**
         * Tiene conexion al internet pero el server respondio con error
         */
        return Promise.reject(error.response.data.message)
      }
    } else {
      /**
       * No se pudo establecer conexion con el servidor
       */
      if (!error.status) return Promise.reject("No se pudo conectar al servidor")

      /**
       * Error generico (?)
       */
      return Promise.reject(error.toString())
    }
  }
)

export { AXIOS }
