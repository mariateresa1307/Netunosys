import React from "react"
import { Grid, Paper, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Button, Divider, Checkbox } from "@material-ui/core"
import { Folder as FolderIcon } from "@material-ui/icons"
import SectionTitle from "../../../elements/sectionTitle"
import renderPDF from "../../../elements/renderPDF"

const lista = [
  { label: "Recursos disponibles", helperText: "Listar los Recursos disponibles segun los equipos " },
  { label: "Estado de servicios", helperText: "Listar servicios listandolos por estados generados en el mes" },
  {
    label: "servicios por instalar ",
    helperText: "Listar todas los servicios que esta por",
  },
  { label: "Clientes sin servicios", helperText: "Listar los clientes que no manejan actualmente un servicio activo" },
]

const generate = (element) => {
  return element.map((section, index) => (
    <ListItem key={index}>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={section.label} secondary={section.helperText} />
      <ListItemSecondaryAction>
        <Checkbox checked={index % 2} />
      </ListItemSecondaryAction>
    </ListItem>
  ))
}

export default () => {
  return (
    <>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12}>
          <SectionTitle label={"Reportes"} />
        </Grid>

        <Grid item xs={12} lg={10}>
          <Paper variant="outlined" style={{ padding: "20px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h5">Seleccione un parámetro de búsqueda</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <List dense={false}>{generate(lista)}</List>

                <Divider
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                />
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Button>Limpiar</Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button variant="outlined" color="primary" fullWidth>
                      Buscar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                {renderPDF()}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
