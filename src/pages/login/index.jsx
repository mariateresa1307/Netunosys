import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import CardContent from '@material-ui/core/CardContent';
import Container from "@material-ui/core/Container";
import LogoNetuno from "../assets/images/lo.png";

import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
    LogoNetuno:{
        margin: theme.spacing(3),
      
      },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class index extends Component {
  constructor(props) {
    super(props);

    this.copyright = this.copyright.bind(this);
    this.login = this.login(this);

    this.state = {
      user: "",
      pass: ""
    };
  }

  copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  login() {
    console.log(this.state);
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <CardContent>
        <div className={classes.paper}>
        <img src={LogoNetuno} alt="NETUNO"  style={{
      width: "250px"
   }   }/>
          <Typography component="h1" variant="h5">
            Clientes IP Inventory
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="Username "
                  label="Username "
                  name="Username "
                  autoComplete="Username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              
              >
              Sumit
            </Button>
          </form>
        </div>
        </CardContent>
      </Container>
    );
  }
}

export default withStyles(styles)(index);
