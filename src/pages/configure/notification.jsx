import React from "react"
import { Card, CardContent, Grid, makeStyles, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Button } from "@material-ui/core"
import SectionTitle from "../../elements/sectionTitle"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}))

const data = [
  {
    subject: "Dayver Sharp",
    avatar: "/static/images/avatar/1.jpg",
    title: "Solicitud de Reconexion",
    subtitle: "Global Sharpi",
    description: " Se solicita la reconexion del servicio por cancelacion de deuda",
  },
  {
    subject: "Jose Sharp",
    avatar: "/static/images/avatar/2.jpg",
    title: "Finalizacion de Ordenes",
    subtitle: "Jewell - ordenes Activas",
    description: " Se solicita finalizar las ordenes administrativas",
  },
  {
    subject: "Kenny Sharp",
    avatar: "/static/images/avatar/1.jpg",
    title: "Cambio de Razon Social",
    subtitle: "Ali Connors",
    description: "Actualizar cambio de Razon Social",
  },
  {
    subject: "Michi Sharp",
    avatar: "/static/images/avatar/1.jpg",
    title: "Supension de servicio",
    subtitle: "Ali Connors",
    description: " A solicitud suspender el servicio ....",
  },
  {
    subject: "Hollmark Sharp",
    avatar: "/static/images/avatar/1.jpg",
    title: "Contacto Cliente por falla",
    subtitle: "Ali Connors",
    description: " Cliente informa falla de servicio…",
  },
]

const Notification = ({ subject, avatar, title, subtitle, description, classes }) => (
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt={subject} src={avatar} />
    </ListItemAvatar>
    <Grid item xs={8}>
      <ListItemText
        primary={title}
        secondary={
          <React.Fragment>
            <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
              {subtitle}
            </Typography>
            {description}
          </React.Fragment>
        }
      />
    </Grid>
    <Grid item xs={4} style={{ textAlign: "end" }}>
      <Button variant="contained" disableElevation style={{ marginRight: "2px", backgroundColor: "#1a237ea1", color: "#FFFF" }} size="small">
        Finalizar
      </Button>
      <Button disableElevation size="small" variant="contained" style={{ backgroundColor: "#ff8d04", color: "#FFFF" }}>
        Comentar
      </Button>
    </Grid>
  </ListItem>
)

const NotificationsPage = () => {
  const classes = useStyles()

  return (
    <section id="notifications-page">
      <Grid item xs={12}>
        <SectionTitle label={"Notificaciones "} />
      </Grid>

      <Grid container justify="center" style={{ paddingTop: "70px" }}>
        <Grid item xs={12} sm={12} md={12} lg={10}>
          <Card>
            <Typography display="block" align="left" gutterBottom style={{ paddingLeft: "10px" }}>
              <span style={{ fontWeight: "bold" }}>Hoy</span>{" "}
            </Typography>
            <Divider />
            <CardContent>
              <Grid item xs={12} sm={12} md={12} lg={12} align="center">
                <List className={classes.root}>
                  {data.map((i, k) => (
                    <React.Fragment key={`notification-${k}`}>
                      <Notification {...i} classes={classes} />
                      {k !== data.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  )
}

export default NotificationsPage
