import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const styles = (theme) => ({
  button: {
    padding: 0,
    margin: "10px",
  },
});

class Service extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date("2014-08-18T21:11:54"),
    };

    this.setSelectedDate = this.setSelectedDate.bind(this);
  }
  setSelectedDate(date) {
    this.setState({ selectedDate: date });
  }

  render() {
    return (
      <div>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <FormControl
              className={this.props.formControl}
              fullWidth
              variant="filled"
            >
              <InputLabel htmlFor="grouped-select">IP Asignada</InputLabel>

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
              <InputLabel htmlFor="grouped-select">
                Bloque IP Asignado
              </InputLabel>

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
              <InputLabel htmlFor="grouped-select">Equipo core</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
                <MenuItem value={4}>Option 4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={2} lg={2}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Fecha de Aprovisionamiento"
                format="MM/dd/yyyy"
                value={this.state.selectedDate}
                onChange={this.setSelectedDate}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                fullWidth
                style={{ marginTop: "9px" }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Service);
