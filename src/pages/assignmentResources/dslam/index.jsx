import React from "react"
import MaterialTable from "../../../components/materialTable"
import SectionTitle from "../../../elements/sectionTitle"
import AddFab from "../../../elements/addFab"
import StatePort from "./statePort"
import AddDslam from "./addDslam"
import EditDslam from "./editDslam"
import DetailDslam from "./detailDslam"
import User from "../../../assets/images/user.jpeg"
import { Grid, Tooltip, IconButton, Avatar } from "@material-ui/core"
import StateTarjet from "./stateTarjet"
import DescriptionIcon from "@material-ui/icons/Description"
import WorkIcon from "@material-ui/icons/Work"
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode"





const ClienteIndex = (props) => {
  

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
          <SectionTitle label={"Asignacion de Dslam"} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <StateTarjet />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <StatePort />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={10}>
          <MaterialTable
            /* search value */
            searchPayload={{
              title: "Seccion de busqueda",
              searchParam: [
                { value: 1, label: "Dslam" },
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
                title: "Dslam",
                field: "dslam",
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
                title: "Acciones",
                render: (rowData) => (
                  <>
                    <Tooltip title="Modificar Dslam">
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
                  dslam: "Mxk-319 ",
                  nodo: "Sambil",
                  tarjeta: "6",
                },
                {
                  dslam: "Huawei ",
                  nodo: "San ignacio",
                  tarjeta: "4",
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
        <WorkIcon style={{ marginRight: "15px" }} /> Agregar nuevo Dslam
      </AddFab>

      <AddDslam open={open} handleClose={handleClose} title={"   Gestionar Dslam"} />
      <EditDslam open={open1} handleClose={handleClose1} title={"   Editar Dslam"} />
      <DetailDslam open={openDetail} handleClose={handleCloseDetail} title={"Detalle de Dslam"} />
    </>
  )
}

export default ClienteIndex
