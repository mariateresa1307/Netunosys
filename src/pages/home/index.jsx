import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LogoGraf from "../assets/images/loi.jpeg";
import LogoGrafi from "../assets/images/la.png";



class index extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6} lg={6}   >
          <Card variant="outlined">
            <CardContent>
              Desconexiones
            </CardContent>
            <img
              src={LogoGraf}
              alt="NETUNO"
              style={{
                width: "230px",
                textAlign: "center",
                display: "block",
                margin: "auto"
              }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}  >
          <Card variant="outlined">
            <CardContent>
              Aprovisionamiento
            </CardContent>
            <img
              src={LogoGrafi}
              alt="NETUNO"
              style={{
                width: "300",
                textAlign: "center",
                display: "block",
                margin: "auto"
              }}
            />
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default index;
