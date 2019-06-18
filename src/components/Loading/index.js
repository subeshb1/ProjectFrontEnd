import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
    "& svg": {
      fill: "black"
    }
  },
  root: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  contain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '#fffa',
    zIndex: 1000
  }
}));

export  function ContainerLoad() {
  const classes = useStyles();
  return (
    <div
    
     className={classes.root}
    >
      <CircularProgress className={classes.progress} color="primary" />
      Loading..
    </div>
  );
}

export  function CoverLoad() {
  const classes = useStyles();
  return (
    <div
    className={classes.contain}
    >
      <CircularProgress className={classes.progress} color="primary" />
      Loading..
    </div>
  );
}
