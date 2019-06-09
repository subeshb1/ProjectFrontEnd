import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar, Toolbar, IconButton, SwipeableDrawer, List, ListItem, ListItemText} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink, Link } from "react-router-dom";
import {useStyles} from './styles'

function DefaultNav() {
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


export default DefaultNav;