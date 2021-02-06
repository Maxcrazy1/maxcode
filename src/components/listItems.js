import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import EditIcon from "@material-ui/icons/Edit";

export const mainListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <ViewModuleIcon />
        </ListItemIcon>
      </ListItem>
    </Link>
    <Link to="/new">
      <ListItem button>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
      </ListItem>
    </Link>
  </div>
);
