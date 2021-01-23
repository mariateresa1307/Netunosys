import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import { alertClear } from "../actions/alert";

const CustomizedSnackbars = () => {
  const alert = useSelector((store) => store.alert);
  const dispatch = useDispatch();

  return (
    <>
      <Snackbar
        open={alert.open}
        autoHideDuration={5000}
        onClose={() => dispatch(alertClear())}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert elevation={6} variant="filled" severity={alert.severity}>
          {alert.message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default CustomizedSnackbars;
