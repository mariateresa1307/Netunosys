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
import DetallesRegistro from "./modalDetalleServicio"
import CustomModal from "./addCliente"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import User from "../../assets/images/user.jpeg"
import ListAltIcon from "@material-ui/icons/ListAlt"
import ModifyCustomers from "../../components/modifyCustomers"
import Carousel from "../../components/carousel"

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
          <SectionTitle label={" Gestionar Clientes "} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Carousel />
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
              <CustomCard title=" Conectados" content="59" background={"linear-gradient(to right, #0ec8d5, #00d7d4, #00e6cc, #00f3bc, #37ffa5)"} icons={<BarChartIcon />} />
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
              <CustomCard title="Por Instalar" content="59" background={"linear-gradient(to right, #fe8c81 0%, #fbd323 100%)"} icons={<BarChartIcon />} />
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
              <CustomCard
                title="Suspendido"
                content="59"
                background={
                  "radial-gradient(circle at -20.71% 50%, #de9c2c 0, #e5922a 8.33%, #ea852b 16.67%, #ee772d 25%, #f16731 33.33%, #f35436 41.67%, #f23c3c 50%, #f01843 58.33%, #ed004c 66.67%, #e90057 75%, #e30064 83.33%, #db0071 91.67%, #d10080 100%)"
                }
                icons={<BarChartIcon />}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
              <CustomCard title=" Desconectados" content="59" background={"linear-gradient(to left, #7559ce, #6f68d7, #6a76de, #6783e4, #678fe9"} icons={<BarChartIcon />} />
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
                title: "Abonado",
                field: "abonado",
              },
              {
                title: " Contrato",
                field: "contrato",
              },

              {
                title: "Vlan",
                field: "vlan",
              },
              {
                title: "Id Cliente",
                field: "id",
              },
              {
                title: "Ip Serial",
                field: "ip",
              },
              {
                title: "Equipo Core",
                field: "equipoCore",
              },
              {
                title: "Dslam",
                field: "dslam",
              },
              {
                title: "Tarjeta",
                field: "tarjeta",
              },
              {
                title: "Puerto",
                field: "puerto",
              },
              {
                title: "Bw",
                field: "bw",
              },
              {
                title: "Servicio",
                field: "servicio",
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
                        onClick={handleClickOpen2}
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
                        onClick={handleClickOpen1}
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
                  abonado: "829871 ",
                  contrato: "10022759",
                  vlan: "2824",
                  id: "Corp Tecnologia Global 21 ",
                  ip: "190.6.63.182",
                  equipoCore: "7604 PQC",
                  dslam: "MXK319 PQC",
                  tarjeta: "3",
                  puerto: "4",
                  bw: "1MB/10MB",
                  servicio: "ADSL2+",
                  bloqueIp: " 190.6.63.180/30",
                },
                {
                  abonado: "829871 ",
                  contrato: "10022759",
                  vlan: "2824",
                  id: "Corp Tecnologia Global 21 ",
                  ip: "190.6.63.182",
                  equipoCore: "7604 PQC",
                  dslam: "MXK319 PQC",
                  tarjeta: "3",
                  puerto: "4",
                  bw: "1MB/10MB",
                  servicio: "ADSL2+",
                  bloqueIp: " 190.6.63.180/30",
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
        <WorkIcon style={{ marginRight: "15px" }} /> Agregar nuevo cliente
      </AddFab>

      <CustomModal open={open} handleClose={handleClose} title={"   Gestionar Clientes"} />
      <ModifyCustomers open={open2} handleClose={handleClose2} title={" Modificar Cliente"} />
      <DetallesRegistro open1={open1} handleClose={handleClose1} title={"Detalles del cliente"} />
    </>
  )
}

export default ClienteIndex
