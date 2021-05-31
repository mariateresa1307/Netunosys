import React, { useState } from "react"
import CustomModal from "../../../components/customModal"
import { TextField, Button, Grid } from "@material-ui/core"

import { Spring } from "react-spring/renderprops"
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet"
import panel from "../../../assets/images/panel.png"

import PuertoDown from "../../../assets/images/puertoDown.png"
import PuertoUp from "../../../assets/images/puertoUp.png"
import PuertoDamaged from "../../../assets/images/puertoDamaged.png"
import { makeStyles } from "@material-ui/core/styles"
import Popover from "@material-ui/core/Popover"
import Tooltip from "@material-ui/core/Tooltip"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import DetailPort from "../../../components/CustomizedDialogs"
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}))

const DetailDslam = (props) => {
  // Declara una nueva variable de estado, que llamaremos "portState" la cual almacenara el estado del puerto .
  const classes = useStyles()
  const [portState, setState] = useState("Down")
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open1, setOpen1] = React.useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickOpen1 = () => {
    setOpen1(true)
  }

  const handleClose1 = () => {
    setOpen1(false)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  // se define una funcion "handleClickMessage" la cual cambiara el estado con un click y manejara el objeto auxState que almacenara el estado actual del puerto
  const handleClickMessage = (auxState) => {
    setState(auxState)
  }
  return (
    <>
      <CustomModal header={"Gestión de Vlan"} {...props}>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} sm={12} md={12} ls={12} style={{ textAlign: "center" }}>
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={300}>
              {(springProps) => (
                <SettingsEthernetIcon
                  style={{
                    color: "#435867",
                    fontSize: "200px",
                    ...springProps,
                  }}
                />
              )}
            </Spring>
          </Grid>

          <Grid item xs={12} sm={9} md={8} ls={6}>
            <Grid container justify="center" spacing={4}>
              <Grid item xs={12} sm={8} md={6}>
                <TextField label="Dslam" fullWidth variant="filled" />
              </Grid>

              <Grid item xs={12} sm={8} md={6}>
                <TextField label=" Nodo" fullWidth variant="filled" />
              </Grid>
            </Grid>

            <div
              style={{
                background: "#3d454c",
                width: "100%",
                minHeight: "138px",
                marginBottom: "30px",
                paddingTop: "27px",
                borderRadius: "8px",
                boxShadow: "rgb(75 81 86 / 61%) 0px 3px 20px 0px, rgb(75 81 86 / 10%) 0px 0px 2px 0px, rgb(75 81 86 / 14%) 0px 1px 2px 0px",
                marginTop: "20px",
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={2} style={{}}>
                  <img
                    src={panel}
                    style={{
                      height: "112px",
                      marginTop: "-14px",
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={7}>
                  <div>
                    <Button onClick={handleClickOpen1}>
                      {portState === "Down" && (
                        <img
                          src={PuertoDown}
                          style={{
                            width: "32px",
                            height: "35px",
                          }}
                        />
                      )}

                      {portState === "Up" && (
                        <img
                          src={PuertoUp}
                          style={{
                            width: "32px",
                            height: "35px",
                          }}
                        />
                      )}

                      {portState === "Damaged" && (
                        <img
                          src={PuertoDamaged}
                          style={{
                            width: "32px",
                            height: "35px",
                          }}
                        />
                      )}
                    </Button>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={2} style={{ textAlign: "right" }}>
                  <TextField label="Puertos" variant="filled" style={{ backgroundColor: "#ffffffa3" }} />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </CustomModal>

      <DetailPort open1={open1} handleClose={handleClose1} title={"Puerto[numero de Puerto]"} />
    </>
  )
}

export default DetailDslam
