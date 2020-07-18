import { STATUS } from "../helpers/constantsRedux";

export const ditto = (
  state = {
    isLoading: false,
    data: {},
  },
  actions
) => {
  switch (actions.type) {
    case STATUS.SUCCESS: {
      return {
        ...state,
        data: actions.data
      };
    }
    case STATUS.ERROR: {
      return {
        ...state,
        isLoading: false
      };
    }
    case STATUS.LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    default: {
      return state;
    }
  }
};
