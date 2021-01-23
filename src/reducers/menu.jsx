import { MENU } from "../helpers/constants/reducers";

export const menu = (state = { open: false }, action) => {
  switch (action.type) {
    case MENU.OPEN: {
      return {
        open: true
      };
    }
    case MENU.CLOSE: {
      return {
        open: false
      };
    }
    default: {
      return state;
    }
  }
};
