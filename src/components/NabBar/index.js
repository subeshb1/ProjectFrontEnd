import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  grow: {
    display:'flex',
  },

  link: {
    fontSize: '1.3rem',
    padding: '0 8px',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
  
}));

function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" color="secondary" style={{alignItems: 'space-around'}}>
        <Toolbar>
          <h3>
          <NavLink to="/">Hamro Job</NavLink>
            
          </h3>
          <NavLink className={classes.link} style={{margin: '0 0 0 auto'}} to="/how-it-works">How it Works?</NavLink>
          <NavLink className={classes.link}  to="/login">Login</NavLink>
          <NavLink className={classes.link} to="/signup">Sign Up</NavLink>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default PrimarySearchAppBar;
