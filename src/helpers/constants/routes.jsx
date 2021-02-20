/**
 * Se refiere a las rutas usadas por react a nivel de frontEnd
 */
export const URL_PAGES = {
  login: {
    label: "Inicio de sesión",
    path: "/"
  },
  notFound: {
    label: "No encontrado",
    path: "/404"
  },
  home: {
    label: "Inicio",
    path: "/home"
  },
  cliente: {
    label: "Cliente",
    path: "/cliente"
  },
  asignacionRecursos: {
    label: "Asignacion de recursos",
    path: "/asignacionRecursos"
  },
  recurso: {
    label: "Asignacion DSLAM",
    path: "/asignacionRecursos/dslam"
  },
  ip: {
    label: "Inicio",
    path: "/asignamentIp"
  },

  user: {
    label: "User",
    path: "/user"
  },
 
  adminUser: {
    label: "AdminUser",
    path: "/adminUser"
  },
 
 
 
};

/**
 * Se refiere a las rutas usadas axios para realizar los request al backend
 */
export const API_URL = {
  //base: "http://192.168.0.102:3000/api/",
  base: `${process.env.REACT_APP_API_URL}/api/`,
  routes: {
    
  }
};
