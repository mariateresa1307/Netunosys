import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Table from "../../component/table";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const styles = theme => ({
  formControl: {
    Width: 30},

  

    
})

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Vlan",
         field: "Vlan",
         type: "numeric" },
        {
          title: "Abonado",
          field: "Abonado",
          type: "numeric" 
        },
        {
          title: "Contrato",
          field: "Contrato",
          type: "numeric"
        },

        { title: "ID", 
        field: "ID", 
        initialEditValue: "initial edit value"},

        { title: "Estatus", 
        field: "Estatus", 
        initialEditValue: "initial edit value"},
      ],

      data: [
        { Vlan: "1344", 
        Abonado: "987523", 
        Contrato: "01003232", 
        ID: "Laboratorios Miranda" ,
        Estatus: "Desonectado",
      },
        
        {
          Vlan: "2244",
          Abonado: "876542",
          Contrato: "01002017",
          ID: "Importadora Center",
          Estatus: "Conectado"
        }
      ]
    };
  }
   
  render() {
    
    return (
      <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>      

          <Card style={{margin:"30px"}}>
            <CardContent>
            <FormControl className={this.props.formControl}style={{ marginTop:"-15px",marginBottom:"-15px"}}>

              <InputLabel htmlFor="grouped-select">
                DSLAM
              </InputLabel>

          <Select defaultValue="" style={{width:"100px"}}id="grouped-select">
             <MenuItem value="">
               <em>None</em>
              </MenuItem>

            <ListSubheader>Category 1</ListSubheader>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <ListSubheader>Category 2</ListSubheader>
            <MenuItem value={3}>Option 3</MenuItem>
            <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={this.props.formControl}style={{marginLeft:"30px",marginTop:"-15px",marginBottom:"-15px"}}>

        <InputLabel htmlFor="grouped-select">
           Ubicacion
        </InputLabel>

          <Select defaultValue="" style={{width:"100px"}}id="grouped-select">
          <MenuItem value="">
           <em>None</em>
          </MenuItem>

            <ListSubheader>Category 1</ListSubheader>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <ListSubheader>Category 2</ListSubheader>
            <MenuItem value={3}>Option 3</MenuItem>
            <MenuItem value={4}>Option 4</MenuItem>
            </Select>


</FormControl>
            </CardContent>
          </Card>

        
          <Table
          
            columns={this.state.columns}
            data={this.state.data}
            title={"Lista de Vlan"}
          />
        </Grid>
      </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(index);
