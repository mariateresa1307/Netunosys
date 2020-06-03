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

class Categories extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={2} justify="center">
          <Grid item xs={3} sm={3} md={2} lg={2}>
            <TextField
              id="standard-basic"
              label="Abonado"
              required
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={3} sm={3} md={2} lg={2}>
            <TextField
              id="standard-basic"
              label="Contrato"
              required
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={3} sm={3} md={2} lg={2}>
            <FormControl
              className={this.props.formControl}
              style={{ width: "100%" }}
            >
              <InputLabel htmlFor="grouped-select">DSLAM</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <ListSubheader>Category 1</ListSubheader>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <ListSubheader>Category 2</ListSubheader>
                <MenuItem value={3}>Option 3</MenuItem>
                <MenuItem value={4}>Option 4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3} sm={3} md={2} lg={2}>
            <FormControl
              className={this.props.formControl}
              style={{ width: "100%" }}
            >
              <InputLabel htmlFor="grouped-select">Ubicación</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <ListSubheader>Category 1</ListSubheader>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <ListSubheader>Category 2</ListSubheader>
                <MenuItem value={3}>Option 3</MenuItem>
                <MenuItem value={4}>Option 4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Categories);
