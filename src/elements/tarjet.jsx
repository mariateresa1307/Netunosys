import React from "react";
import { Divider, Grid } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";



export default function AlertDialogSlide({}) {



  return (
    <div>

          <Grid item xs={12}>
                <Typography variant="h6">1. Asignacion de Tarjetas</Typography>
              </Grid>
              
              <Divider/>

          <Grid container spacing={4} justify="center" style={{marginTop:"10px"}}>

               {/* search value */}
              <Grid item xs={12} sm={4} md={4}>
        <FormControl fullWidth variant="filled" >
          <InputLabel fullWidth id="3">Tarjeta</InputLabel>
          <Select value={1} variant="filled">

            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2 </MenuItem>
            <MenuItem value={20}>3 </MenuItem>
            <MenuItem value={20}>4</MenuItem>
            <MenuItem value={20}>5 </MenuItem>
            <MenuItem value={20}>6 </MenuItem>
            <MenuItem value={20}>7 </MenuItem>
            <MenuItem value={20}>8 </MenuItem>
            <MenuItem value={20}>9</MenuItem>
            <MenuItem value={20}>10</MenuItem>
       
          </Select>
        </FormControl>
      </Grid>
            </Grid>
            {/* search value */}
   
            </div>
  );
}
