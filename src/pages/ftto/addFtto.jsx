import React from "react"

import FttoRecord from "./detail/fttoRecord"
import CustomModal from "../../components/customModal"
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate"
import { IconButton, Grid, Typography, Tooltip } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import ContactlessIcon from "@material-ui/icons/Contactless"
const Ftto = (props) => {
  return (
    <CustomModal header={"Gestión de clientes"} {...props}>
      <Grid container justify="center">
        <Grid item xs={12} sm={9} md={8} ls={6} style={{ textAlign: "center" }}>
          <ContactlessIcon style={{ fontSize: "167px", color: "#28282eb0" }} />
        </Grid>

        <Grid xs={12} sm={9} md={8} ls={6}>
          <Tooltip title="Editar Registro">
            <IconButton aria-label="Modificar" style={{ float: "right" }}>
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <FttoRecord />
        </Grid>
      </Grid>
    </CustomModal>
  )
}

export default Ftto
