import React from "react"
import CustomModal from "../../components/customModal"
import Grid from "@material-ui/core/Grid"
import { TextField, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"

import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna"
import Radio from "@material-ui/core/Radio"

const ModifyIP = (props) => {
  const [open1, setOpen1] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(0)

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  const handleClickOpen1 = () => {
    setOpen1(true)
  }

  const handleClose1 = () => {
    setOpen1(false)
  }

  return (
    <>
      <CustomModal header={"Gestión de clientes"} {...props}>
        <Grid container spacing={0} justify="center" style={{ marginTop: "10px" }}>
          <Grid item xs={12} sm={9} md={8} ls={6} style={{ textAlign: "center", marginTop: "20px" }}>
            <SettingsInputAntennaIcon style={{ fontSize: "167px", color: "#1a237eb0" }} />
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
                    Equipo Core
                  </InputLabel>
                  <Select value={1} fullWidth variant="filled">
                    <MenuItem value={10}>7604 PQC</MenuItem>
                    <MenuItem value={20}>7604 HE </MenuItem>
                    <MenuItem value={20}>7604 VAL </MenuItem>
                    <MenuItem value={20}>7604 MBO </MenuItem>
                    <MenuItem value={20}>7604 CGG </MenuItem>
                    <MenuItem value={20}>CORE</MenuItem>
                  </Select>
                </FormControl>
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
    </>
  )
}

export default ModifyIP
