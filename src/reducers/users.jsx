import { USER_DATASET, ROLES, OCPE } from "../helpers/constants/reducers";

export const userDataset = (state = { items: [], meta: {} }, payload) => {
  switch (payload.type) {
    case USER_DATASET.SUCCESS: {
      return payload.dataset;
    }
    default: {
      return state;
    }
  }
};

export const roles = (state = [], payload) => {
  switch (payload.type) {
    case ROLES.SUCCESS: {
      return payload.dataset;
    }
    default: {
      return state;
    }
  }
};

