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
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import SettingsInputHdmiIcon from "@material-ui/icons/SettingsInputHdmi"
import Puerto from "../assets/images/images1.jpeg"
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

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

export default function CustomizedDialogs(props) {
  return (
    <div>
      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open1}>
        <DialogTitle style={{ padding: "8px", backgroundColor: "#304074", color: "white" }} id="customized-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={0} justify="center" style={{ marginTop: "10px" }}>
            <Grid item xs={12} sm={9} md={8} ls={6} style={{ textAlign: "center", marginTop: "5px" }}>
              <img src={Puerto} alt="" style={{ maxWidth: "100px" }} />
            </Grid>
          </Grid>
          <Typography gutterBottom>Descripcion:</Typography>
          <Typography gutterBottom>Fecha de asignacion:</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
