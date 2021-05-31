import React from "react"
import CustomModal from "../../components/customModal"
import Grid from "@material-ui/core/Grid"
import { Spring } from "react-spring/renderprops"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import { makeStyles } from "@material-ui/core/styles"
import DataGrid from "../../components/dataGrid"
import Tooltip from "@material-ui/core/Tooltip"
import Avatar from "@material-ui/core/Avatar"
import User from "../../assets/images/user.jpeg"
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}))

const ModalUsuario = (props) => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  })
  const [age, setAge] = React.useState("")
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <CustomModal header={" Gestionar Usuarios"} {...props}>
        <Grid
          container
          spacing={4}
          justify="center"
          style={{
            marginTop: "20px",
          }}
        >
          <Grid item xs={12} sm={9} md={8} ls={6}>
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                style={{
                  textAlign: "center",
                }}
              >
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={300}>
                  {(springProps) => (
                    <AccountCircleIcon
                      style={{
                        color: "#a9a9a9",
                        fontSize: "200px",
                        ...springProps,
                      }}
                    />
                  )}
                </Spring>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  textAlign: "center",
                }}
              >
                <Typography variant="h5">Registro de actividad de Usuarios</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} ls={12}>
                <DataGrid
                  noSearch
                  title={"Registros de Usuarios"}
                  columns={[
                    {
                      title: "Modulo",
                      field: "modulo",
                    },
                    {
                      title: "Descripcion",
                      field: "descripcion",
                    },
                    {
                      title: " Fecha",
                      field: "fecha",
                    },
                    {
                      title: "Accion ",
                      field: "accion",
                    },
                    {
                      title: "Estado anterior",
                      field: "estadoAnterior",
                    },
                  ]}
                  data={{
                    items: [
                      {
                        id: "123213",
                        modulo: "Clientes ip",
                        nombreusuario: "Alix Martin",
                        descripcion: "Corp Tecnologia Global 21 ",
                        fecha: "11 MAY 12:56  2021",
                        accion: "modificar ",

                        estadoAnterior: "Corp Tecnologia  ",
                      },
                      {
                        id: "123213",
                        modulo: "Clientes ",
                        nombreusuario: "Miguel Mendez",
                        descripcion: "Corp Tecnologia Global 21 ",
                        fecha: "11 MAY 12:56  2021",
                        accion: "borrar",
                        estadoAnterior: "Corp Tecnologia",
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
          </Grid>
        </Grid>
      </CustomModal>
    </>
  )
}

export default ModalUsuario
