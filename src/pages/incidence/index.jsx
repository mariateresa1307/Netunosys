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
import ErrorIcon from "@material-ui/icons/Error"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import CustomModal from "./addIncidence"
import ModifyIncidence from "./addIncidence"
import ListAltIcon from "@material-ui/icons/ListAlt"

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const ClienteIndex = (props) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClickOpen1 = () => {
    setOpen1(true)
  }
  const handleClickOpen2 = () => {
    setOpen2(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClose1 = () => {
    setOpen1(false)
  }

  const handleClose2 = () => {
    setOpen2(false)
  }
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12}>
          <SectionTitle label={" Gestionar Incidencia "} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <CustomCard title=" Incidencias Activas" content="59" background={"linear-gradient(to right, #fe8c81 0%, #fbd323 100%)"} icons={<BarChartIcon />} />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <CustomCard title="Incidencias Finalizadas" content="59" background={"linear-gradient(to right, #a77ffc, #ca77ea, #e370d6, #f46dc1, #ff6eac)"} icons={<BarChartIcon />} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={10}>
          <MaterialTable
            /* search value */
            searchPayload={{
              title: "Seccion de busqueda",
              searchParam: [
                { value: 1, label: "Abonado" },
                { value: 2, label: "Contrato" },
                { value: 3, label: "Vlan" },
              ],
            }}
            /* search value */
            noSearch
            title={"Registros de Incidencias"}
            columns={[
              {
                field: "user",
                render: (rowData) => {
                  return <Avatar style={{ float: "right", backgroundColor: "#304074", fontSize: "12px", fontWeight: "bold" }}>CORP-</Avatar>
                },
              },
              {
                title: "Numero del caso",
                field: "NumeroCaso",
              },
              {
                title: " Titulo del Caso ",
                field: "TituloCaso",
              },

              {
                title: "Fecha de Creacion ",
                field: "FechaApertura",
              },
              {
                title: "Cliente",
                field: "Cliente",
              },
              {
                title: "Servicio",
                field: "Servicio",
              },

              {
                title: "Reporte del cliente",
                field: "Reporte",
              },
              {
                title: "Incidencia asociada ",
                field: "IncidenciaAsociada",
              },
              {
                title: "Propietario",
                field: "Usuario",
              },
              {
                title: "Estatus",
                field: "Estatus",
              },

              {
                title: "Acciones",
                render: (rowData) => (
                  <>
                    <Tooltip title="Modificar Registro">
                      <IconButton
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        onClick={handleClickOpen1}
                      >
                        <ChromeReaderModeIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Detalles del servicio">
                      <IconButton
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        onClick={handleClickOpen2}
                      >
                        <ListAltIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                ),
              },
            ]}
            data={{
              items: [
                {
                  NumeroCaso: "173348 ",
                  TituloCaso: "CCS - Monitoreo de temperatura equipos Nodo PQC",
                  FechaApertura: "22/05/2020",
                  Cliente: "Corp Tecnologia Global 21 ",
                  Servicio: "ADSL",
                  Reporte: "Sin Conexion",
                  IncidenciaAsociada: "afectacion por falla en el modem",
                  Usuario: "Admin",
                  Estatus: "Activo",
                },
                {
                  NumeroCaso: "173161 ",
                  TituloCaso: "CCS - Monitoreo de temperatura ",
                  FechaApertura: "21/05/2020",
                  Cliente: "Global 21 ",
                  Servicio: "DATOS",
                  Reporte: "Lentitud",
                  IncidenciaAsociada: "Saturacion ",
                  Usuario: "Admin3",
                  Estatus: "Activo",
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
        <ErrorIcon style={{ marginRight: "15px" }} /> Agregar Incidencia
      </AddFab>

      <CustomModal open={open} handleClose={handleClose} title={"   Gestionar Incidencia"} />
      <ModifyIncidence open={open1} handleClose={handleClose1} title={"   Gestionar Incidencia"} />
    </>
  )
}

export default ClienteIndex
