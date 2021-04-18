import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GrainIcon from "@material-ui/icons/Grain";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#252a34",
  },
  btnColor: {
    color: "#edeae7",
  },
  selectedIcon: {
    color: "#08d9d6",
  },
});

export default function FooterNavbar() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <Link to="/about">
        <BottomNavigationAction
          className={classes.btnColor}
          label="Sobre mi"
          icon={<EmojiPeopleIcon />}
        />
      </Link>

      <Link to="/">
        <BottomNavigationAction
          className={classes.btnColor}
          label="Proyectos"
          icon={<GrainIcon />}
        />
      </Link>

      <Link to="/contact">
        <BottomNavigationAction
          className={classes.btnColor}
          label="Contacto"
          icon={<QuestionAnswerIcon />}
        />
      </Link>
    </BottomNavigation>
  );
}
