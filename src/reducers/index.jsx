import { combineReducers } from "redux";
import { menu } from "./menu";
import { alert } from "./alert";

export default combineReducers({
  alert,
  menu,
});
