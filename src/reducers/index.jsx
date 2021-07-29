import { combineReducers } from "redux"
import { menu } from "./menu"
import { alert } from "./alert"
import { userDataset } from "./users"
import { contUserActivos } from "./users"

export default combineReducers({
  alert,
  menu,
  userDataset,
  contUserActivos,
})
