import React from "react"
import MaterialTable from "../../components/materialTable"
import SectionTitle from "../../elements/sectionTitle"
import AddFab from "../../elements/addFab"
import CustomCard from "../../components/card"
import User from "../../assets/images/user.jpeg"

import { Grid, IconButton, Tooltip } from "@material-ui/core"

import WorkIcon from "@material-ui/icons/Work"
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode"
import BarChartIcon from "@material-ui/icons/BarChart"

import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"

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
          <SectionTitle label={"Asignacion de Bloques y validas"} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={10} sm={10} md={6} lg={5}>
              <CustomCard title="Disponibles" content="59" background={"linear-gradient(to right, #a77ffc, #ca77ea, #e370d6, #f46dc1, #ff6eac)"} icons={<BarChartIcon />} />
            </Grid>

            <Grid item xs={10} sm={10} md={6} lg={5}>
              <CustomCard title="En Uso" content="59" background={"linear-gradient(to left, #7559ce, #6f68d7, #6a76de, #6783e4, #678fe9)"} icons={<BarChartIcon />} />
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
            title={"Registros de Bloques Ip"}
            columns={[
              {
                field: "user",
                render: (rowData) => {
                  return <Avatar style={{ float: "right" }} src={User} />
                },
              },
              {
                title: "Ip",
                field: "ip",
              },
              {
                title: " Mascara",
                field: "mascara",
              },

              {
                title: "Observaciones",
                field: "observaciones",
              },

              {
                title: "Equipo Core",
                field: "equipoCore",
              },

              {
                title: "Bloque ip",
                field: "bloqueIp",
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
                        onClick={handleClickOpen}
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
                  ip: "190.6.63.182",
                  mascara: "255.255.255.252",
                  observaciones: "Vlan: 2811  Condominio Centro San Ignacio",
                  equipoCore: "7604 PQC",
                  bloqueIp: " 190.6.63.180/30",
                },
                {
                  ip: "190.6.63.182",
                  mascara: "255.255.255.248",
                  observaciones: "Vlan 2824  Club Trotamundo",
                  equipoCore: "7604 PQC",
                  bloqueIp: " 190.6.63.180/29",
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
        <WorkIcon style={{ marginRight: "15px" }} /> Agregar Nuevos Bloques
      </AddFab>
    </>
  )
}

export default ClienteIndex
