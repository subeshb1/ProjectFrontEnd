import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, SwipeableDrawer, List, ListItem, ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

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
              <IconButton onClick={() => mobileMenuOpen()} className={classes.iconButton} color="inherit" >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <div className={classes.drawerContainer}>
        <SwipeableDrawer anchor="right" open={menuDrawer.status} onClose={() => mobileMenuClose()}
          onOpen={() => mobileMenuOpen()} >
          <List>
            <ListItem component={NavLink} to="/how-it-works" button >
              <ListItemText primary="How It Works?" />
            </ListItem>

            <ListItem component={NavLink} to="/login" button>
              <ListItemText primary="Login" />
            </ListItem>

            <ListItem component={NavLink} to="/signup" button>
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
            <NavLink className={classes.link} to="/contracts">Contracts</NavLink>
            <NavLink className={classes.link} to="/skill-test">Skill Test</NavLink>
            <NavLink className={classes.link} to="/logout">Logout</NavLink>

            <div className={classes.iconContainer}>
              <IconButton onClick={() => mobileMenuOpen()} className={classes.iconButton} color="inherit" >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>

        </AppBar>
      </div>


      <div className={classes.drawerContainer}>
        <SwipeableDrawer anchor="right" open={menuDrawer.status} onClose={() => mobileMenuClose()}
          onOpen={() => mobileMenuOpen()} >
          <List>
            <ListItem component={NavLink} to="/find-jobs" button >
              <ListItemText primary="Find Jobs" />
            </ListItem>

            <ListItem component={NavLink} to="/contracts" button>
              <ListItemText primary="Contracts" />
            </ListItem>

            <ListItem component={NavLink} to="/skill-test" button>
              <ListItemText primary="Skill Test" />
            </ListItem>

            <ListItem component={NavLink} to="/logout" button>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </div>

    </React.Fragment>
  );
}