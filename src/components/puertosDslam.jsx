import React, { useState } from "react"
import PuertoDown from "../assets/images/puertoDown.png"
import PuertoUp from "../assets/images/puertoUp.png"
import PuertoDamaged from "../assets/images/puertoDamaged.png"
import { makeStyles } from "@material-ui/core/styles"
import Popover from "@material-ui/core/Popover"
import Tooltip from "@material-ui/core/Tooltip"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}))

const PuertosDslam = () => {
  // Declara una nueva variable de estado, que llamaremos "portState" la cual almacenara el estado del puerto .
  const classes = useStyles()
  const [portState, setState] = useState("Down")
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  // se define una funcion "handleClickMessage" la cual cambiara el estado con un click y manejara el objeto auxState que almacenara el estado actual del puerto
  const handleClickMessage = (auxState) => {
    setState(auxState)
  }

  return (
    <>
      <div>
        <Button onClick={handleClick}>
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

        <Button onClick={handleClick}>
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
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <ButtonGroup variant="contained" aria-label="contained primary button group">
            <Tooltip title="Puerto Conectado">
              <Button onClick={() => handleClickMessage("Up")}> Up</Button>
            </Tooltip>
            <Tooltip title="Puerto Desconectado">
              <Button onClick={() => handleClickMessage("Down")}> Down</Button>
            </Tooltip>
            <Tooltip title="Puerto Dañado">
              <Button onClick={() => handleClickMessage("Damaged")}> Damaged</Button>
            </Tooltip>
          </ButtonGroup>
        </Popover>
      </div>
    </>
  )
}

export default PuertosDslam
