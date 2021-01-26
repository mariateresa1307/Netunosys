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

  ip: {
    label: "Inicio",
    path: "/home"
  },

  user: {
    label: "User",
    path: "/user"
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
