import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import LogoNetuno from "../../assets/images/lo.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

const styles = theme => ({
  LogoNetuno: {
    margin: theme.spacing(3)
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },

  root: {
    minWidth: 275,
    borderRadius: 4
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
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
      <Container maxWidth="sm">
        <CssBaseline />
        <Card
          className={classes.root}
          raised={false}
          style={{ borderRadius: 15, marginTop: "125px" }}
        >
          <CardContent>
            <img
              src={LogoNetuno}
              alt="NETUNO"
              style={{
                width: "200px",
                textAlign: "center",
                display: "block",
                margin: "auto"
              }}
            />

            <Typography
              component="h1"
              variant="h5"
              style={{ textAlign: "center" }}
            >
              Client Internet Protocol Inventory
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
              <Link to="/home">
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disableElevation={true}
                >
                  Sumit
                </Button>
              </Link>
            </form>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default withStyles(styles)(index);
