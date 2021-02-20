import React from "react";
import CustomModal from "../../components/detalleRegistro";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import StepCliente from "./steps/cliente";
import StepDslam from "./steps/dslam";
import FaceIcon from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';

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
      <CustomModal header={"Gestión de clientes"} {...props}>
        <Grid container spacing={4} justify="center" >
       
          <Grid item xs={12} sm={9} md={8} ls={6}>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography>
          
          </Grid>
        </Grid>
      </CustomModal>
    </>
  );
};

export default ModalClient;
