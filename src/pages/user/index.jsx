import React from "react";
import MaterialTable from "../../components/materialTable";
import SectionTitle from "../../elements/sectionTitle";
import Grid from "@material-ui/core/Grid";
import WorkIcon from "@material-ui/icons/Work";
import IconButton from "@material-ui/core/IconButton";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import Tooltip from "@material-ui/core/Tooltip";
import AddFab from "../../components/addFab";
import CustomCard from "../../components/card";
import BarChartIcon from "@material-ui/icons/BarChart";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CustomModal from "./addUser"
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


const AlquilerIndex = (props) => {
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
          <SectionTitle label={"Gestión de Usuarios"} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2} justify="center">
            

          

            <Grid item xs={12} sm={6} md={5} lg={5}>
              <CustomCard
               
               title=" Usuarios Activos "
                content="59"
                color={"verde"}
                icons={<BarChartIcon />}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={5}>
              <CustomCard
                
                title=" Usuarios Inactivos "
                content="59"
               
                color={"naranja"}
                icons={<BarChartIcon />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={10}>
          <MaterialTable
            noSearch
            title={"Registros de Usuarios"}
            columns={[
              {
                title: "Nombre y apellido",
                field: "nombreApellido"

              },
              {
                title: " Cedula",
                field: "cedula"
              },
              {
                title: "Estado",
                field: "estado",
                render: (rowData) => {
                    return (
                      <Tooltip title="Es un usuario activo del sistema">
                        <CheckCircleIcon
                          style={{
                            color: "#207d20",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block",
                            fontSize: "25px"
                          }}
                        />
                      </Tooltip>
                    );
                  }
              },
              {
                title: "Fecha de ultima Sesion  ",
                field: "fechaUltimaSesion"
              },
              {
                title: "Rol",
                field: "rol"
              },
              {
                title: "Acciones",
                render: (rowData) => (
                  <>
                    <Tooltip title="Detalles de registro">
                      <IconButton
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          display: "block"
                        }}
                       
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
                  id: "123213",
                  nombreApellido: "Miguel Martin",
                  cedula: "28006871",
                  estado: "activo",
                  fechaUltimaSesion: "12/01/2021",
                  rol: "Admin"
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
        
        
        <WorkIcon style={{ marginRight: "15px" }} />  Agregar Usuario
      </AddFab>
      
      
      <CustomModal open={open} handleClose={handleClose} title={"dd"}/>
    </>
  );
};

export default AlquilerIndex;
