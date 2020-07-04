import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
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
          <Grid item xs={12} sm={6} md={1} lg={1}>
            <FormControl
              className={this.props.formControl}
              fullWidth
              variant="filled"
            >
              <InputLabel htmlFor="grouped-select">Tarjeta</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
                <MenuItem value={4}>Option 4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={1} lg={1}>
            <FormControl
              className={this.props.formControl}
              fullWidth
              variant="filled"
            >
              <InputLabel htmlFor="grouped-select">Pueto</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
                <MenuItem value={4}>Option 4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={2} lg={2}>
            <FormControl
              className={this.props.formControl}
              fullWidth
              variant="filled"
            >
              <InputLabel htmlFor="grouped-select">VLAN</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
                <MenuItem value={4}>Option 4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <FormControl
              className={this.props.formControl}
              fullWidth
              variant="filled"
            >
              <InputLabel htmlFor="grouped-select">BW</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
                <MenuItem value={4}>Option 4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={2} lg={2}>
            <FormControl
              className={this.props.formControl}
              fullWidth
              variant="filled"
            >
              <InputLabel htmlFor="grouped-select">Servicio</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
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
