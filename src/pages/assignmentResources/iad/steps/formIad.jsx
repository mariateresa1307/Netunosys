import React from "react"
import { TextField, Grid } from "@material-ui/core"

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
      <Grid container spacing={0} justify="center" style={{ marginTop: "10px" }}>
        <Grid item xs={12} lg={10}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8} md={6}>
              <TextField label="Iad" fullWidth variant="filled" />
            </Grid>

            <Grid item xs={12} sm={8} md={6}>
              <TextField label=" Nodo" fullWidth variant="filled" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ModalClient
