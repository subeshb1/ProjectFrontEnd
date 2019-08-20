import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink, Link } from "react-router-dom";
import { useStyles } from "./styles";

import AccountMenu from "./AccountMenu";
import NotificationMenu from "./NotificationMenu";

export default function jobproviderNav() {
  const classes = useStyles();

  const [menuDrawer, setMenuDrawer] = React.useState({
    status: false //true=> open, false=> close
  });

  function mobileMenuOpen() {
    setMenuDrawer({ status: true });
  }

  function mobileMenuClose() {
    setMenuDrawer({ status: false });
  }

  return (
    <React.Fragment>
      <div className={classes.grow}>
        <AppBar position="sticky" color="secondary" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.iconContainer}>
              <IconButton
                onClick={mobileMenuOpen}
                className={classes.iconButton}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
            <h2>
              <NavLink to="/" style={{ color: "white" }}>
                Hamro Job
              </NavLink>
            </h2>
            <NavLink
              className={classes.link}
              style={{ margin: "0 0 0 auto" }}
              to="/jobprovider/jobs"
            >
              Jobs
            </NavLink>

            <NavLink className={classes.link} to="/jobprovider/profile">
              Profile
            </NavLink>
            <NotificationMenu />
            <AccountMenu />
          </Toolbar>
        </AppBar>
      </div>

      <div className={classes.drawerContainer}>
        <SwipeableDrawer
          anchor="left"
          open={menuDrawer.status}
          onClose={mobileMenuClose}
          onOpen={mobileMenuOpen}
        >
          <List className={classes.list}>
            <ListItem
              onClick={mobileMenuClose}
              component={Link}
              to="/jobprovider/jobs"
              button
            >
              <ListItemText primary="Jobs" />
            </ListItem>

            <ListItem
              onClick={mobileMenuClose}
              component={Link}
              to="/jobprovider/profile"
              button
            >
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </div>
    </React.Fragment>
  );
}
