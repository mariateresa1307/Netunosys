import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Table from "../../component/table";
import CustomCard from "../../component/card";
import ModalAdd from "../../component/modalAdd";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import StepsCategories from "../../component/steps/Categories";
import StepsRegister from "../../component/steps/Register";
import StepsService from "../../component/steps/Service";

const styles = (theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
});

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      modalOpen: false,
      columns: [
        { title: "Nombre", field: "name" },
        {
          title: "Surname",
          field: "surname",
          initialEditValue: "initial edit value",
        },
        { title: "Birth Year", field: "birthYear", type: "numeric" },
        {
          title: "Birth Place",
          field: "birthCity",
          lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
        },
      ],

      data: [
        { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        {
          name: "Zerya Betül",
          surname: "Baran",
          birthYear: 2017,
          birthCity: 34,
        },
      ],
    };

    this.getSteps = this.getSteps.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  getSteps() {
    return [
      "Completa los primeros Datos",
      "Create an ad group",
      "Create an ad",
      "Create an ad",
    ];
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return <StepsCategories />;

      case 1:
        return <StepsRegister />;
      case 2:
        return <StepsService />;
      case 3:
        return <StepsRegister />;
      default:
        return "Unknown step";
    }
  }

  handleBack() {
    this.setState((prev) => ({
      activeStep: prev.activeStep - 1,
    }));
  }

  handleNext() {
    this.setState((prev) => ({
      activeStep: prev.activeStep + 1,
    }));
  }

  render() {
    const steps = this.getSteps();

    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CustomCard
              style={{ borderBottom: "1px solid #ff8d04" }}
              title="Desconexiones Soft"
              content="59"
              linkTo="/DSoft"
              variant="azul"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CustomCard
              title="Por Instalar"
              content="50"
              linkTo="/PorInstalar"
              variant="amarillo"
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div
              style={{
                marginTop: "30px",
                backgroundColor: "white",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                boxShadow:
                  "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
              }}
            >
              <div style={{ padding: "10px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    <FormControl
                      className={this.props.formControl}
                      style={{ width: "100%" }}
                    >
                      <InputLabel htmlFor="grouped-select">DSLAM</InputLabel>

                      <Select defaultValue="" id="grouped-select">
                        <ListSubheader>Category 1</ListSubheader>
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <ListSubheader>Category 2</ListSubheader>
                        <MenuItem value={3}>Option 3</MenuItem>
                        <MenuItem value={4}>Option 4</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    <FormControl
                      className={this.props.formControl}
                      style={{ width: "100%" }}
                    >
                      <InputLabel htmlFor="grouped-select">
                        Ubicacion
                      </InputLabel>

                      <Select defaultValue="" id="grouped-select">
                        <ListSubheader>Category 1</ListSubheader>
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <ListSubheader>Category 2</ListSubheader>
                        <MenuItem value={3}>Option 3</MenuItem>
                        <MenuItem value={4}>Option 4</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    <FormControl
                      className={this.props.formControl}
                      style={{ width: "100%" }}
                    >
                      <InputLabel htmlFor="grouped-select">Busqueda</InputLabel>

                      <Select defaultValue="" id="grouped-select">
                        <ListSubheader>Category 1</ListSubheader>
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <ListSubheader>Category 2</ListSubheader>
                        <MenuItem value={3}>Option 3</MenuItem>
                        <MenuItem value={4}>Option 4</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3} sm={3} md={3} lg={3}>
                    <FormControl
                      className={this.style}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="standard-secondary"
                        label="Search"
                        color="secondary"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    <Fab
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #35437f, #344686, #34498c, #324d93, #30509a, #3b59a4, #4663ad, #506db7, #6780c6, #7d94d4, #94a8e3, #aabcf2)",
                        color: "white",
                        float: "right",
                      }}
                      className={this.props.classes.fab}
                    >
                      <SearchIcon />
                    </Fab>
                  </Grid>
                  <Grid item xs={1} sm={1} md={1} lg={1}>
                    <Fab
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #ff0091, #fe1796, #fd249a, #fc2e9f, #fb36a3, #fb49aa, #fb58b1, #fb66b8, #fc7dc2, #fc92cc, #fca5d5, #fbb8de)",
                        color: "white",
                        float: "right",
                      }}
                      onClick={() => {
                        this.setState({ modalOpen: true });
                        //  console.log("hola")
                      }}
                      className={this.props.classes.fab}
                    >
                      <AddIcon />
                    </Fab>
                  </Grid>
                </Grid>
              </div>
              <Divider variant="middle" style={{ marginTop: "10px" }} />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Table
              columns={this.state.columns}
              data={this.state.data}
              title={"Lista de clientes"}
            />
          </Grid>
        </Grid>

        <ModalAdd
          handleaction={this.state.modalOpen}
          close={() => {
            this.setState({
              modalOpen: false,
            });
          }}
        >
          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={10} lg={12}>
              <Stepper
                activeStep={this.state.activeStep}
                orientation="vertical"
              >
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                      {this.getStepContent(index)}
                      <div>
                        <div
                          style={{
                            marginTop: "30px",
                            float: "right",
                            marginRight: "40px",
                          }}
                        >
                          <Button
                            disabled={this.state.activeStep === 0}
                            onClick={this.handleBack}
                            style={{
                              marginRight: "5px",
                            }}
                          >
                            Back
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                          >
                            {this.state.activeStep === steps.length - 1
                              ? "Finish"
                              : "Next"}
                          </Button>
                        </div>
                      </div>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Grid>
          </Grid>
        </ModalAdd>
      </>
    );
  }
}
export default withStyles(styles)(index);
