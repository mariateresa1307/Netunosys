import React, { useState } from "react"
import {  TextField, Grid } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import CardContent from "@material-ui/core/CardContent"
import ModalResource from "../../../../components/modalResources"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import puertoDown from "../../../../assets/images/puertoDown.png"
import panel from "../../../../assets/images/panel.png"


const useStyles = makeStyles((theme) => ({
  base: {
    position: "relative",
    borderRadius: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      paddingLeft: "0px",
      paddingTop: "10px",
    },
  },
  titleText: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      display: "block",
    },
  },

  normal: {
    backgroundColor: "#304074",
  },
  danger: {
    backgroundColor: "#f74e4ee8",
  },
}))
const generarPuertos = (cantidad) => {
  const temPuertos = []

  for (let i = 0; i < cantidad; i++) {
    temPuertos.push(
      <img
        key={i}
        src={puertoDown}
        style={{
          width: "32px",
          height: "35px",
        }}
      />
    )
  }

  return temPuertos
}
const ModalClient = (props) => {
  const [activeStep, setActiveStep] = useState(0)
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ dslam: "", nodo: "", tarjeta: [] })

  const agregarTarjeta = () => {
    const nuevaTarjeta = { cantidadPuertos: 1 }
    setForm((ps) => ({ ...ps, tarjeta: [...ps.tarjeta, nuevaTarjeta] }))
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleNext = () => {
    setActiveStep((prev) => prev + 1)
  }
  console.log(form)

  const tarjetas = (tarjetaList) => {
    return tarjetaList.map((tarjeta, index) => {
      return (
        <div
          key={index}
          style={{
            background: "#3d454c",
            width: "100%",
            minHeight: "138px",
            marginBottom: "30px",
            paddingTop: "27px",
            borderRadius: "8px",
            boxShadow: "rgb(75 81 86 / 61%) 0px 3px 20px 0px, rgb(75 81 86 / 10%) 0px 0px 2px 0px, rgb(75 81 86 / 14%) 0px 1px 2px 0px",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={2} style={{}}>
              <img
                src={panel}
                style={{
                  height: "112px",
                  marginTop: "-14px",
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={7}>
              {generarPuertos(tarjeta.cantidadPuertos)}
            </Grid>
            <Grid item xs={12} sm={12} md={2} style={{ textAlign: "right" }}>
              <TextField
                label="Puertos"
                onChange={(event) => {
                  const tarjetaTemp = tarjeta
                  tarjetaTemp.cantidadPuertos = event.target.value
                  const estadoTempTarjeta = form.tarjeta
                  estadoTempTarjeta[index] = tarjetaTemp
                  setForm((ps) => ({ ...ps, tarjeta: estadoTempTarjeta }))
                }}
                variant="filled"
                style={{ backgroundColor: "#ffffffa3" }}
              />
            </Grid>
          </Grid>
        </div>
      )
    })
  }

  return (
    <>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12} sm={8} md={6}>
          <TextField label="Iad" fullWidth variant="filled" />
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <TextField label=" Nodo" fullWidth variant="filled" />
        </Grid>

        <Grid item xs={12} sm={10} md={10} lg={8}>
          <div
            style={{
              boxShadow: " -2px 3px 15px 0px #e8e8e8",
            }}
          >
            <Card elevation={0} variant={"elevation"} style={{ textAlign: "center" }}>
              <CardContent style={{}}>
                {tarjetas(form.tarjeta)}
                <Fab variant="extended" size="large" color="primary" onClick={agregarTarjeta} aria-label="add" justify="center" style={{ padding: "0 56px" }}>
                  <AddIcon />
                  Agregar Nueva tarjeta
                </Fab>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
      <ModalResource open={open} handleClose={handleClose} tittle={"Gestionar Recursos"} />
    </>
  )
}

export default ModalClient
