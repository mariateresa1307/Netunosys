import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  caja: {
    fontFamily: "sans-serif",
    fontSize: "18px",
    fontWeight: 400,
    color: "#ffffff",
    background: "#ffffff",
  },
});

class index extends Component {
  render() {
    return <div className={this.style}>¡Hola! Soy una caja muy estilosa</div>;
  }
}

export default withStyles(styles)(index);
