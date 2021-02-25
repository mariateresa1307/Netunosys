import React from "react"
import CustomModal from "../../components/detalleRegistro"
import Grid from "@material-ui/core/Grid"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import Button from "@material-ui/core/Button"
import StepCliente from "./steps/cliente"
import StepDslam from "./steps/dslam"
import FaceIcon from "@material-ui/icons/Face"
import Typography from "@material-ui/core/Typography"
import HowToRegIcon from "@material-ui/icons/HowToReg"

const ModalClient = (props) => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleBack = () => {
    setActiveStep((prev) => prev - 1)
  }

  const handleNext = () => {
    setActiveStep((prev) => prev + 1)
  }

  return (
    <>
      <CustomModal header={"Gestión de clientes"} style={{ minHeight: "700px" }} {...props}>
        <Grid container spacing={4} justify="center" style={{ paddingTop: "20px" }}>
          <div
            style={{
              background: "white",
              marginBottom: "15px",
              borderLeftColor: "#4a148c",
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
              <Grid item xs={12} md={3} style={{ minHeight: "70px" }}>
                <div
                  style={{
                    background: "#4a148c",
                    width: "150px",
                    height: "150px",
                    borderRadius: "100%",
                    marginRight: "auto",
                    marginLeft: "auto",
                    top: "50%",
                    position: "relative",
                    marginTop: "-75px",
                  }}
                >
                  <HowToRegIcon
                    style={{
                      marginRight: "auto",
                      marginLeft: "auto",
                      fontSize: "100px",
                      color: "white",
                      paddingTop: "19px",
                      display: "block",
                    }}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={8} md={8} lg={8}>
                <Grid container spacing={0} style={{ padding: "26px", marginTop: "-55px" }}>
                  <Grid item xs={12} sm={12}>
                    <ul>
                      <Typography display="block" align="center" gutterBottom style={{}}>
                        <span style={{ fontWeight: "bold" }}>Abonado:</span> 829871 /<span style={{ fontWeight: "bold" }}> Contrato: </span> 10022759
                      </Typography>
                      <Typography display="block" align="center" gutterBottom style={{}}>
                        <span style={{ fontWeight: "bold" }}> Id: </span> Corp Tecnologia Global 21
                      </Typography>
                    </ul>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ul>
                      <li>
                        <span style={{ fontWeight: "bold" }}> Vlan: </span> 2824
                      </li>

                      <li>
                        <span style={{ fontWeight: "bold" }}> Ip: </span> 190.6.63.182
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold" }}> Equipo Core: </span> 7604 PQC
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold" }}> Dslam: </span> MXK319 PQC
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold" }}> Tarjeta/ Puerto: </span> 3 / 21
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold" }}> BW: </span> 1MB/10MB
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold" }}> Servicio: </span> ADSL2+
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold" }}> BloqueIp: </span> 190.6.63.180/30
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold" }}> ContratoIP Adicional: </span> 10022760
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold" }}> IpAdicional: </span> 190.153.27.152/24
                      </li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ul>
                      <li>
                        <span style={{ fontWeight: "bold" }}> Aprovisionado por: </span> Maria Marrero
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold" }}> Fecha Aprovisionamiento: </span> 22/02/2019
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold" }}> Fecha entrega del servicio : </span> 24/02/2019
                      </li>
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
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </CustomModal>
    </>
  )
}
export default ModalClient
