import React from "react"
import MaterialTable from "../../../components/materialTable"
import SectionTitle from "../../../elements/sectionTitle"
import AddFab from "../../../elements/addFab"
import StatePort from "./statePort"
import AddIad from "./addIad"
import EditIad from "./editIad"
import DetailIad from "./detailIad"
import User from "../../../assets/images/user.jpeg"
import { Grid, Tooltip, IconButton, Avatar } from "@material-ui/core"
import StateTarjet from "./stateTarjet"
import DescriptionIcon from "@material-ui/icons/Description"
import WorkIcon from "@material-ui/icons/Work"
import BarChartIcon from "@material-ui/icons/BarChart"
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode"
import CustomCard from "../../../components/card"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const IadIndex = (props) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const [open1, setOpen1] = React.useState(false)
  const [openDetail, setOpenDetail] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClickOpen1 = () => {
    setOpen1(true)
  }

  const handleClickOpenDetail = () => {
    setOpenDetail(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleClose1 = () => {
    setOpen1(false)
  }

  const handleCloseDetail = () => {
    setOpenDetail(false)
  }

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12}>
          <SectionTitle label={"Asignacion de IAD"} />
        </Grid>

        <Grid item xs={12} lg={12}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <CustomCard title=" Servicios Activos" content="59" background={"linear-gradient(to left, #7559ce, #6f68d7, #6a76de, #6783e4, #678fe9"} icons={<BarChartIcon />} />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <CustomCard title="Servicios desconectados" content="59" background={"linear-gradient(to right, #a77ffc, #ca77ea, #e370d6, #f46dc1, #ff6eac)"} icons={<BarChartIcon />} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={10}>
          <MaterialTable
            /* search value */
            searchPayload={{
              title: "Seccion de busqueda",
              searchParam: [
                { value: 1, label: "Iad" },
                { value: 2, label: "Nodo" },
              ],
            }}
            /* search value */
            noSearch
            title={"Registro de Equipos"}
            columns={[
              {
                field: "user",
                render: (rowData) => {
                  return <Avatar style={{ float: "right" }} src={User} />
                },
              },

              {
                title: " Nodo",
                field: "nodo",
              },

              {
                title: "Tarjetas",
                field: "tarjeta",
              },
              {
                title: "Puertos",
                field: "puertos",
              },

              {
                title: "Acciones",
                render: (rowData) => (
                  <>
                    <Tooltip title="Modificar Iad">
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
                    <Tooltip title="Detalle de Registro">
                      <IconButton
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        onClick={handleClickOpenDetail}
                      >
                        <DescriptionIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                ),
              },
            ]}
            data={{
              items: [
                {
                  nodo: "Sambil",
                  tarjeta: "6",
                  puertos: "22",
                },
                {
                  nodo: "San ignacio",
                  tarjeta: "4",
                  puertos: "55",
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
        <WorkIcon style={{ marginRight: "15px" }} /> Agregar nuevo Iad
      </AddFab>

      <AddIad open={open} handleClose={handleClose} title={"   Gestionar Iad"} />
      <EditIad open={open1} handleClose={handleClose1} title={"   Editar Iad"} />
      <DetailIad open={openDetail} handleClose={handleCloseDetail} title={"Detalle de Iad"} />
    </>
  )
}

export default IadIndex
