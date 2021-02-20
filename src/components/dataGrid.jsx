import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Search from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";


const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: 440
  },
  searchButton: {
    borderRadius: "50px",
    padding: "20px",
    marginLeft: "auto",
    marginRight: "10px",
    display: "flex",
    color: "#FFFF",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  tableTitle: {
    paddingLeft: "20px",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      paddingLeft: "0px"
    }
  }
}));

export default function StickyHeadTable(props) {
  const { title, columns, data, fetchData } = props;
  const [opens, setOpens] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChangeRowsPerPage = (event) => {
    const value = +event.target.value;
    dispatch(fetchData({ page: data.meta.currentPage, limit: value }));
  };

  const handleChangePage = (event, newPage) => {
    dispatch(fetchData({ page: newPage + 1, limit: data.meta.itemsPerPage }));
  };

  const handleClickOpen = () => {
    setOpens((prev) => !prev);
    //console.log("hola!");
  };

  return (
    <>
     
      <Paper elevation={0} variant="outlined" >
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns?.map((column, index) => (
                  <TableCell
                    key={Array.isArray(column.field) ? column.field[0] : column.field || index}
                    align="center"
                    style={{
                      minWidth: column.minWidth,
                      height: "40px",
                      paddingBottom: "5px",
                     
                      background: "#ffffff"
                    }}
                  >
                    {column.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.items?.map((row, index) => {
                return (
                  <TableRow hover key={index}>
                    {columns.map((column) => {
                      let value = null;
                      if (Array.isArray(column.field)) {
                        value = row;
                      } else if (column.field === undefined) {
                        value = row;
                      } else {
                        value = column.field.split(".").reduce((p, c) => (p && p[c]) || null, row);
                      }
                      return (
                        <TableCell
                          key={Array.isArray(column.field) ? column.field[0] : column.field || index}
                          align={"center"}
                        >
                          {column.render ? column.render(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={data?.meta?.totalItems ? data?.meta.totalItems : 0}
          rowsPerPage={data?.meta?.itemsPerPage ? parseInt(data?.meta.itemsPerPage) : 5}
          page={data?.meta?.currentPage ? parseInt(data?.meta.currentPage) - 1 : 0}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage="Registros por página"
          backIconButtonText="Página anterior"
          nextIconButtonText="Página siguiente"
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`}
        />
      </Paper>

    </>
  );
}
