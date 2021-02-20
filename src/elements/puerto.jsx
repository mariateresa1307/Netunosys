import React from "react";
import { TextField, Grid, Divider} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AlertDialogSlide({}) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
<Grid item xs={12}>
                <Typography variant="h6">2. Asignacion de Puertos</Typography>
              </Grid>
              
              <Divider/>

          <Grid container spacing={4} justify="center" style={{marginTop:"10px"}}>
         
              {/* search value */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField label="Puertos" fullWidth variant="filled" />
              </Grid>

            </Grid>
            {/* search value */}
   
            </div>
  );
}
