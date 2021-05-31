import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import CustomModal from "../../components/detalleRegistro"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import MuiDialogContent from "@material-ui/core/DialogContent"
import MuiDialogActions from "@material-ui/core/DialogActions"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Typography from "@material-ui/core/Typography"
import { TextField, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna"

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
      <CustomModal header={"Gestión de IP"} style={{ minHeight: "700px" }} {...props}>
        <Grid container spacing={0} justify="center" style={{ marginTop: "10px" }}>
          <Grid item xs={12} sm={9} md={8} ls={6} style={{ textAlign: "center", marginTop: "20px" }}>
            <SettingsInputAntennaIcon style={{ fontSize: "100px", color: "#1a237eb0" }} />
          </Grid>

          <Grid item xs={12} lg={10}>
            <Divider />
            <Grid container spacing={4} style={{ marginTop: "10px" }}>
              <Grid item xs={12} sm={4} md={4}>
                <TextField label="Ip Adress" fullWidth variant="filled" />
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <TextField label=" Mascara de subred" fullWidth variant="filled" />
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <TextField label=" Descripcion" fullWidth variant="filled" />
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
            </Grid>
          </Grid>
        </Grid>
      </CustomModal>
    </div>
  )
}
