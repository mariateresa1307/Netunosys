import React from "react";
import CustomModal from "../../../components/customModal";
import {Select ,Button ,TextField, Typography, MenuItem, FormControl,InputLabel, Divider, Grid} from "@material-ui/core";
import { Spring } from "react-spring/renderprops";
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';


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

      <Grid container spacing={0} justify="center" style={{ marginTop: "10px" }}>
          <Grid item xs={12} lg={10}>
            <Grid container spacing={4}>
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

              <Grid item xs={12} style={{ marginTop: "-60px" }}>
                <Typography variant="h6">
                  Datos de Vlans
                  <Divider />
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <TextField label="Grupo Nortel" fullWidth variant="filled" />
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <TextField label=" Numero de Vlan" fullWidth variant="filled" />
              </Grid>

      <Grid item xs={12} sm={4} md={4}>
        <FormControl fullWidth variant="filled" >
          <InputLabel fullWidth id="3">Dslam</InputLabel>
          <Select value={1} variant="filled">

            <MenuItem value={10}>Bitstorm</MenuItem>
            <MenuItem value={20}>Huawei </MenuItem>
            <MenuItem value={20}>Malc </MenuItem>
            <MenuItem value={20}>Mx-160 </MenuItem>
            <MenuItem value={20}>Mxk-316 </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4} md={4}>
        <FormControl fullWidth variant="filled" >
          <InputLabel fullWidth id="3">Nodo</InputLabel>
          <Select value={1} variant="filled">

            <MenuItem value={10}>Bitstorm</MenuItem>
            <MenuItem value={20}>Huawei </MenuItem>
            <MenuItem value={20}>Malc </MenuItem>
            <MenuItem value={20}>Mx-160 </MenuItem>
            <MenuItem value={20}>Mxk-316 </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4} md={4}>
        <FormControl fullWidth variant="filled" >
          <InputLabel fullWidth id="3">Estatus</InputLabel>
          <Select value={1} variant="filled">

            <MenuItem value={10}>En Uso</MenuItem>
            <MenuItem value={20}>Libre </MenuItem>
            <MenuItem value={20}>Por instalar </MenuItem>
            
          </Select>
        </FormControl>
      </Grid>
             

              <Grid item xs={12} sm={12} md={12}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ float: "right", marginTop: "100px", marginLeft: "538px", marginBottom: "20px" }}
                >
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    
       
      </CustomModal>
    </>
  );
};

export default ModalClient;
