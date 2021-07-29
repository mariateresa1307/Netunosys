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
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle"
import CustomModal from "./addUser"
import Avatar from "@material-ui/core/Avatar"
import User from "../../assets/images/user.jpeg"
import { useDispatch, useSelector } from "react-redux"
import { obtenerCantidadPorEstadoAction, obtenerUsuarioAction } from "../../actions/users"

const UsuarioIndex = () => {
  const dispatch = useDispatch()
  const [contUserActivos, userDataset] = useSelector((store) => [store.contUserActivos, store.userDataset])
  const [state, setState] = React.useState({ dataToEdit: null, open: false })
  //const [open, setOpen] = React.useState(false)

  /*const handleClickOpen = () => {
    setOpen(false)
  }*/
  const handleStateModal = (props) => {
    // console.log("aqui")
    setState((prev) => ({ ...prev, open: !prev.open, dataToEdit: null }))
  }

  /* const handleClose = () => {
    setOpen(false)
  }
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])*/
  React.useEffect(() => {
    dispatch(obtenerCantidadPorEstadoAction())
  }, [dispatch])

  React.useEffect(() => {
    dispatch(obtenerUsuarioAction({}))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [dispatch])

  return (
    <>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12}>
          <SectionTitle label={"Gestión de Usuarios"} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={6} md={5} lg={5}>
              <CustomCard title=" Activos" content={contUserActivos.activos} background={"linear-gradient(to right, #0ec8d5, #00d7d4, #00e6cc, #00f3bc, #37ffa5)"} icons={<BarChartIcon />} />
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={5}>
              <CustomCard
                title="Inactivo"
                content={contUserActivos.inactivos}
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
                field: ["nombre", "apellido"],
                render: (rowData) => `${rowData.nombre} ${rowData.apellido}`,
              },
              {
                title: "Usuario",
                field: "usuario",
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
                field: "activo",
                render: (rowData) => {
                  return (
                    <Tooltip title="Es un usuario activo del sistema">
                      {rowData ? (
                        <CheckCircleIcon style={{ color: "#207d20", marginLeft: "auto", marginRight: "auto", display: "block", fontSize: "25px" }} />
                      ) : (
                        <RemoveCircleIcon style={{ color: "#c71010", marginLeft: "auto", marginRight: "auto", display: "block", fontSize: "25px" }} />
                      )}
                    </Tooltip>
                  )
                },
              },
              {
                title: "Fecha de ultima Sesion  ",
                field: "actualizado",
              },

              {
                title: "Acciones",
                render: (rowData) => (
                  <>
                    <Tooltip title="Modificar usuario">
                      <IconButton
                        // onClick={handleClickOpen}
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          display: "block",
                        }}
                        onClick={() => {
                          setState((prev) => ({ ...prev, open: !prev.open, dataToEdit: rowData }))
                        }}
                      >
                        <ChromeReaderModeIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                ),
              },
            ]}
            data={userDataset}
            fetchData={obtenerUsuarioAction}
          />
        </Grid>
      </Grid>

      <AddFab variant="outlined" type="button" color="primary" /*onClick={handleClickOpen}*/ onClick={handleStateModal}>
        <WorkIcon style={{ marginRight: "15px" }} /> Agregar Usuario
      </AddFab>

      <CustomModal open={state.open} handleClose={handleStateModal} title={"   Gestionar Usuarios"} dataToEdit={state.dataToEdit} />
    </>
  )
}

export default UsuarioIndex
