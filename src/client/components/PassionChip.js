import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import StarIcon from "@material-ui/icons/Star";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const fillChips = ({ color, label, icon = null, image = null }, index) => {
  return (
    <Chip
      style={{
        backgroundColor: "#252a34",
        color: "#eaeaea",
        fontFamily: "Kollektif",
        margin: 4
      }}
      label={label}
      key={index}
      avatar={image}
      size="small"
      icon={icon}
    />
  );
};

export default function PassionChip() {
  const passions = [
    {
      color: "primary",
      label: "Apasionado",
      icon: <FavoriteIcon style={{ fill: "#ff2e63" }} />,
    },
    {
      color: "primary",
      label: "Música",
      image: (
        <Avatar
          alt="Laravel"
          src="https://img.icons8.com/fluent/452/apple-music.png"
        />
      ),
    },
    {
      color: "primary",
      label: "Juegos",
      image: (
        <Avatar
          alt="React"
          src="https://img.icons8.com/cotton/2x/fa314a/controller--v3.png"
        />
      ),
    },
    {
      color: "primary",
      label: "Leer",
      image: (
        <Avatar
          alt="React Native"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLC9oTC5KzqcYoFcewhX69vBBvtmQ32yvTg&usqp=CAU"
        />
      ),
    },
    {
      color: "primary",
      label: "Películas",
      image: (
        <Avatar
          alt="Mysql"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3qUih2EwFKeP-l_Gjk1rlLc0IJ2XBf85tQ&usqp=CAU"
        />
      ),
    },
    {
      color: "primary",
      label: "Ciclismo",
      icon: <DirectionsBikeIcon style={{ fill: "#eaeaea" }} />,
    },
    {
      color: "primary",
      label: "Amante de buenas practicas",
      icon: <StarIcon style={{ fill: "#eaeaea" }} />,
    },
    {
      color: "primary",
      label: "Baloncesto",
      image: (
        <Avatar
          alt="Typescript"
          src="https://e7.pngegg.com/pngimages/217/280/png-clipart-the-nba-finals-2017-18-nba-season-cleveland-cavaliers-golden-state-warriors-nba-2k18-cleveland-cavaliers-logo-computer-wallpaper-thumbnail.png"
        />
      ),
    },
 ];
  return passions.map((passion, index) => fillChips(passion, index));
}
