import React, { Component } from 'react';

import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CheckIcon from '@material-ui/icons/Check';

import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ],
      data: [
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]
    }

    
  }
  
  render() {
   
    return (
     
      <div style={{ maxWidth: '100%' }}>

<Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={6} lg={6}   >
      <Card variant="outlined">
        <CardContent>
          Desconexiones
        </CardContent>
        
    
      </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={6} lg={6}  >
      <Card variant="outlined">
        <CardContent>
          Aprovisionamiento
        </CardContent>
        
        
      </Card>
    </Grid>
  
    <Grid item xs={12} sm={12} md={12} lg={12}   >
        <MaterialTable
         icons={{ 
        
         Search:  SearchIcon,
         Add: AddIcon,
         Clear : ClearIcon,
         Delete: DeleteIcon,
         Edit : EditIcon,
         Save : SaveAltIcon,
         Check : CheckIcon,
         FirstPage: FirstPageIcon,
         LastPage : LastPageIcon,
         ChevronLeft: ChevronLeftIcon,
         ChevronRight: ChevronRightIcon
       }}

        title="Editable Preview"
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          
          onRowAdd: newData =>
      
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  data.push(newData);
                  this.setState({ data }, () => resolve());
                }
                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  this.setState({ data }, () => resolve());
                }
              
                resolve()
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  let data = this.state.data;
                  const index = data.indexOf(oldData);
                  data.splice(index, 1);
                  this.setState({ data }, () => resolve());
                }
                resolve()
              }, 1000)
            }),

            
        }}
      />
      </Grid>
      </Grid>
      </div>
      
    )
  }
}
export default index;