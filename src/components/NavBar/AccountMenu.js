import React, { useContext } from "react";
import Auth from "lib/auth";
import Icon from "@material-ui/core/Icon";
import { IconButton } from "@material-ui/core";

import { AuthContext } from "context/AuthProvider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { role } = useContext(AuthContext);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function logOut() {
    Auth.logOut();
    window.location.href = "/";
  }
  return (
    <div>
      <IconButton
        style={{ color: "white", fontSize: "2rem" }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Icon style={{ color: "white", fontSize: "2rem" }}>account_circle</Icon>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to={`/${role.replace("_", "")}/account`}>My account</NavLink>
        </MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
