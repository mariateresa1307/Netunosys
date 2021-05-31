import React from "react"
import CustomModal from "../../components/detalleRegistro"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import HowToRegIcon from "@material-ui/icons/HowToReg"
import ButtonStatusCustomersIP from "../../components/buttonStatusCustomersIP"
import ButtonStatus1 from "../../components/buttonStatus1"
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
        <div style={{ boxShadow: "0px 2px 7px 3px rgba(227,219,219,0.76)" }}>
          <Grid container spacing={4} justify="center">
            <Grid item xs={12} md={12} style={{ minHeight: "70px" }}>
              <div
                style={{
                  background: "#5270bac4",
                  width: "119px",
                  height: "121px",
                  borderRadius: "100%",
                  marginRight: "auto",
                  marginLeft: "auto",
                  top: "auto",
                  position: "relative",
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
            <Grid item xs={12} sm={12} md={10} lg={12}>
              <Grid container spacing={0}>
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
                  </ul>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ul>
                    <li>
                      <span style={{ fontWeight: "bold" }}> ContratoIP Adicional: </span> 10022760
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}> IpAdicional: </span> 190.153.27.152/24
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
        <Grid container justify="center">
          <Grid xs={12} sm={10} md={12} ls={12} style={{ marginTop: "70px" }}>
            <ButtonStatusCustomersIP />
          </Grid>
        </Grid>
      </CustomModal>
    </>
  )
}
export default ModalClient
