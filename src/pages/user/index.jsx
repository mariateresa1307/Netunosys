import React from "react"
import MaterialTable from "../../components/materialTable"
import SectionTitle from "../../elements/sectionTitle"
import Grid from "@material-ui/core/Grid"
import WorkIcon from "@material-ui/icons/Work"
import IconButton from "@material-ui/core/IconButton"
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode"
import Tooltip from "@material-ui/core/Tooltip"
import AddFab from "../../elements/addFab"
import CustomCard from "../../components/card"
import BarChartIcon from "@material-ui/icons/BarChart"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import CustomModal from "./addUser"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import User from "../../assets/images/user.jpeg"
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const AlquilerIndex = (props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12}>
          <SectionTitle label={"Gestión de Usuarios"} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={6} md={5} lg={5}>
              <CustomCard title=" Activos" content="59" background={"linear-gradient(to right, #0ec8d5, #00d7d4, #00e6cc, #00f3bc, #37ffa5)"} icons={<BarChartIcon />} />
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={5}>
              <CustomCard
                title="Inactivo"
                content="59"
                background={
                  "radial-gradient(circle at -20.71% 50%, #de9c2c 0, #e5922a 8.33%, #ea852b 16.67%, #ee772d 25%, #f16731 33.33%, #f35436 41.67%, #f23c3c 50%, #f01843 58.33%, #ed004c 66.67%, #e90057 75%, #e30064 83.33%, #db0071 91.67%, #d10080 100%)"
                }
                icons={<BarChartIcon />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={10}>
          <MaterialTable
            /* search value */
            searchPayload={{
              title: "Seccion de busqueda",
              searchParam: [
                { value: 1, label: "Cedula" },
                { value: 2, label: "Nombre Usuario" },
              ],
            }}
            /* search value */
            noSearch
            title={"Registros de Usuarios"}
            columns={[
              {
                field: "user",
                render: (rowData) => {
                  return <Avatar style={{ float: "right" }} src={User} />
                },
              },
              {
                title: "Nombre y apellido",
                field: "nombreApellido",
              },
              {
                title: "Usuario",
                field: "nombreusuario",
              },
              {
                title: "Correo",
                field: "correo",
              },
              {
                title: " Cedula",
                field: "cedula",
              },
              {
                title: "Estado",
                field: "estado",
                render: (rowData) => {
                  return (
                    <Tooltip title="Es un usuario activo del sistema">
                      <CheckCircleIcon
                        style={{
                          color: "#207d20",
                          marginLeft: "auto",
                          marginRight: "auto",
                          display: "block",
                          fontSize: "25px",
                        }}
                      />
                    </Tooltip>
                  )
                },
              },
              {
                title: "Fecha de ultima Sesion  ",
                field: "fechaUltimaSesion",
              },
              {
                title: "Rol",
                field: "rol",
              },
              {
                title: "Acciones",
                render: (rowData) => (
                  <>
                    <Tooltip title="Modificar usuario">
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
                  nombreApellido: "Miguel Martin",
                  nombreusuario: "Mmartin",
                  correo: "Mmartin@gmail.com	",
                  cedula: "28006871",
                  estado: "activo",
                  fechaUltimaSesion: "12/01/2021",
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
        </Grid>
      </Grid>

      <AddFab variant="outlined" type="button" color="primary" onClick={handleClickOpen}>
        <WorkIcon style={{ marginRight: "15px" }} /> Agregar Usuario
      </AddFab>

      <CustomModal open={open} handleClose={handleClose} title={"   Gestionar Usuarios"} />
    </>
  )
}

export default AlquilerIndex
