import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const images = [
  {
    backgroundImage: " linear-gradient(to right, #0ec8d5, #00ced5, #00d4d5, #00d9d3, #00dfd1, #00e4ce, #00e8ca, #00edc5, #00f2bf, #0ff6b7, #24fbaf, #37ffa5)",
    title: "Conectado",
    width: "20%",
  },

  {
    backgroundImage:
      "radial-gradient(circle at -20.71% 50%, #de9c2c 0px, #e5922a 8.33%, #ea852b 16.67%, #ee772d 25%, #f16731 33.33%, #f35436 41.67%, #f23c3c 50%, #f01843 58.33%, #ed004c 66.67%, #e90057 75%, #e30064 83.33%, #db0071 91.67%, #d10080 100%)",
    title: "Suspendido",
    width: "20%",
  },
  {
    backgroundImage: "linear-gradient(to left, #7559ce, #6f68d7, #6a76de, #6783e4, #678fe9)",
    title: "DesconectadoSoft",
    width: "25%",
  },
  {
    backgroundImage: " linear-gradient(to right, #dcd4d6, #d1c8ca, #c5bcbf, #bab1b4, #afa5a9, #a2999c, #958d90, #898184, #777174, #666264, #565354, #464445)",
    title: "DesconectadoHard",
    width: "25%",
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 80,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.1,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    borderTopLeftRadius: 5,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.2,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px ${theme.spacing(1) + 4}px`,
  },
}))

export default function ButtonBases() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
              backgroundImage: image.backgroundImage,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography component="span" variant="subtitle1" color="inherit" className={classes.imageTitle}>
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </Grid>
    </div>
  )
}
