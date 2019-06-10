import React from "react";
import Auth from "lib/auth";
import Icon from "@material-ui/core/Icon";
import {
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Popper,
  Fade,
  Paper
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink, Link, withRouter } from "react-router-dom";
import { useStyles } from "./styles";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountMenu from "./AccountMenu";
import NotificationMenu from "./NotificationMenu";

export default function JobSeekerNav() {
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
              <NavLink to="/jobseeker" style={{ color: "white" }}>
                Hamro Job
              </NavLink>
            </h2>
            <NavLink
              className={classes.link}
              style={{ margin: "0 0 0 auto" }}
              to="/find-jobs"
            >
              Find Jobs
            </NavLink>

            <NavLink className={classes.link} to="/jobseeker/skill">
              Skill Test
            </NavLink>

            <NavLink className={classes.link} to="/jobseeker/profile">
              Profile
            </NavLink>
            <NavLink className={classes.link} to="/jobseeker/stats">
              Stats
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
              to="/find-jobs"
              button
            >
              <ListItemText primary="Find Jobs" />
            </ListItem>

            <ListItem
              onClick={mobileMenuClose}
              component={Link}
              to="/jobseeker/skill"
              button
            >
              <ListItemText primary="Skill Test" />
            </ListItem>

            <ListItem
              onClick={mobileMenuClose}
              component={Link}
              to="/jobseeker/stats"
              button
            >
              <ListItemText primary="Stats" />
            </ListItem>

            <ListItem
              onClick={mobileMenuClose}
              component={Link}
              to="/jobseeker/profile"
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
