import React from "react"
import MaterialTable from "../../../components/materialTable"
import SectionTitle from "../../../elements/sectionTitle"
import Grid from "@material-ui/core/Grid"
import WorkIcon from "@material-ui/icons/Work"
import IconButton from "@material-ui/core/IconButton"
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode"
import Tooltip from "@material-ui/core/Tooltip"
import AddFab from "../../../elements/addFab"
import CustomCard from "../../../components/card"
import BarChartIcon from "@material-ui/icons/BarChart"

import AddVlan from "./addVlan"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import User from "../../../assets/images/user.jpeg"

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
          <SectionTitle label={"Asignacion de Vlans"} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CustomCard title="Conectadas" content="59" background={"linear-gradient(to left, #7559ce, #6f68d7, #6a76de, #6783e4, #678fe9)"} icons={<BarChartIcon />} />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CustomCard title="Disponibles" content="59" background={"linear-gradient(to right, #a77ffc, #ca77ea, #e370d6, #f46dc1, #ff6eac)"} icons={<BarChartIcon />} />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CustomCard title="Por Instalar" content="59" background={"linear-gradient(to right, #fe8c81 0%, #fbd323 100%)"} icons={<BarChartIcon />} />
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
            title={"Registros de Clientes"}
            columns={[
              {
                field: "user",
                render: (rowData) => {
                  return <Avatar style={{ float: "right" }} src={User} />
                },
              },
              {
                title: "Grupo Nortel",
                field: "GrupoNortel",
              },

              {
                title: "Vlan",
                field: "vlan",
              },

              {
                title: "Dslam",
                field: "dslam",
              },

              {
                title: "Nodo",
                field: "nodo",
              },
              {
                title: "Estatus",
                field: "estatus",
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
                  GrupoNortel: "0 ",
                  vlan: "2824",
                  dslam: "MXK319 PQC",
                  nodo: "Santa Paula",
                  estatus: "En Uso",
                },
                {
                  GrupoNortel: "1 ",
                  contrato: "Libre",
                  vlan: "2824",
                  dslam: "MXK319 PQC",
                  nodo: "Santa Paula",
                  estatus: "Libre",
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
        <WorkIcon style={{ marginRight: "15px" }} /> Agregar nueva Vlan
      </AddFab>

      <AddVlan open={open} handleClose={handleClose} title={"   Gestionar Vlan"} />
    </>
  )
}

export default ClienteIndex
