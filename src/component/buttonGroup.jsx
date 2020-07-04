import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from "@material-ui/core";

const styles = (theme) => ({
  button: {
    padding: 0,
    margin: "10px",
  },
});
class buttonGroup extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",

          marginTop: "30px",
          textAlign: "center",
          borderBottomLeftRadius: "15px",
          borderTopLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Button fullWidth size="large">
              Retirar
            </Button>
          </Grid>

          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Button fullWidth size="large">
              Averiado
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Button fullWidth size="large">
              Desc.Soft
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Button fullWidth size="large">
              Por Instalar
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Button fullWidth size="large">
              Conectado
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(buttonGroup);
