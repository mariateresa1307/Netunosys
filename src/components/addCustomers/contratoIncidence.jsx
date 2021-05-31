import React from "react"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import clx from "classnames"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AccountBoxIcon from "@material-ui/icons/AccountBox"
import moment from "moment"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import AddIcon from "@material-ui/icons/Add"
import Tooltip from "@material-ui/core/Tooltip"
import DialogContrato from "../../pages/incidence/detail/dialogAddContractIncidence"

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
    backgroundColor: "#2b3d79de",
  },
  danger: {
    backgroundColor: "#f74e4ee8",
  },
}))

export default () => {
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
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        <div
          style={{
            minWidth: "500px",
          }}
        >
          <div className={clx(classes.base, classes.normal)}>
            <Grid container>
              <Grid item xs={12} sm={9} md={8}>
                <Typography variant="subtitle1" className={classes.titleText}>
                  Agregar Contrato Incidencia
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3} md={4} style={{ textAlign: "right" }}>
                <Tooltip title="Crear nuevo propietario">
                  <IconButton onClick={handleClickOpen}>
                    <AddIcon style={{ color: "white" }} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </div>
          <Card
            style={{
              marginTop: "-40px",
              paddingTop: "40px",
              marginLeft: "40px",
              marginRight: "40px",
              background: "#ffffff85",
            }}
            elevation={0}
            variant={"elevation"}
          >
            <CardContent
              style={{
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <Accordion variant="outlined">
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <AccountBoxIcon style={{ marginRight: "10px", color: "#989898" }} />
                  <Typography>Contrato: || Abonado</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={12} md={6}>
                          <Typography variant="h6">Descripcion:</Typography>
                          <Divider variant="middle" />
                          <ul>
                            <li>Tipo Servicio: </li>
                            <li> Reporte Cliente</li>
                            <li> Incidencia Asociada</li>
                          </ul>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider
                        variant="middle"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      />
                      <Button
                        disableElevation
                        style={{
                          marginRight: "10px",
                        }}
                      >
                        Eliminar
                      </Button>
                      <Button variant="contained" color="secondary" onClick={handleClickOpen} disableElevation>
                        Editar
                      </Button>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
      <DialogContrato open={open} handleClose={handleClose} title={"Agregar Contrato Incidencia"} />
    </>
  )
}
