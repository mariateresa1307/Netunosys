import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import DataGrid from "../../components/dataGrid"
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import Avatar from "@material-ui/core/Avatar"
import User from "../../assets/images/user.jpeg"
import SectionTitle from "../../elements/sectionTitle"
import CustomModal from "./addAdmin"

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
}))

export default function SimpleCard() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const bull = <span className={classes.bullet}>•</span>

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <SectionTitle label={"Administracion de Usuarios"} />
        </Grid>
        <Grid item xs={10}>
          <Card className={classes.root} style={{ marginTop: "12px" }}>
            <CardContent style={{ background: "#8f9096", color: "aliceblue" }}>
              <Typography className={classes.title}>Registro de actividad de Usuarios</Typography>
            </CardContent>
            <DataGrid
              noSearch
              title={"Registros de Usuarios"}
              columns={[
                {
                  field: "estado",
                  render: (rowData) => {
                    return <Avatar style={{ float: "right" }} src={User} />
                  },
                },
                {
                  title: "Nombre usuario",
                  field: "nombreusuario",
                },
                {
                  title: " Fecha",
                  field: "fecha",
                },
                {
                  title: "Accion ",
                  field: "descripcion",
                },
                {
                  title: "Rol",
                  field: "rol",
                },
                {
                  title: "Acciones",
                  render: (rowData) => (
                    <>
                      <Tooltip title="Detalles de registro">
                        <IconButton
                          onClick={handleClickOpen}
                          style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block",
                          }}
                        >
                          <ChromeReaderModeIcon />
                        </IconButton>
                      </Tooltip>
                    </>
                  ),
                },
              ]}
              data={{
                items: [
                  {
                    id: "123213",
                    nombreusuario: "Alix Martin",

                    fecha: "11 MAY 12:56",
                    descripcion: "modificar ",

                    rol: "Admin",
                  },
                  {
                    id: "123213",
                    nombreusuario: "Miguel Mendez",
                    fecha: "11 MAY 12:56",
                    descripcion: "borrar",

                    rol: "Admin",
                  },
                ],
                meta: {
                  totalItems: 10,
                  itemsPerPages: 2,
                  currentPage: 1,
                },
              }}
            />
          </Card>
        </Grid>
      </Grid>
      <CustomModal open={open} handleClose={handleClose} title={"   Gestionar Usuarios"} />
    </>
  )
}
