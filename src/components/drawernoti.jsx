import React from "react"
import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import NotificationsIcon from "@material-ui/icons/Notifications"
import { URL_PAGES } from "../helpers/constants/routes"
import { menuClose } from "../actions/menu"
import { useDispatch } from "react-redux"
import history from "../helpers/history"
import Typography from "@material-ui/core/Typography"

import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import AssignmentIcon from "@material-ui/icons/Assignment"
import Avatar from "@material-ui/core/Avatar"
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep"
import Tooltip from "@material-ui/core/Tooltip"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function SimplePaper() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [checked, setChecked] = React.useState([1])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const goTo = (path) => {
    history.push(path)

    setTimeout(function () {
      dispatch(menuClose())
    }, 500)
  }

  return (
    <div style={{ width: "300px" }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "rgba(255, 255, 255, 0.2) 0px 2px 4px -1px, rgba(242, 239, 239, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
        }}
      >
        <Toolbar variant="dense" style={{ minHeight: "61px" }}>
          <IconButton onClick={() => goTo(URL_PAGES.notification.path)} style={{ marginRight: "15px" }}>
            <NotificationsIcon style={{ color: "#1976d2", fontSize: "30px" }} />
          </IconButton>

          <Typography variant="h6" color="inherit">
            Notificaciones
          </Typography>
        </Toolbar>
      </AppBar>

      <div
        style={{
          padding: "0px",
        }}
      >
        <Grid container spacing={0} style={{ marginTop: "20px" }}>
          <Grid item xs={12}>
            <List dense className={classes.root}>
              {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`
                return (
                  <ListItem key={value} button>
                    <ListItemAvatar>
                      <Avatar alt={`Avatar n°${value + 1}`} src={`/static/images/avatar/${value + 1}.jpg`} />
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                    <ListItemSecondaryAction>
                      <Tooltip title="Ver Detalle">
                        <IconButton onClick={() => goTo(URL_PAGES.notificacion.path)} edge="end" aria-label="comments">
                          <AssignmentIcon />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Borrar">
                        <IconButton edge="end" aria-label="comments">
                          <DeleteSweepIcon />
                        </IconButton>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              })}
            </List>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
