import React, { useEffect } from "react"
import img1 from "../assets/images/logonetuno.jpg"
import Grid from "@material-ui/core/Grid"
import Planet from "../components/planet"
import Wave from "../components/wave"
const IndexHome = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} lg={12} sm={8} md={8} style={{ zIndex: "20" }}>
          <img
            src={img1}
            alt=""
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              marginTop: "240px",
              maxWidth: "550px",
              width: "50%",
              marginTop: "20%",
            }}
          />

          <Planet />
        </Grid>
      </Grid>
      <Wave />
    </>
  )
}

export default IndexHome
