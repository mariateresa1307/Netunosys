import React, { Component } from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import CheckIcon from "@material-ui/icons/Check";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

class table extends Component {
  render() {
    return (
      <div>
        <MaterialTable
          icons={{
            Search: SearchIcon,
            Add: AddIcon,
            Clear: ClearIcon,
            ResetSearch: ClearIcon,
            Delete: DeleteIcon,
            Edit: EditIcon,
            Save: SaveAltIcon,
            Check: CheckIcon,
            FirstPage: FirstPageIcon,
            LastPage: LastPageIcon,
            PreviousPage: ChevronLeftIcon,
            NextPage: ChevronRightIcon
          }}
          title={this.props.title}
          columns={this.props.columns}
          data={this.props.data}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                console.log("columna agregada");
                resolve();
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                console.log("columna actualizada");
                resolve();
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                console.log("columna eliminada");
                resolve();
              })
          }}
        />
      </div>
    );
  }
}

export default table;
