import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Table from "../../component/table";
import Card from "../../component/card";
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
      <div style={{ maxWidth: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card title="outlined" content="5" />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card title="outlined" content="50" />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Table
              columns={this.state.columns}
              data={this.state.data}
              title={"Lista de clientes"}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default index;
