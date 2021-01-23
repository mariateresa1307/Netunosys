import { ALERT } from "../helpers/constants/reducers";

export const alertSuccess = (message) => ({ type: ALERT.SUCCESS, content: { severity: "success", message } });
export const alertError = (message) => ({ type: ALERT.ERROR, content: { severity: "error", message } });
export const alertInfo = (message) => ({ type: ALERT.INFO, content: { severity: "info", message } });
export const alertClear = () => ({ type: ALERT.CLEAR });
