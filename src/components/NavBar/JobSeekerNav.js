import React from "react";
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
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink, Link } from "react-router-dom";
import maleAvatar from "assets/images/avatar/male.png";
import {useStyles} from './styles';

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
            <h2>
              <NavLink to="/" style={{ color: "white" }}>
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
            <NavLink className={classes.link} to="/jobseeker/profile">
              Profile
            </NavLink>
            <NavLink className={classes.link} to="/jobseeker/status">
              Status
            </NavLink>
            <NavLink className={classes.link} to="/jobseeker/skill">
              Skill Test
            </NavLink>

            {/* <NavLink className={classes.link} to="/logout">Logout</NavLink> */}
            <PopupState variant="popper" popupId="demo-popup-popper">
              {popupState => (
                <div>
                  <Avatar
                    alt="male avatar"
                    src={maleAvatar}
                    variant="contained"
                    {...bindToggle(popupState)}
                    /* className={classes.avatar} */
                  />
                  <Popper {...bindPopper(popupState)} transition>
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper>The content of the Popper.</Paper>
                      </Fade>
                    )}
                  </Popper>
                </div>
              )}
            </PopupState>

            <div className={classes.iconContainer}>
              <IconButton
                onClick={mobileMenuOpen}
                className={classes.iconButton}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <div className={classes.drawerContainer}>
        <SwipeableDrawer
          anchor="right"
          open={menuDrawer.status}
          onClose={mobileMenuClose}
          onOpen={mobileMenuOpen}
        >
          <List>
            <ListItem component={Link} to="/find-jobs" button>
              <ListItemText primary="Find Jobs" />
            </ListItem>

            <ListItem component={Link} to="/contracts" button>
              <ListItemText primary="Contracts" />
            </ListItem>

            <ListItem component={Link} to="/skill-test" button>
              <ListItemText primary="Skill Test" />
            </ListItem>

            <ListItem component={Link} to="/logout" button>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </div>
    </React.Fragment>
  );
}
