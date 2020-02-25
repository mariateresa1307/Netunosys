import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Table from "../../component/table";
import ReplyAllIcon from "@material-ui/icons/ReplyAll";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
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
          <Table
            columns={this.state.columns}
            data={this.state.data}
            title={"Lista de clientes Por Instalar "}
          />
        </Grid>
      </div>
    );
  }
}

export default index;
