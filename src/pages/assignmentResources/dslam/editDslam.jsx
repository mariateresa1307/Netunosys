import React, { useState } from "react"
import CustomModal from "../../../components/customModal"
import { TextField, Button, Grid } from "@material-ui/core"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import StepForm from "./steps/formDlam"
import StepForm1 from "./steps/specificationResources"
import { Spring } from "react-spring/renderprops"
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet"
import PuertosDslam from "../../../components/puertosDslam"
import panel from "../../../assets/images/panel.png"

const EditDslam = (props) => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [form, setForm] = useState({ dslam: "", nodo: "", tarjeta: [] })

  const handleBack = () => {
    setActiveStep((prev) => prev - 1)
  }

  const handleNext = () => {
    setActiveStep((prev) => prev + 1)
  }

  return (
    <>
      <CustomModal header={"Gestión de Vlan"} {...props}>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} sm={12} md={12} ls={12} style={{ textAlign: "center" }}>
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={300}>
              {(springProps) => (
                <SettingsEthernetIcon
                  style={{
                    color: "#435867",
                    fontSize: "200px",
                    ...springProps,
                  }}
                />
              )}
            </Spring>
          </Grid>

          <Grid item xs={12} sm={8} md={4}>
            <TextField label="Dslam" fullWidth variant="filled" />
          </Grid>

          <Grid item xs={12} sm={8} md={4}>
            <TextField label=" Nodo" fullWidth variant="filled" />
          </Grid>

          <Grid item xs={12} sm={9} md={8} ls={6}>
            <div
              style={{
                background: "#3d454c",
                width: "100%",
                minHeight: "138px",
                marginBottom: "30px",
                paddingTop: "27px",
                borderRadius: "8px",
                boxShadow: "rgb(75 81 86 / 61%) 0px 3px 20px 0px, rgb(75 81 86 / 10%) 0px 0px 2px 0px, rgb(75 81 86 / 14%) 0px 1px 2px 0px",
                marginTop: "20px",
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={2} style={{}}>
                  <img
                    src={panel}
                    style={{
                      height: "112px",
                      marginTop: "-14px",
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={7}>
                  <PuertosDslam />
                </Grid>
                <Grid item xs={12} sm={12} md={2} style={{ textAlign: "right" }}>
                  <TextField label="Puertos" variant="filled" style={{ backgroundColor: "#ffffffa3" }} />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </CustomModal>
    </>
  )
}

export default EditDslam
