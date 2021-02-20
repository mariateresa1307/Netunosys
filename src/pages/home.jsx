import React, { useEffect } from "react";
import img1 from "../assets/images/2logonet.png";
import Grid from "@material-ui/core/Grid";

const IndexHome = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
     <Grid container justify="center">
        <Grid item xs={12} lg={12}  sm={8} md={8} style={{ zIndex: "20" }}>
      <img
        src={img1}
        alt="Administradora yuruary"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          marginTop: "240px",
          maxWidth: "550px",
          width: "50%",
          marginTop: "15%"
        }}
      />


        </Grid>
        </Grid>
    </>
  );
};

export default IndexHome;
