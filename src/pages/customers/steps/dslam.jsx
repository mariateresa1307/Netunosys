import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FaceIcon from '@material-ui/icons/Face';
const EmpleadoStep = () => {
  return (
    <Grid container spacing={4} >
      <Grid item xs={12}>
        <Divider />
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
      <Grid item xs={12} sm={4} md={4}>
        <FormControl fullWidth variant="filled" >
          <InputLabel fullWidth id="3">Nodo</InputLabel>
          <Select value={1} variant="filled">

            <MenuItem value={10}>Bitstorm</MenuItem>
            <MenuItem value={20}>Huawei </MenuItem>
            <MenuItem value={20}>Malc </MenuItem>
            <MenuItem value={20}>Mx-160 </MenuItem>
            <MenuItem value={20}>Mxk-316 </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4} md={4} /*en la seccion del Dslam se agregara el numero de tarjeta*/>
        <FormControl fullWidth variant="filled" >
          <InputLabel fullWidth id="3">Tarjeta</InputLabel>
          <Select value={1} variant="filled">

            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2 </MenuItem>
            <MenuItem value={20}>3 </MenuItem>
           
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4} md={4}/*en la seccion del Dslam se agregara el numero de puertos*/>
        <FormControl fullWidth variant="filled" >
          <InputLabel fullWidth id="3">Puerto</InputLabel>
          <Select value={1} variant="filled">

            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2 </MenuItem>
            <MenuItem value={20}>3 </MenuItem>
           
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4} md={4}>
        <TextField label="Broadcast" fullWidth variant="filled" />
      </Grid>

      <Grid item xs={12} sm={4} md={4}/*en la seccion del Dslam se agregara el numero de puertos*/>
        <FormControl fullWidth variant="filled" >
          <InputLabel fullWidth id="3">Servicio</InputLabel>
          <Select value={1} variant="filled">

            <MenuItem value={10}>Adsl</MenuItem>
            <MenuItem value={20}>Adsl2+ </MenuItem>
            <MenuItem value={20}>Vdsl </MenuItem>
           
          </Select>
        </FormControl>
      </Grid>

     

      
    </Grid>
  );
};

export default EmpleadoStep;
