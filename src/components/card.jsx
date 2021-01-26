import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  verde: {
    backgroundImage: "linear-gradient(to right, #0ec8d5, #00d7d4, #00e6cc, #00f3bc, #37ffa5)"
  },
  naranja: { background: "linear-gradient(to right, #fe8c81 0%, #fbd323 100%)" },
  rojo: {
    backgroundImage:
      "radial-gradient(circle at -20.71% 50%, #de9c2c 0, #e5922a 8.33%, #ea852b 16.67%, #ee772d 25%, #f16731 33.33%, #f35436 41.67%, #f23c3c 50%, #f01843 58.33%, #ed004c 66.67%, #e90057 75%, #e30064 83.33%, #db0071 91.67%, #d10080 100%)"
  },
  azul: { backgroundImage: "linear-gradient(left, #7559ce 0%, #678fe9 100%)" },
  violeta: { backgroundImage: "linear-gradient(left, #a77ffc 0%, #ff6eac 100%)" }
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Card elevation={0} className={classes[props.color]}>
        <CardContent style={{ padding: "15px" }}>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h2" style={{ color: "#ffffff", textAlign: "center" }}>
                {props.icons} {props.content}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  color: "#ffffff",
                  fontWeight: "initial",
                  fontSize: "1.1rem"
                }}
              >
                {props.title}
              </Typography>
            </Grid>

            {props.disableMoreInfo ? null : (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                style={{
                  textAlignLast: "end",
                  marginTop: "auto"
                }}
              >
                <Button
                  style={{
                    right: "0px",
                    marginRight: "0px",
                    marginLeft: "auto",
                    display: "block",
                    color: "#ffffff",
                    padding: "6px 16px"
                  }}
                >
                  Más información
                </Button>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
