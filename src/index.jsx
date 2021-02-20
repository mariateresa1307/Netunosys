import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import "fontsource-roboto";
import "./assets/css/main.css";
import { Provider } from "react-redux";
import store from "./helpers/store";
import "moment/locale/es-us";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    //type: 'dark' : "light",
    type: "light",
    primary: {
      main: "#1a237e",
      backgroundColor: "#efefef"
    },
    secondary: {
      main: "#ff8d04",
      contrastText: "#FFFF"
    }
    /*warning: {
      main: ""
    }*/
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale="es-us">
        <App />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
