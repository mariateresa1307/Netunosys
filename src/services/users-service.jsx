import { AXIOS } from "../helpers/axios"
import { API_URL } from "../helpers/constants/routes"

export const loginService = async (formData) => {
  // console.log("aqui")
  return AXIOS.post(`${API_URL.base}${API_URL.routes.login}`, formData)
    .then((response) => response)
    .catch((error) => {
      return Promise.reject(error)
    })
}

export const logOutService = async (formData) => {
  //  console.log("aqui")
  return AXIOS.post(`${API_URL.base}${API_URL.routes.logOut}`, formData)
    .then((response) => response)
    .catch((error) => {
      return Promise.reject(error)
    })
}

export const obtenerUsuarioService = async ({ page, limit }) => {
  const formData = {
    page: page ? page : 1,
    limit: limit ? limit : 5,
  }

  return AXIOS.get(`${API_URL.base}${API_URL.routes.listaDeUsuarios}`, formData)
    .then((response) => response)
    .catch((error) => {
      return Promise.reject(error)
    })
}

export const guardarUsuarioService = async (payload) => {
  const formData = {
    id: payload.id,
    nombre: payload.nombre.value,
    apellido: payload.apellido.value,
    cedula: payload.cedula.value,
    correo: payload.correo.value,
    nombreUsuario: payload.nombreUsuario.value,
    clave: payload.password.value,
    rol: payload.selectedRol.value,

    activo: payload.selectedEstatus.value,
  }

  return AXIOS.post(`${API_URL.base}${API_URL.routes.usuario}`, formData)
    .then((response) => response)
    .catch((error) => {
      return Promise.reject(error)
    })
}

export const obtenerCantidadPorEstadoService = async () => {
  return AXIOS.get(`${API_URL.base}${API_URL.routes.obtenerCantidadPorEstado}`)
    .then((response) => response)
    .catch((error) => {
      return Promise.reject(error)
    })
}
