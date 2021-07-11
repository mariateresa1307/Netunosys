import React from "react"
import MaterialTable from "../../components/materialTable"
import SectionTitle from "../../elements/sectionTitle"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode"
import Tooltip from "@material-ui/core/Tooltip"
import AddFab from "../../elements/addFab"
import CustomCard from "../../components/card"
import BarChartIcon from "@material-ui/icons/BarChart"
import WorkIcon from "@material-ui/icons/Work"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import User from "../../assets/images/user.jpeg"
import ListAltIcon from "@material-ui/icons/ListAlt"
import CustomModal from "./addFtto"
import ModifyModal from "./addFtto"
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const IndexHome = (props) => {
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
          <SectionTitle label={" Gestionar Servicios FTTO "} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <CustomCard title=" FiberPon Premium" content="59" background={"linear-gradient(to left, #7559ce, #6f68d7, #6a76de, #6783e4, #678fe9"} icons={<BarChartIcon />} />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <CustomCard title="FiberPon Business Plus " content="59" background={"linear-gradient(to right, #a77ffc, #ca77ea, #e370d6, #f46dc1, #ff6eac)"} icons={<BarChartIcon />} />
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
                { value: 4, label: "OLT" },
                { value: 5, label: "SerialPON" },
                { value: 6, label: "MAC" },
                { value: 7, label: "Ip Estatica Asignada" },
              ],
            }}
            /* search value */
            noSearch
            title={"Registros de Servicios"}
            columns={[
              {
                field: "user",
                render: (rowData) => {
                  return <Avatar style={{ float: "right" }} src={User} />
                },
              },
              {
                title: "Abonado",
                field: "Abonado",
              },
              {
                title: "Contrato ",
                field: "Contrato",
              },
              {
                title: "Vlan",
                field: "vlan",
              },
              {
                title: "ONT ID",
                field: "OntID",
              },
              {
                title: "Cliente",
                field: "Cliente",
              },

              {
                title: "OLT",
                field: "olt",
              },

              {
                title: "Nodo",
                field: "Nodo",
              },
              {
                title: "Serial PON",
                field: "SerialPON",
              },
              {
                title: "MAC",
                field: "Mac",
              },
              {
                title: "FiberPon",
                field: "FiberPon",
              },
              {
                title: "Paquete",
                field: "Paquete",
              },
              {
                title: "Ip Estatica Asignada",
                field: "IpEstaticaAsignada",
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
                  Abonado: "1037782 ",
                  Contrato: "10089609",
                  vlan: "813",
                  OntID: "127",
                  Cliente: "COMERCIALIZADORA RAHCO",
                  olt: "PQC",
                  Nodo: "CCSPQC00312A",
                  SerialPON: "HWTCA53457A0",
                  Mac: "8C426DE1A621",
                  FiberPon: "Premium",
                  Paquete: "100",
                  IpEstaticaAsignada: "170.246.77.18",
                },
                {
                  Abonado: "1044779",
                  Contrato: "10094843",
                  vlan: "829",
                  OntID: "126",
                  Cliente: "INVERSIONES DRC",
                  olt: "PQC",
                  Nodo: "CCSPQC00309A",
                  SerialPON: "HWTC753D8AA3",
                  Mac: "A0DF15280AB2",
                  FiberPon: "Premium",
                  Paquete: "100",
                  IpEstaticaAsignada: "170.246.77.38",
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
        <WorkIcon style={{ marginRight: "15px" }} /> Agregar Servicio FTTO
      </AddFab>

      <CustomModal open={open} handleClose={handleClose} title={"   Gestionar Servicio FTTO"} />
      <ModifyModal open={open1} handleClose={handleClose1} title={"   Gestionar Servicio FTTO"} />
    </>
  )
}

export default IndexHome
