import React from "react";
import "../../styles/helpers.css";
import GalleryContainer from "../../containers/Gallery";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "#root": {
      overflow: "hidden !important",
    },
    img: {
      maxwidth: "100%",
    },
  },
  gallery: {
    padding: 0,
    marginBottom: 0,
    display: "flow-root",
    "& li:hover img": {
      "-moz-transform": "scale(1.1)",
      "-webkit-transform": "scale(1.1)",
      "-ms-transform": "scale(1.1)",
      "-o-transform": "scale(1.1)",
      transform: "scale(1.1)",
    },
    "& li img": {
      "-webkit-transition": "transform 0.5s ease",
      "-o-transition": "transform 0.5s ease",
      transition: "transform 0.5s ease",
    },
    "& li:nth-child(even)": {
      height: "50vh",
    },
    "& li:nth-child(odd)": {
      height: "50vh",
    },
    "& li:nth-child(2) .slide": {
      height: "38vh !important",
      [theme.breakpoints.down("sm")]: {
        height: "35vh !important",
      },
    },
    "& li:nth-child(5) .slide": {
      height: "38rem !important",
      [theme.breakpoints.down("sm")]: {
        height: "500px !important",
      },
    },
    "& li": {
      width: "33.333333%",
      maxWidth: "100%",
      display: "inline-block",
      float: "left",
      textAlign: "center",
      overflow: "hidden",
      position: "relative",
    },
  },
  heightTop: {
    position: "relative ",
    top: "-134px",
    height: "38rem !important",
  },
  shortHeight: {
    height: "35.8vh",
  },
  boxData: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: "#fff",
    "&:nth-child(odd)": {
      background: "rgba(0, 0, 0, 0.17)",
    },
    "&:nth-child(even)": {
      background: "rgba(8, 217, 214, 0.27)",
    },
    "&:hover": {
      background: "rgba(255, 46, 99, 0.55)",
    },
  },
  boxDataSpan: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: 0,
    right: 0,
    fontSize: "24px",
  },
  imgCover: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center center",
  },
  h100: {
    height: "100% !important",
  },
}));

export default function Gallery() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <GalleryContainer classes={classes} />
    </React.Fragment>
  );
}
