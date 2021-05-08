import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import StarIcon from "@material-ui/icons/Star";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import "../styles/chip-fonts.css";

const fillChips = ({ color, label, icon = null, image = null }, index) => {
  return (
    <Chip
      className="m-1 label-font"
      style={{
        backgroundColor: "#252a34",
        color: "#eaeaea",
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
      label: "Laravel",
      image: (
        <Avatar
          alt="Laravel"
          src="https://pbs.twimg.com/profile_images/1163911054788833282/AcA2LnWL_400x400.jpg"
        />
      ),
    },
    {
      color: "primary",
      label: "React",
      image: (
        <Avatar
          alt="React"
          src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
        />
      ),
    },
    {
      color: "primary",
      label: "React Native",
      image: (
        <Avatar
          alt="React Native"
          src="https://www.pngjoy.com/pngm/826/9766605_react-logo-react-js-logo-svg-transparent-png.png"
        />
      ),
    },
    {
      color: "primary",
      label: "Mysql",
      image: (
        <Avatar
          alt="Mysql"
          src="https://i.pinimg.com/originals/96/b6/6f/96b66fc862b74edd5ad9e89cc7ccdbb0.png"
        />
      ),
    },
    {
      color: "primary",
      label: "Ciclista",
      icon: <DirectionsBikeIcon style={{ fill: "#eaeaea" }} />,
    },
    {
      color: "primary",
      label: "Amante de buenas practicas",
      icon: <StarIcon style={{ fill: "#eaeaea" }} />,
    },
    {
      color: "primary",
      label: "Typescript",
      image: (
        <Avatar
          alt="Typescript"
          src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png"
        />
      ),
    },
    {
      color: "primary",
      label: "PHP 5/7/8",
      image: (
        <Avatar
          alt="PHP"
          src="https://image.flaticon.com/icons/png/128/919/919830.png"
        />
      ),
    },    {
      color: "primary",
      label: "GIT",
      image: (
        <Avatar
          alt="Git"
          src="https://justcodeit.io/wp-content/uploads/Git_icon.svg_.png"
        />
      ),
    },    
    {
      color: "primary",
      label: "JavaScript",
      image: (
        <Avatar
          alt="Vim"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7p-wTJo37FnB7iR2KkkeQAt-B0sRQWit9pN9O2lzUE8FUKbYjwpA_1TUFs3tK5TmspY&usqp=CAU"
        />
      ),
    },
    {
      color: "primary",
      label: "Jquery",
      image: (
        <Avatar
          alt="Jquery"
          src="https://es.seaicons.com/wp-content/uploads/2015/06/jquery-icon.png"
        />
      ),
    },

    {
      color: "primary",
      label: "Firebase",
      image: (
        <Avatar
          alt="Firebase"
          src="https://gblobscdn.gitbook.com/spaces%2F-LKIOWqKtRm-4MEjeGPb%2Favatar.png?alt=media"
        />
      ),
    },


    {
      color: "primary",
      label: "October / Laravel",
      image: (
        <Avatar
          alt="October"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OctoberCMS.png/220px-OctoberCMS.png"
        />
      ),
    },


    {
      color: "primary",
      label: "Vim",
      image: (
        <Avatar
          alt="Vim"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/1022px-Vimlogo.svg.png"
        />
      ),
    },
    {
      color: "primary",
      label: "Unix/Shell",
      image: (
        <Avatar
          alt="Unix"
          src="https://icon-library.com/images/terminal-icon/terminal-icon-1.jpg"
        />
      ),
    },
  ];
  return passions.map((passion, index) => fillChips(passion, index));
}
