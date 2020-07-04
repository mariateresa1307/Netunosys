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
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(1), // 16px
    transition: "0.3s",
    boxShadow: "0px 8px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [breakpoints.down("xs")]: {
      marginBottom: spacing(4),
    },
    [breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  red: {
    backgroundColor: "#830000",
    /* backgroundImage:
      "linear-gradient(to top, #a81010, #b11214, #ba1319, #c4151d, #cd1622, #d4242b, #da2f34, #e1393d, #e54b4c, #e85b5b, #eb6a6a, #ed7878)",*/
  },

  green: {
    backgroundColor: "#1D552C",
    /*backgroundImage:
      "linear-gradient(to top, #056d1b, #027d1c, #008e1d, #009f1d, #00b01b, #02bd27, #02c932, #01d63d, #00e053, #01eb67, #06f57a, #0fff8d)",*/
  },

  yellow: {
    backgroundColor: "#A8CB00",
  },

  media: {
    fontSize: "70px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#Fffffff",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-1),
    height: 5,
    paddingBottom: "200px",
    borderRadius: spacing(1),
    //backgroundColor: "#C2C2C2",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(0),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,

      /* backgroundImage:
        "linear-gradient(to top, #d1dcd7, #cddcdb, #ccdbdf, #cdd9e2, #d1d7e3, #d1d7e2, #d2d7e2, #d2d7e1, #cfd8df, #cfd9db, #d0d9d8, #d3d8d6)",
      */ borderRadius: spacing(
        0
      ), // 16
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

  let variantColorHelper = "";

  switch (props.variant) {
    case "red": {
      variantColorHelper = styles.red;
      break;
    }
    case "green": {
      variantColorHelper = styles.green;
      break;
    }
    case "yellow": {
      variantColorHelper = styles.yellow;
      break;
    }

    default:
      break;
  }

  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <div className={cx(styles.media, variantColorHelper)}>
        <div style={{ marginTop: "35%", color: "#ffff" }}>50</div>
      </div>
      <CardContent>
        <div classes={contentStyles}>
          <h2 style={{ margin: "0", textAlign: "center" }}>
            {props.title} <Divider style={{ backgroundColor: "#BCBCBC" }} />
          </h2>

          <p>
            "Git is a distributed version control system. Every dev has a
            working copy of the code and..."
          </p>
        </div>
        <Button
          className={buttonStyles}
          style={{
            /* backgroundImage:
              "linear-gradient(1234deg, #304074 0%, #838bb6 74%)",*/
            background: "#0F1D4E",
            borderRadius: 15,
            color: "white",
            boxShadow: "0px 4px 32px rgba(42, 51, 56, 0.4)",
            marginLeft: "0px",
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
