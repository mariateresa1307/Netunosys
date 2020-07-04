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
            <FormControl
              className={this.props.formControl}
              fullWidth
              variant="filled"
            >
              <InputLabel htmlFor="grouped-select">Servicios</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <MenuItem value={1}>Cooporativos</MenuItem>
                <MenuItem value={2}>Dhcp</MenuItem>
              </Select>
            </FormControl>
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
            <TextField
              id="standard-basic"
              label="Mask"
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
              <InputLabel htmlFor="grouped-select">Bloque Ip</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <MenuItem value={1}>/18</MenuItem>
                <MenuItem value={2}>/19</MenuItem>
                <MenuItem value={3}>/20</MenuItem>
                <MenuItem value={4}>/21</MenuItem>
                <MenuItem value={5}>/22</MenuItem>
                <MenuItem value={2}>/23</MenuItem>
                <MenuItem value={3}>/24</MenuItem>
                <MenuItem value={4}>/25</MenuItem>
                <MenuItem value={5}>/26</MenuItem>
                <MenuItem value={2}>/27</MenuItem>
                <MenuItem value={3}>/28</MenuItem>
                <MenuItem value={4}>/29</MenuItem>
                <MenuItem value={5}>/30</MenuItem>
                <MenuItem value={2}>/31</MenuItem>
                <MenuItem value={3}>/32</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ipAdd);
