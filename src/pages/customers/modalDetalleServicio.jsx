import React from "react"
import CustomModal from "../../components/detalleRegistro"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { makeStyles } from "@material-ui/core/styles"
import HowToRegIcon from "@material-ui/icons/HowToReg"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

const ModalClient = (props) => {
  const classes = useStyles()



  return (
    <>
      <CustomModal header={"Gestión de clientes"} style={{ minHeight: "700px" }} {...props}>
        <Grid container spacing={4} justify="center" style={{ paddingTop: "20px" }}>
          <div
            style={{
              background: "white",
              marginBottom: "15px",
              borderLeftColor: "#4a61a9",
              borderLeftStyle: "solid",
              borderLeftWidth: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "31px",
              paddingBottom: "30px",
              boxShadow: "0px 1px 4px 0px #d4d4d4",
              borderRadius: "3px",
              width: "900px",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} style={{ minHeight: "70px" }}>
                <div
                  style={{
                    background: "#4a61a9",
                    width: "150px",
                    height: "150px",
                    borderRadius: "100%",
                    marginRight: "auto",
                    marginLeft: "auto",
                    top: "50%",
                    position: "relative",
                    marginTop: "-75px",
                    marginBottom: "30px",
                  }}
                >
                  <HowToRegIcon
                    style={{
                      marginRight: "auto",
                      marginLeft: "auto",
                      fontSize: "100px",
                      color: "white",
                      paddingTop: "23px",
                      display: "block",
                    }}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={12}>
                <ul>
                  <Typography display="block" align="center" gutterBottom style={{}}>
                    <span style={{ fontWeight: "bold" }}>Abonado:</span> 829871
                  </Typography>
                  <Typography display="block" align="center" gutterBottom style={{}}>
                    <span style={{ fontWeight: "bold" }}> Id: </span> Corp Tecnologia Global 21
                  </Typography>
                </ul>
              </Grid>

              <Grid item xs={12} md={12}>
                <div className={classes.root}>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                      <Typography className={classes.heading}>
                        <span style={{ fontWeight: "bold" }}> Contrato: </span> 10022759
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid item xs={12} sm={6}>
                        <ul>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Servicio: </span> ADSL2+
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Aprovisionado por: </span> Maria Marrero
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Fecha Aprovisionamiento: </span> 22/02/2019
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Fecha entrega del servicio : </span> 24/02/2019
                          </li>
                        </ul>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <ul>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Status: </span> Conectado
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Fecha Soft: </span> 22/09/12
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Razon Social Anterior: </span> Tecnologia Global
                          </li>
                        </ul>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                      <Typography className={classes.heading}>
                        <span style={{ fontWeight: "bold" }}> Contrato: </span> 10022760
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid item xs={12} sm={6}>
                        <ul>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Servicio: </span> ADSL2+
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Aprovisionado por: </span> Maria Marrero
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Fecha Aprovisionamiento: </span> 22/02/2019
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Fecha entrega del servicio : </span> 24/02/2019
                          </li>
                        </ul>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <ul>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Status: </span> Conectado
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Fecha Soft: </span> 22/09/12
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}> Razon Social Anterior: </span> Tecnologia Global
                          </li>
                        </ul>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </CustomModal>
    </>
  )
}
export default ModalClient
