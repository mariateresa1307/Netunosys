import React from "react";
import MaterialTable from "../../../components/materialTable";
import SectionTitle from "../../../elements/sectionTitle";
import AddFab from "../../../elements/addFab";
import StatePort from "./statePort";
import AddDslam from "./addDslam"
import User from "../../../assets/images/user.jpeg";
import {Grid, Tooltip, IconButton, Avatar} from "@material-ui/core";
import StateTarjet from "./stateTarjet";


import WorkIcon from "@material-ui/icons/Work";
import BarChartIcon from "@material-ui/icons/BarChart";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));


const ClienteIndex = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

   

    const handleClickOpen = () => {
      setOpen(true);
    };

   
  
    const handleClose = () => {
      setOpen(false);
    };

 


  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12}>
          <SectionTitle label={"Asignacion de Dslam"} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={6} md={6} lg={6}>
              <StateTarjet />
            </Grid>


            <Grid item xs={12} sm={6} md={6} lg={6}>
              <StatePort/>
            </Grid>
           
            


         
           
            
          </Grid>
        </Grid>
        <Grid item xs={12} lg={10}>
          <MaterialTable
            /* search value */
          searchPayload={{
              title:"Seccion de busqueda",
              searchParam:[
                  {value:1,label:"Abonado"},
                  {value:2,label:"Contrato"},
                  {value:3,label:"Vlan"}
              ]
          }}
            /* search value */
            noSearch
            title={"Registros de Clientes"}
            columns={[
              {
                field: "user",
                render: (rowData) => {
                  return (
                    <Avatar style={{float:"right"}} src={User}/>
                    
                  );
                }
              },
              {
                title: "Dslam",
                field: "dslam"

              },
              {
                title: " Nodo",
                field: "nodo"
              },
              
              {
                title: "Tarjeta",
                field: "tarjeta"
              },
              {
                title: "Puertos",
                field: "puerto"
              },
             
              
              {
                title: "Acciones",
                render: (rowData) => (
                  <>
                    <Tooltip title="Modificar Registro">
                      <IconButton
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                         
                        }}
                        onClick={handleClickOpen}
                      >
                        <ChromeReaderModeIcon />
                      </IconButton>
                    </Tooltip>
                  
                  </>
                )
              }
            ]}
            data={{
              items: [
                {
                  dslam: "Mxk-319 ",
                  nodo: "Sambil",
                  tarjeta: "6",
                  puertos: "80 ",
                  
                },
                {
                  dslam: "Huawei ",
                  nodo: "San ignacio",
                  tarjeta: "4",
                  puertos: "20 ",
                  }
              ],
              meta: {
                totalItems: 10,
                itemsPerPages: 2,
                currentPage: 1
              }
            }}
          />
        </Grid>
      </Grid>
      
      <AddFab variant="outlined" type="button" color="primary" onClick={handleClickOpen}>
        <WorkIcon style={{ marginRight: "15px" }} />  Agregar nuevo Dslam
      </AddFab>
      
      <AddDslam open={open} handleClose={handleClose} title={"   Gestionar Dslam"}/>
     
    </>
  );
};

export default ClienteIndex;
