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
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <TextField
              id="standard-basic"
              label="Abonado"
              required
              fullWidth
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={2} lg={2}>
            <TextField
              id="standard-basic"
              label="Contrato"
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
              <InputLabel htmlFor="grouped-select">Dslam</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <MenuItem value={1}>DSLAM Zhone Bitstorm</MenuItem>
                <MenuItem value={2}>DSLAM Zhone Huawei</MenuItem>
                <MenuItem value={3}>DSLAM Zhone Malc</MenuItem>
                <MenuItem value={4}>DSLAM Zhone Mx-160</MenuItem>
                <MenuItem value={5}>DSLAM Zhone Mxk-319</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={2} lg={2}>
            <FormControl
              className={this.props.formControl}
              fullWidth
              variant="filled"
            >
              <InputLabel htmlFor="grouped-select">Ubicación</InputLabel>

              <Select defaultValue="" id="grouped-select">
                <ListSubheader>Bitstorm</ListSubheader>
                <MenuItem value={1}>Autana</MenuItem>
                <MenuItem value={2}>Embassy 1</MenuItem>
                <MenuItem value={3}>Embassy 2</MenuItem>
                <MenuItem value={4}>Folgana</MenuItem>
                <MenuItem value={5}>Sede Gerencial</MenuItem>

                <ListSubheader>Huawei</ListSubheader>
                <MenuItem value={6}>Plaza Las Americas</MenuItem>
                <MenuItem value={7}>Buenaventura</MenuItem>
                <MenuItem value={8}>Parque Cristal</MenuItem>
                <MenuItem value={9}>Lido</MenuItem>
                <MenuItem value={10}>Torre Oasis</MenuItem>
                <MenuItem value={11}>Parque Central</MenuItem>
                <MenuItem value={12}>Torre CrediCard</MenuItem>
                <MenuItem value={13}>Seguro Mercantil</MenuItem>
                <MenuItem value={14}>Parque Carabobo</MenuItem>
                <MenuItem value={15}>NUR</MenuItem>
                <MenuItem value={16}>Sambil</MenuItem>

                <ListSubheader>Malc</ListSubheader>
                <MenuItem value={17}>Bancaracas</MenuItem>
                <MenuItem value={18}>Castellana</MenuItem>
                <MenuItem value={19}>Cavendes</MenuItem>
                <MenuItem value={20}>CCCT</MenuItem>
                <MenuItem value={21}>Centro Peru</MenuItem>
                <MenuItem value={22}>Cubo Negro</MenuItem>

                <ListSubheader> Mx-160</ListSubheader>
                <MenuItem value={23}>El Encantado 1</MenuItem>
                <MenuItem value={24}>El Encantado 2</MenuItem>
                <MenuItem value={25}>Galipan</MenuItem>
                <MenuItem value={26}>La Urbina</MenuItem>
                <MenuItem value={27}>Torre 18 </MenuItem>
                <MenuItem value={28}>Sambil</MenuItem>
                <MenuItem value={29}>Seguro Mercantil</MenuItem>
                <MenuItem value={30}>Tcc 1</MenuItem>
                <MenuItem value={31}>Tcc 2</MenuItem>
                <MenuItem value={32}>Torre Uno</MenuItem>

                <ListSubheader> Mxk-319</ListSubheader>
                <MenuItem value={33}>Ciudad Center</MenuItem>
                <MenuItem value={34}>Centro Seguro La Paz</MenuItem>
                <MenuItem value={35}>Santa Paula</MenuItem>
                <MenuItem value={36}>San Ignasio</MenuItem>
                <MenuItem value={37}>Parque Cristal</MenuItem>
                <MenuItem value={38}>Lido</MenuItem>
                <MenuItem value={39}>Galerias Avila</MenuItem>
                <MenuItem value={40}>Torre Phelps</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Categories);
