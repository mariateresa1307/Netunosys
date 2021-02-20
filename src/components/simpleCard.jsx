import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import clx from "classnames";

const useStyles = makeStyles((theme) => ({
  base: {
    position: "relative",
    borderRadius: "5px",
    marginLeft: "10px",
    marginRight: "10px",
    padding: "10px",

    color: "white"
  },

  normal: {
    backgroundColor: "#0067bfe8"
  },
  danger: {
    backgroundColor: "#f74e4ee8"
  }
}));

const SimpleCard = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={clx(classes.base, props.variant ? classes[props.variant] : classes.normal)}>
        <Grid container>
          <Grid item xs={10}>
            <Typography
              variant="h5"
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                minHeight: "48px"
              }}
            >
              {props.title}
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              textAlign: "right"
            }}
          >
            {props.action}
          </Grid>
        </Grid>
      </div>
      <Card
        style={{ marginTop: "-40px", paddingTop: "40px", ...props.style }}
        elevation={0}
        variant={props.outlined ? "outlined" : "elevation"}
      >
        {props.children}
      </Card>
    </>
  );
};

export default SimpleCard;
