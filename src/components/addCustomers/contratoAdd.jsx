import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import MuiDialogContent from "@material-ui/core/DialogContent"
import MuiDialogActions from "@material-ui/core/DialogActions"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Typography from "@material-ui/core/Typography"
import { TextField, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import PostAddIcon from "@material-ui/icons/PostAdd"

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

export default function CustomizedDialogs(props) {
  return (
    <div>
      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" maxWidth="md" open={props.open}>
        <DialogTitle style={{ backgroundColor: "#304074", color: "white" }} onClose={props.handleClose} onClose={props.handleClose}>
          {props.title}
        </DialogTitle>
        <MuiDialogContent dividers>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={12} md={10} ls={6} style={{ textAlign: "center", marginTop: "20px" }}>
              <PostAddIcon style={{ fontSize: "150px", color: "#1a237eb0" }} />
            </Grid>

            <Divider />
            <Grid item xs={12} sm={4} md={4}>
              <TextField label="Contrato Adicional" fullWidth variant="filled" />
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <FormControl fullWidth variant="filled">
                <InputLabel fullWidth id="3">
                  Tipo Servicio
                </InputLabel>
                <Select value={1} variant="filled">
                  <MenuItem value={10}>Zona DNS</MenuItem>
                  <MenuItem value={20}>Bloque IP </MenuItem>
                  <MenuItem value={20}>Datos </MenuItem>
                  <MenuItem value={120}>1xE1</MenuItem>
                  <MenuItem value={121}>2xE1</MenuItem>
                  <MenuItem value={122}>3xE1</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField label="Descripcion" fullWidth variant="filled" />
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <FormControl fullWidth variant="filled">
                <InputLabel fullWidth id="3">
                  Prefijo de Red
                </InputLabel>
                <Select value={1} variant="filled">
                  <MenuItem value={10}>/24</MenuItem>
                  <MenuItem value={20}>/29 </MenuItem>
                  <MenuItem value={20}>/30 </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <FormControl fullWidth variant="filled">
                <InputLabel fullWidth id="3">
                  Bloque IP
                </InputLabel>
                <Select value={1} variant="filled">
                  <MenuItem value={10}>190.6.63.182</MenuItem>
                  <MenuItem value={20}>190.6.63.185 </MenuItem>
                  <MenuItem value={20}>190.6.63.186 </MenuItem>
                  <MenuItem value={20}>190.6.63.187 </MenuItem>
                  <MenuItem value={20}>190.6.63.188</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* <Grid item xs={12} sm={4} md={4}>
              <FormControl fullWidth variant="filled">
                <InputLabel fullWidth id="3">
                  Estado servicio
                </InputLabel>
                <Select value={1} variant="filled">
                  <MenuItem value={10}>Conectado</MenuItem>
                  <MenuItem value={20}>Desconectado-Soft </MenuItem>
                  <MenuItem value={20}>Por Instalar </MenuItem>
                  <MenuItem value={20}>Suspendido </MenuItem>
                  <MenuItem value={20}>Desconectado-Hard </MenuItem>
                </Select>
              </FormControl>
  </Grid>*/}
          </Grid>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={props.handleClose} color="primary">
            Save changes
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  )
}
