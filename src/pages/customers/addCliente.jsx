import React from "react"
import CustomModal from "../../components/customModal"
import Grid from "@material-ui/core/Grid"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import Button from "@material-ui/core/Button"
import StepCliente from "../../components/addCustomers/cliente"
import StepDslam from "../../components/addCustomers/dslam"
import FaceIcon from "@material-ui/icons/Face"
const steps = ["Identificación del cliente", "Identificación del Dslam"]

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <StepCliente />
    case 1:
      return <StepDslam />
  }
}

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
      <CustomModal header={"Gestión de clientes"} {...props}>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} sm={9} md={8} ls={6} style={{ textAlign: "center" }}>
            <FaceIcon style={{ fontSize: "167px", color: "#1a237eb0", marginBottom: "-63px" }} />
          </Grid>
          <Grid item xs={12} sm={9} md={8} ls={6}>
            <Stepper activeStep={activeStep} orientation="vertical" style={{ backgroundColor: "#fff0" }}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    {getStepContent(index)}
                    <div>
                      <div
                        style={{
                          marginTop: "30px",
                          float: "right",
                          marginRight: "40px",
                        }}
                      >
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          style={{
                            marginRight: "5px",
                          }}
                        >
                          Atras
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleNext} disableElevation>
                          {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
      </CustomModal>
    </>
  )
}

export default ModalClient
