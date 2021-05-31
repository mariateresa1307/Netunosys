import React from "react"

import Divider from "@material-ui/core/Divider"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import CustomDatepicker from "../../../components/CustomDatepicker"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import SearchIcon from "@material-ui/icons/Search"
import { IconButton, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import CustomModal from "./dialogAddContractIncidence"
import ContratoAdicionalDetail from "../../../components/addCustomers/contratoIncidence"
import CustomTimepicker from "../../../components/time"
const useStyles = makeStyles((theme) => ({}))
const Detail = (props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Grid container spacing={4}>
        <Typography variant="subtitle2" style={{ paddingLeft: "20px" }} gutterBottoms>
          Registro de incidencia
        </Typography>
        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField label="TT-CORP" fullWidth variant="filled" />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField label="Titulo del Caso	" fullWidth variant="filled" />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <CustomTimepicker label="Fecha de Inicio" />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} /*en la seccion del Dslam se agregara el numero de puertos*/>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              Servicio
            </InputLabel>
            <Select value={1} variant="filled">
              <MenuItem value={10}>Adsl</MenuItem>
              <MenuItem value={20}>Adsl2+ </MenuItem>
              <MenuItem value={20}>Datos </MenuItem>
              <MenuItem value={20}>Vdsl </MenuItem>
              <MenuItem value={20}>Telefonia </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField label="  Incidencia asociada	" fullWidth variant="filled" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField label="  Solucion Incidencia 	" fullWidth variant="filled" />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              Estado Incidencia
            </InputLabel>
            <Select value={1} variant="filled">
              <MenuItem value={10}>Activo</MenuItem>
              <MenuItem value={20}>Finalizado </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <ContratoAdicionalDetail />
        </Grid>
      </Grid>

      <CustomModal open={open} handleClose={handleClose} />
    </>
  )
}

export default Detail
