import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(1), // 16px
    transition: "0.3s",
    boxShadow: "0px 8px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [breakpoints.down("xs")]: {
      marginBottom: spacing(3),
    },
    [breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  azul: {
    backgroundColor: "red",
  },

  amarillo: {
    backgroundColor: "#F2AD11",
  },
  media: {
    fontSize: "70px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#Fffffff",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-2),
    height: 0,
    paddingBottom: "100px",
    borderRadius: spacing(2),
    //backgroundColor: "#C2C2C2",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage:
        "linear-gradient(to bottom, #342273, #322a7b, #2f3284, #2c398c, #274194, #3e509e, #525fa8, #656fb2, #8b8cc1, #adacd0, #ceccdf, #eeeeee)",
      borderRadius: spacing(2), // 16
      opacity: 0.24,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

const BlogCard = (props) => {
  const styles = useStyles();

  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <div
        className={cx(
          styles.media,
          props.variant === "azul" ? styles.azul : styles.amarillo
        )}
      >
        50
      </div>
      <CardContent>
        <div classes={contentStyles}>
          <h2 style={{ margin: "0" }}>{props.title}</h2>
          <Divider style={{ backgroundColor: "#F09507" }} />
          <p>
            "Git is a distributed version control system. Every dev has a
            working copy of the code and..."
          </p>
        </div>
        <Button
          className={buttonStyles}
          style={{
            backgroundImage:
              "linear-gradient(1234deg, #304074 0%, #838bb6 74%)",
            borderRadius: 15,
            color: "white",
            boxShadow: "0px 4px 32px rgba(42, 51, 56, 0.4)",
          }}
          component={Link}
          to={props.linkTo}
        >
          Mas Informacion
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;

/*import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  card: {
    background: "red"
  }
})

class card extends Component {
  render() {
    return (
      <div>
        <Card elevation={4}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={7} md={8}>
                <Typography variant="h6">{this.props.title}</Typography>
                <Fab
                  style={{bottom: "0px"}}
                  variant="extended"
                  size="small"
                  color="primary"
                  component={Link} to={this.props.linkTo}
                >
                  Mas Informacion
                </Fab>
              </Grid>
              <Grid item  xs={12} sm={5} md={4}>
                <div style={{ width: "100%", background: "red", textAlign: "center",     borderRadius: "15px" }}>
                  <Typography variant="h1">
                    {this.props.content}
                  </Typography>

                </div>
              </Grid>

            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(card);
*/
