import React, { useContext } from "react";
import Auth from "lib/auth";
import Icon from "@material-ui/core/Icon";
import { IconButton } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import { AuthContext } from "context/AuthProvider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: "0 0 0 auto"
    }
  }
}));

// Will be adding notification feature
export default function NotificationMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { root } = useStyles();
  const { role } = useContext(AuthContext);

  return (
    <div className={root}>
      <IconButton
        style={{ color: "white", fontSize: "2rem" }}
        aria-controls="simple-menu"
        aria-haspopup="true"
      >
        <Badge badgeContent={11} color="secondary">
          <Icon style={{ color: "white", fontSize: "2rem" }}>
            notifications
          </Icon>
        </Badge>
      </IconButton>
    </div>
  );
}
