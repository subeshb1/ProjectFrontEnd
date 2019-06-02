import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  grow: {
    display:'flex',
  },
  appbar:{
    background:'#37677A'
  },
  link: {
    fontFamily:"'Roboto Condensed', sans-serif ",
    fontSize: '1.3rem',
    padding: '0 8px',
    borderRight:'2px solid #ffffff4d',
    color:'white',
    '&:hover': {
      textDecoration: 'underline',
    }
  }
  
}));

function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" color="secondary" className={classes.appbar}>
        <Toolbar>
          <h2>
            <NavLink to="/" style={{color:'white'}}>Hamro Job</NavLink>
          </h2>
          <NavLink className={classes.link} style={{margin: '0 0 0 auto'}} to="/how-it-works">How it Works?</NavLink>
          <NavLink className={classes.link}  to="/login">Login</NavLink>
          <NavLink className={classes.link} to="/signup">Sign Up</NavLink>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default PrimarySearchAppBar;
