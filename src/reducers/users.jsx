import { USER_DATASET } from "../helpers/constants/reducers"
import { OCPE } from "../helpers/constants/reducers"

export const userDataset = (state = { items: [], meta: {} }, payload) => {
  switch (payload.type) {
    case USER_DATASET.SUCCESS: {
      return payload.dataset
    }
    default: {
      return state
    }
  }
}

export const contUserActivos = (state = { items: [], meta: {} }, payload) => {
  switch (payload.type) {
    case OCPE.SUCCESS: {
      return payload.dataset
    }
    default: {
      return state
    }
  }
}
