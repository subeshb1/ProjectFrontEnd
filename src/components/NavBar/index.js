import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar, Toolbar, IconButton, SwipeableDrawer, List, ListItem, ListItemText,
  Avatar, Popper, Fade, Paper
} from "@material-ui/core";
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  grow: {
    display: 'flex',
  },
  appbar: {
    background: '#37677A'
  },
  toolbar: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  link: {
    fontFamily: "'Roboto Condensed', sans-serif ",
    fontSize: '1.3rem',
    padding: '0 8px',
    borderRight: '2px solid #ffffff4d',
    color: 'white',
    '&:hover': {
      textDecoration: 'underline',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  iconContainer: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
      position: 'absolute',
      top: '1.5vw',
      right: '2vw'
    }
  },
  iconButton: {
    color: 'white'
  },

}));

function PrimarySearchAppBar() {
  const classes = useStyles();

  const [menuDrawer, setMenuDrawer] = React.useState({
    status: false    //true=> open, false=> close
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
              <NavLink to="/" style={{ color: 'white' }}>Hamro Job</NavLink>
            </h2>
            <NavLink className={classes.link} style={{ margin: '0 0 0 auto' }} to="/how-it-works">How it Works?</NavLink>
            <NavLink className={classes.link} to="/login">Login</NavLink>
            <NavLink className={classes.link} to="/signup">Sign Up</NavLink>

            <div className={classes.iconContainer}>
              <IconButton onClick={mobileMenuOpen} className={classes.iconButton} color="inherit" >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <div className={classes.drawerContainer}>
        <SwipeableDrawer anchor="right" open={menuDrawer.status} onClose={mobileMenuClose}
          onOpen={mobileMenuOpen} >
          <List>
            <ListItem component={Link} to="/how-it-works" button >
              <ListItemText primary="How It Works?" />
            </ListItem>

            <ListItem component={Link} to="/login" button>
              <ListItemText primary="Login" />
            </ListItem>

            <ListItem component={Link} to="/signup" button>
              <ListItemText primary="Signup" />
            </ListItem>

          </List>
        </SwipeableDrawer>
      </div>

    </React.Fragment>
  );
}

//export default PrimarySearchAppBar;

export default function JobSeekerNavbar() {
  const classes = useStyles();

  const [menuDrawer, setMenuDrawer] = React.useState({
    status: false    //true=> open, false=> close
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
              <NavLink to="/jobseekers" style={{ color: 'white' }}>Hamro Job</NavLink>
            </h2>
            <NavLink className={classes.link} style={{ margin: '0 0 0 auto' }} to="/find-jobs">Find Jobs</NavLink>
            <NavLink className={classes.link} to="/jobseeker-profile">Profile</NavLink>
            <NavLink className={classes.link} to="/jobseeker-status">Status</NavLink>
            <NavLink className={classes.link} to="/skill-test">Skill Test</NavLink>

            {/* <NavLink className={classes.link} to="/logout">Logout</NavLink> */}
            <PopupState variant="popper" popupId="demo-popup-popper">
              {popupState => (
                <div>
                  
                  <Avatar alt="male avatar" src="require('assets/images/avatar/male.png')" 
                    variant="contained" {...bindToggle(popupState) }
                  /* className={classes.avatar} */ />
                  <Popper {...bindPopper(popupState) } transition>
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                          The content of the Popper.
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </div>
              )}
            </PopupState>

            <div className={classes.iconContainer}>
              <IconButton onClick={mobileMenuOpen} className={classes.iconButton} color="inherit" >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>

        </AppBar>
      </div>


      <div className={classes.drawerContainer}>
        <SwipeableDrawer anchor="right" open={menuDrawer.status} onClose={mobileMenuClose}
          onOpen={mobileMenuOpen} >
          <List>
            <ListItem component={Link} to="/find-jobs" button >
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