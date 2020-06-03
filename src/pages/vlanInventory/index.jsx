import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Table from "../../component/table";
import withStyles from "@material-ui/core/styles/withStyles";
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
const styles = (theme) => ({
  formControl: {
    Width: 30,
  },

  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  fab: {
    //position: "relative",
    // left:"auto",
  },
});

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "Vlan",
          field: "Vlan",
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
          title: "Estatus",
          field: "Estatus",
          initialEditValue: "initial edit value",
        },
      ],

      data: [
        {
          Vlan: "1344",
          Abonado: "987523",
          Contrato: "01003232",
          ID: "Laboratorios Miranda",
          Estatus: "Desonectado",
        },

        {
          Vlan: "2244",
          Abonado: "876542",
          Contrato: "01002017",
          ID: "Importadora Center",
          Estatus: "Conectado",
        },
      ],
    };
  }

  render() {
    return (
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
                    <InputLabel htmlFor="grouped-select">Ubicacion</InputLabel>

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
                <Grid xs={2} sm={2} md={2} lg={2}>
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
                <Grid xs={1} sm={1} md={1} lg={1}>
                  <Fab
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #ff0091, #fe1796, #fd249a, #fc2e9f, #fb36a3, #fb49aa, #fb58b1, #fb66b8, #fc7dc2, #fc92cc, #fca5d5, #fbb8de)",
                      color: "white",
                      float: "right",
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
            title={"Lista de Vlan"}
          />
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(index);
