import React from "react"
import CustomModal from "../../components/customModal"
import Grid from "@material-ui/core/Grid"
import { TextField, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import DataGrid from "../../components/dataGrid"
import Fab from "@material-ui/core/Fab"
import Card from "@material-ui/core/Card"
import Subnetting from "./detalle"
import AddIcon from "@material-ui/icons/Add"
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna"
import Radio from "@material-ui/core/Radio"

const ModalIP = (props) => {
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
          <Grid item xs={12} lg={10} style={{ marginTop: "40px" }}>
            <div
              style={{
                boxShadow: " -2px 3px 15px 0px #e8e8e8",
              }}
            >
              <Card style={{ backgroundColor: "gainsboro" }}>
                <Grid item xs={12} lg={12}>
                  <DataGrid
                    noSearch
                    title={"Registros de Usuarios"}
                    columns={[
                      {
                        field: "user",
                        render: (rowData) => {
                          return <Radio checked={selectedValue === "a"} onChange={handleChange} value="a" name="radio-button-demo" inputProps={{ "aria-label": "A" }} />
                        },
                      },
                      {
                        title: "Ip Adress",
                        field: "adress",
                      },
                      {
                        title: "Mascara",
                        field: "mascara",
                      },
                      {
                        title: " Asignada a:",
                        field: "asignada",
                      },
                      {
                        title: "Observaciones ",
                        field: "Observaciones",
                      },
                      {
                        title: "Prefijo de Red ",
                        field: "PrefijoRed",
                      },
                      {
                        title: "Fecha asignacion",
                        field: "fechaAsignacion",
                      },
                    ]}
                    data={{
                      items: [
                        {
                          id: "123213",
                          adress: "192.168.0.2",
                          mascara: "255.255.255.0 ",
                          asignada: "Corp Tecnologia Global 21 ",
                          Observaciones: "7604 PQC",
                          PrefijoRed: "/24",
                          fechaAsignacion: "11 MAY 12:56  2021 ",
                        },
                        {
                          id: "123213",
                          adress: "192.168.0.3",
                          mascara: "255.255.255.0 ",
                          asignada: "Corp Tecnologia Global 21 ",
                          Observaciones: "7604 PQC",
                          PrefijoRed: "/30",
                          fechaAsignacion: "11 MAY 12:56  2021 ",
                        },
                        {
                          id: "123213",
                          adress: "192.168.0.7",
                          mascara: "255.255.255.0 ",
                          asignada: "Libre",
                          Observaciones: "Libre",
                          PrefijoRed: "Libre",
                          fechaAsignacion: "Libre ",
                        },
                      ],
                      meta: {
                        totalItems: 10,
                        itemsPerPages: 2,
                        currentPage: 1,
                      },
                    }}
                  />
                </Grid>

                <Grid container justify="center" style={{ marginBottom: "40px" }}>
                  <Fab variant="extended" size="large" color="primary" aria-label="add" justify="center" onClick={handleClickOpen1} style={{ padding: "0 56px", marginTop: "23px" }}>
                    <AddIcon />
                    Agregar Subnetting
                  </Fab>

                  <Fab variant="extended" size="large" color="secondary" aria-label="add" justify="center" onClick={handleClickOpen1} style={{ padding: "0 56px", marginTop: "23px" }}>
                    <AddIcon />
                    Borrar Subnetting
                  </Fab>
                </Grid>
              </Card>
            </div>
          </Grid>
        </Grid>
      </CustomModal>

      <Subnetting open1={open1} handleClose={handleClose1} title={"Agregar Subnetting"} />
    </>
  )
}

export default ModalIP
