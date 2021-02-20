import React from "react";
import CustomModal from "../../../components/customModal";
import {Select ,Button ,Grid} from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import StepForm from "./steps/formDlam";
import StepForm1 from "./steps/specificationResources";
import { Spring } from "react-spring/renderprops";
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';

const steps = ["Identificacion del Dslam","Especificacion de los recursos "];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <StepForm/>;
      case 1:
        return <StepForm1/>;
     
  
  }
};

const ModalClient = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  return (
    <>
      <CustomModal header={"Gestión de Vlan"} {...props}>
      <Grid container spacing={4} justify="center" >
      <Grid item xs={12} sm={12} md={12} ls={12} style={{ textAlign: "center" }}>
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={300}>
                  {(springProps) => (
                    <SettingsEthernetIcon
                      style={{
                        color: "#435867",
                        fontSize: "200px",
                        ...springProps
                      }}
                    />
                  )}
                </Spring>
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
                          marginRight: "40px"
                        }}
                      >
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          style={{
                            marginRight: "5px"
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
  );
};

export default ModalClient;
