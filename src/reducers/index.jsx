import { combineReducers } from "redux";
import { menu } from "./menu";
import { alert } from "./alert";
import { userDataset, roles } from "../reducers/users";

export default combineReducers({
  alert,
  menu,
  userDataset,
  roles,
});
