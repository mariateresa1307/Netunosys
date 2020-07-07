import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Table from "../../component/table";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";
import CustomModal from "../../component/customModal";
import CustomCard from "../../component/card";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import StepsIP from "../IpInventory/steps/ipAdd";
import StepsIPs from "../IpInventory/steps/ipsteps";
const styles = (theme) => ({
  caja: {
    fontFamily: "sans-serif",
    fontSize: "18px",
    fontWeight: 400,
    color: "#ffffff",
    background: "#ffffff",
  },
});

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      modalOpen: false,
      columns: [
        {
          title: "ip",
          field: "ip",
          type: "numeric",
        },

        {
          title: "Abonado",
          field: "Abonado",
          type: "numeric",
        },
        {
          title: "Contrato",
          field: "Contrato",
          type: "numeric",
        },

        {
          title: "ID",
          field: "ID",
          initialEditValue: "initial edit value",
        },

        {
          title: "Bloque",
          field: "Bloque",
          initialEditValue: "initial edit value",
        },

        {
          title: "Estatus",
          field: "Estatus",
          initialEditValue: "initial edit value",
        },
      ],

      data: [
        {
          ip: "192.168.13.54",
          Abonado: "987523",
          Contrato: "01003232",
          ID: "Laboratorios Miranda",
          Estatus: "En uso",
          Bloque: "/24",
        },

        {
          ip: "192.168.13.53",
          Abonado: "876542",
          Contrato: "01002017",
          ID: "Importadora Center",
          Estatus: "Libre",
          Bloque: "/30",
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
      "Completa los primeros Datos para agregar las Ip's",
      "Completa los ultimos Datos para agregar las Ip's",
    ];
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return <StepsIP />;
      case 1:
        return <StepsIPs />;

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
        <div className={this.style}>
          <Grid container>
            <Grid item xs={12} style={{ zIndex: "1", marginBottom: "10px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <CustomCard
                    style={{ borderBottom: "1px solid #ff8d04" }}
                    title=" Disponibles"
                    content="59"
                    variant="verde"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <CustomCard
                    style={{ borderBottom: "1px solid #ff8d04" }}
                    title=" En Uso"
                    content="59"
                    variant="rojo"
                  />
                </Grid>
              </Grid>
            </Grid>

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
                        <InputLabel htmlFor="grouped-select">Dslam</InputLabel>

                        <Select defaultValue="" id="grouped-select">
                          <MenuItem value={1}>DSLAM Zhone Bitstorm</MenuItem>
                          <MenuItem value={2}>DSLAM Zhone Huawei</MenuItem>
                          <MenuItem value={3}>DSLAM Zhone Malc</MenuItem>
                          <MenuItem value={4}>DSLAM Zhone Mx-160</MenuItem>
                          <MenuItem value={5}>DSLAM Zhone Mxk-319</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={3} sm={3} md={3} lg={3}>
                      <FormControl
                        className={this.props.formControl}
                        style={{ width: "100%" }}
                      >
                        <InputLabel htmlFor="grouped-select">
                          Ubicacion
                        </InputLabel>

                        <Select defaultValue="" id="grouped-select">
                          <ListSubheader>Bitstorm</ListSubheader>
                          <MenuItem value={1}>Autana</MenuItem>
                          <MenuItem value={2}>Embassy 1</MenuItem>
                          <MenuItem value={3}>Embassy 2</MenuItem>
                          <MenuItem value={4}>Folgana</MenuItem>
                          <MenuItem value={5}>Sede Gerencial</MenuItem>

                          <ListSubheader>Huawei</ListSubheader>
                          <MenuItem value={6}>Plaza Las Americas</MenuItem>
                          <MenuItem value={7}>Buenaventura</MenuItem>
                          <MenuItem value={8}>Parque Cristal</MenuItem>
                          <MenuItem value={9}>Lido</MenuItem>
                          <MenuItem value={10}>Torre Oasis</MenuItem>
                          <MenuItem value={11}>Parque Central</MenuItem>
                          <MenuItem value={12}>Torre CrediCard</MenuItem>
                          <MenuItem value={13}>Seguro Mercantil</MenuItem>
                          <MenuItem value={14}>Parque Carabobo</MenuItem>
                          <MenuItem value={15}>NUR</MenuItem>
                          <MenuItem value={16}>Sambil</MenuItem>

                          <ListSubheader>Malc</ListSubheader>
                          <MenuItem value={17}>Bancaracas</MenuItem>
                          <MenuItem value={18}>Castellana</MenuItem>
                          <MenuItem value={19}>Cavendes</MenuItem>
                          <MenuItem value={20}>CCCT</MenuItem>
                          <MenuItem value={21}>Centro Peru</MenuItem>
                          <MenuItem value={22}>Cubo Negro</MenuItem>

                          <ListSubheader> Mx-160</ListSubheader>
                          <MenuItem value={23}>El Encantado 1</MenuItem>
                          <MenuItem value={24}>El Encantado 2</MenuItem>
                          <MenuItem value={25}>Galipan</MenuItem>
                          <MenuItem value={26}>La Urbina</MenuItem>
                          <MenuItem value={27}>Torre 18 </MenuItem>
                          <MenuItem value={28}>Sambil</MenuItem>
                          <MenuItem value={29}>Seguro Mercantil</MenuItem>
                          <MenuItem value={30}>Tcc 1</MenuItem>
                          <MenuItem value={31}>Tcc 2</MenuItem>
                          <MenuItem value={32}>Torre Uno</MenuItem>

                          <ListSubheader> Mxk-319</ListSubheader>
                          <MenuItem value={33}>Ciudad Center</MenuItem>
                          <MenuItem value={34}>Centro Seguro La Paz</MenuItem>
                          <MenuItem value={35}>Santa Paula</MenuItem>
                          <MenuItem value={36}>San Ignasio</MenuItem>
                          <MenuItem value={37}>Parque Cristal</MenuItem>
                          <MenuItem value={38}>Lido</MenuItem>
                          <MenuItem value={39}>Galerias Avila</MenuItem>
                          <MenuItem value={40}>Torre Phelps</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={4} sm={4} md={4} lg={4}>
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
                          backgroundColor: "#041755",
                          /* backgroundImage:
                          "radial-gradient(circle, #35437f, #344686, #34498c, #324d93, #30509a, #3b59a4, #4663ad, #506db7, #6780c6, #7d94d4, #94a8e3, #aabcf2)",*/
                          color: "white",
                          float: "right",
                          left: "-40px",
                          marginLeft: "-10px",
                        }}
                        className={this.props.classes.fab}
                      >
                        <SearchIcon />
                      </Fab>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                      <Fab
                        style={{
                          backgroundColor: "#02710C",
                          /*backgroundImage:
                          "radial-gradient(circle, #ff0091, #fe1796, #fd249a, #fc2e9f, #fb36a3, #fb49aa, #fb58b1, #fb66b8, #fc7dc2, #fc92cc, #fca5d5, #fbb8de)",*/
                          color: "white",
                          float: "right",
                          left: "-3px",
                          marginLeft: "-10px",
                        }}
                        className={this.props.classes.fab}
                        onClick={() => {
                          this.setState({ modalOpen: true });
                          //  console.log("hola")
                        }}
                      >
                        <AddIcon />
                      </Fab>
                    </Grid>
                  </Grid>
                </div>
                <Divider variant="middle" style={{ marginTop: "-1px" }} />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Table
                columns={this.state.columns}
                data={this.state.data}
                title={"Lista de IP's"}
              />
            </Grid>
          </Grid>
        </div>

        <CustomModal
          handleaction={this.state.modalOpen}
          variant="ip"
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
                style={{ backgroundColor: "#fff0" }}
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
                              marginRight: "4px",
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
        </CustomModal>
      </>
    );
  }
}

export default withStyles(styles)(index);
