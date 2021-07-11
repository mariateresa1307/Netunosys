import React from "react"

import Divider from "@material-ui/core/Divider"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import CustomDatepicker from "../../../components/CustomDatepicker"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

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
        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField label="Abonado" fullWidth variant="filled" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField label="Contrato" fullWidth variant="filled" />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField label="Vlan" fullWidth variant="filled" />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField label="Ont Id" fullWidth variant="filled" />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField label="Cliente" fullWidth variant="filled" />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              OLT
            </InputLabel>
            <Select value={1} variant="filled">
              <MenuItem value={10}>CSS-PQC</MenuItem>
              <MenuItem value={20}>CSS-La Urbina </MenuItem>
              <MenuItem value={20}>PCT </MenuItem>
              <MenuItem value={20}>PTC-NOC </MenuItem>
              <MenuItem value={20}>CGG-Buenaventura </MenuItem>
              <MenuItem value={20}>CGG-HeadEnd </MenuItem>
              <MenuItem value={20}>MCY-Hubsite </MenuItem>
              <MenuItem value={20}>VAL-HeadEnd </MenuItem>
              <MenuItem value={20}>VAL-Sambil </MenuItem>
              <MenuItem value={20}>MBO-HeadEnd </MenuItem>
              <MenuItem value={20}>MBO-Dividivi </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField label="Nodo" fullWidth variant="filled" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField label="Serial Pon " fullWidth variant="filled" />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField label="MAC" fullWidth variant="filled" />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              FiberPon
            </InputLabel>
            <Select value={1} variant="filled">
              <MenuItem value={10}>Premium</MenuItem>
              <MenuItem value={20}>Business Plus</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              Paquete
            </InputLabel>
            <Select value={1} variant="filled">
              <MenuItem value={20}>50MB</MenuItem>
              <MenuItem value={10}>100MB</MenuItem>
              <MenuItem value={10}>200MB</MenuItem>
              <MenuItem value={10}>N/A</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <TextField label=" Ip Estatica Asignada 	" fullWidth variant="filled" />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <CustomDatepicker label="Fecha Registro" />
        </Grid>
      </Grid>
    </>
  )
}

export default Detail
