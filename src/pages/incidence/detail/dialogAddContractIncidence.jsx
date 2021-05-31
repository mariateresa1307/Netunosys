import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import MuiDialogContent from "@material-ui/core/DialogContent"
import MuiDialogActions from "@material-ui/core/DialogActions"
import CloseIcon from "@material-ui/icons/Close"
import { TextField, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import { IconButton, Grid, Typography } from "@material-ui/core"
import { Spring } from "react-spring/renderprops"
import PostAddIcon from "@material-ui/icons/PostAdd"
import List from "../List"
import Divider from "@material-ui/core/Divider"

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
          <Grid container spacing={4} justify="center">
            <Grid item xs={12} sm={12} md={12} ls={12} style={{ textAlign: "center" }}>
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={300}>
                {(springProps) => <PostAddIcon style={{ fontSize: "150px", color: "#1a237eb0" }} />}
              </Spring>
              <Divider />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
              <div>
                <TextField label="Abonado" fullWidth variant="filled" />
                <IconButton
                  type="submit"
                  aria-label="search"
                  style={{
                    marginTop: "7px",
                    marginLeft: "-54px",
                    position: "relative",
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
              <FormControl fullWidth variant="filled">
                <InputLabel fullWidth id="3">
                  Reporte del cliente
                </InputLabel>
                <Select value={1} variant="filled">
                  <MenuItem value={10}>Sin Conexion</MenuItem>
                  <MenuItem value={20}>Perdidas de Paquetes</MenuItem>
                  <MenuItem value={20}>Intermitencias</MenuItem>
                  <MenuItem value={20}>Lentitud</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} lg={12}>
              <List />
            </Grid>
          </Grid>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={props.handleClose} color="primary">
            Guardar Registro
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  )
}
