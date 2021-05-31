import React from "react"

import IncidentRecord from "./detail/incidentRecord"
import CustomModal from "../../components/customModal"
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate"
import { IconButton, Grid, Typography, Tooltip } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"

const ModifyCustomers = (props) => {
  return (
    <CustomModal header={"Gestión de clientes"} {...props}>
      <Grid container justify="center">
        <Grid item xs={12} sm={9} md={8} ls={6} style={{ textAlign: "center" }}>
          <AssignmentLateIcon style={{ fontSize: "167px", color: "#1a237eb0" }} />
        </Grid>

        <Grid xs={12} sm={9} md={8} ls={6}>
          <Tooltip title="Editar Registro">
            <IconButton aria-label="Modificar" style={{ float: "right" }}>
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <IncidentRecord />
        </Grid>
      </Grid>
    </CustomModal>
  )
}

export default ModifyCustomers
