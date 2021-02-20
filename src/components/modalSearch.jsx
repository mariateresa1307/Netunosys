import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  title,
  open,
  handleClose,
  searchParam,
  valueToSearch,
  handleSearch,
}) {
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ backgroundColor: "#304074", color: "white" }}>
          {title}
        </DialogTitle>
        <DialogContent style={{ overflowY: "hidden" }}>
          <Grid container spacing={4} justify="center">

              {/* search value */}
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel>Buescar por:</InputLabel>
                <Select fullWidth value={age} onChange={handleChange} label="Age">
                
                  {searchParam.map((v, index) => {
                    return <MenuItem value={v.value}>{v.label}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Grid>
            {/* search value */}
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
              fullWidth
              style={{marginTop:"10px"}}
                id="outlined-basic"
                label="Buscar"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} style={{backgroundColor: "#6c76de", color: "white"}}>
            Buscar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
