import { ALERT } from "../helpers/constants/reducers";

export const alert = (state = { open: false, severity: null, message: null }, payload) => {
  switch (payload.type) {
    case ALERT.SUCCESS: {
      return {
        open: true,
        severity: payload.content.severity,
        message: payload.content.message
      };
    }
    case ALERT.ERROR: {
      return {
        open: true,
        severity: payload.content.severity,
        message: payload.content.message
      };
    }
    case ALERT.INFO: {
      return {
        open: true,
        severity: payload.content.severity,
        message: payload.content.message
      };
    }
    case ALERT.CLEAR: {
      return {
        ...state,
        open: false
      };
    }
    default: {
      return state;
    }
  }
};
