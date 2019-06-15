import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
    "& svg": {
      fill: "black"
    }
  }
}));

export  function ContainerLoad() {
  const classes = useStyles();
  return (
    <div
    
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <CircularProgress className={classes.progress} color="primary" />
      Loading..
    </div>
  );
}
