import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = (theme) => ({
  button: {
    padding: 0,
    margin: "10px",
  },
});

class ipAdd extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <TextField
              id="standard-basic"
              label="loopback"
              required
              fullWidth
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={2} lg={2}>
            <TextField
              id="standard-basic"
              label="Ip Asignada"
              required
              fullWidth
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={2} lg={2}>
            <FormControl
              className={this.props.formControl}
              fullWidth
              variant="filled"
            >
              <InputLabel htmlFor="grouped-select">Equipos Core</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <MenuItem value={1}>7604 HE</MenuItem>
                <MenuItem value={2}>7604 PQC</MenuItem>
                <MenuItem value={3}></MenuItem>
                <MenuItem value={4}></MenuItem>
                <MenuItem value={5}></MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={2} lg={2}>
            <FormControl
              className={this.props.formControl}
              fullWidth
              variant="filled"
            >
              <InputLabel htmlFor="grouped-select">Ciudad</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <MenuItem value={4}>Caracas</MenuItem>
                <MenuItem value={5}>Guarenas/Guatire</MenuItem>
                <MenuItem value={1}>Maracaibo</MenuItem>
                <MenuItem value={2}>Valencia</MenuItem>
                <MenuItem value={3}>San Cristobal</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ipAdd);
