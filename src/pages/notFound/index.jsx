import React from "react"
import img from "../../assets/images/2119468.jpg"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import history from "../../helpers/history"
import { URL_PAGES } from "../../helpers/constants/routes"

const IndexNotFound = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        minHeight: "500px",
      }}
    >
      <div style={{ marginTop: "200px", marginBottom: "100px", background: "#ffffff82", padding: "50px" }}>
        <Typography
          variant="h1"
          gutterBottom
          style={{
            marginBottom: "0px",
            color: "#383838",
            fontWeight: "bold",
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          style={{
            color: "#383838",
          }}
        >
          Página en Desarrollo
        </Typography>
        <Button onClick={() => history.push(URL_PAGES.home.path)} color="primary" variant="contained" disableElevation>
          Ir al inicio
        </Button>
      </div>
    </div>
  )
}

export default IndexNotFound
