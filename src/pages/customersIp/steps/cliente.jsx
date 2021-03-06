import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const EmpleadoStep = () => {
  return (
    <Grid container spacing={4} >
      <Grid item xs={12}>
        <Divider />
      </Grid>

      
      <Grid item xs={12} sm={4} md={4}>
        <TextField label="Abonado" fullWidth variant="filled" />
      </Grid>

      <Grid item xs={12} sm={4} md={4}>
        <TextField label="Contrato" fullWidth variant="filled" />
      </Grid>

      <Grid item xs={12} sm={4} md={4}>
        <TextField label="Nombre cliente" fullWidth variant="filled" />
      </Grid>
     
      <Grid item xs={12} sm={4} md={4}>
        <FormControl fullWidth variant="filled" >
          <InputLabel fullWidth id="3">Equipo Core</InputLabel>
          <Select value={1}  fullWidth variant="filled">
            <MenuItem value={10}>7604 PQC</MenuItem>
            <MenuItem value={20}>7604 HE </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4} md={4}>
        <FormControl fullWidth variant="filled" >
          <InputLabel fullWidth id="3">Dslam</InputLabel>
          <Select value={1} variant="filled">

            <MenuItem value={10}>Bitstorm</MenuItem>
            <MenuItem value={20}>Huawei </MenuItem>
            <MenuItem value={20}>Malc </MenuItem>
            <MenuItem value={20}>Mx-160 </MenuItem>
            <MenuItem value={20}>Mxk-316 </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      
    </Grid>
  );
};

export default EmpleadoStep;
