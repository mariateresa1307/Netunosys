import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Table from "../../component/table";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";



const styles = theme => ({
  fab: {
    margin: theme.spacing(2),
  }
})

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Name", field: "name" },
        {
          title: "Surname",
          field: "surname",
          initialEditValue: "initial edit value"
        },
        { title: "Birth Year", field: "birthYear", type: "numeric" },
        {
          title: "Birth Place",
          field: "birthCity",
          lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
        }
      ],

      

      data: [
        { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        {
          name: "Zerya Betül",
          surname: "Baran",
          birthYear: 2017,
          birthCity: 34
        }
      ]

      

    };

  }

  


  render() {



    return (

      
      <div>

        <Grid item xs={12} sm={12} md={12} lg={12}>
      <Tooltip title="Add" aria-label="add" href={"cliente"} >
     
        <Fab color="primary" className={this.props.classes.fab}>
     
        <KeyboardArrowLeftIcon />
        </Fab>
      </Tooltip>
          <Table
            columns={this.state.columns}
            data={this.state.data}
            title={"Lista de clientes Desconectados Soft"}
          />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(index);
