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
      state.data = actions.data;
      state.isLoading = false;
      return state;
    }
    case STATUS.ERROR: {
      state.isLoading = false;
      return state;
    }
    case STATUS.LOADING: {
      state.isLoading = true;
      return state;
    }
    default: {
      return state;
    }
  }
};
