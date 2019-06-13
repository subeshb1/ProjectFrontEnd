import React, { useContext } from "react";
import { LoadContext, AuthContext } from "context";
import { Route, Redirect } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));
const ProtectedRoute = ({ component: Component, roles = [], ...rest }) => {
  const { role } = useContext(AuthContext);
  const { loading } = useContext(LoadContext);
  const classes = useStyles();
  if (loading && !role)
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
        <CircularProgress   className={classes.progress}/>
        Loading..
      </div>
    );

  return (
    <Route
      {...rest}
      render={props =>
        roles.includes(role) ? (
          <Component {...props} />
        ) : (
          <h1>Not Authorized</h1>
        )
      }
    />
  );
};

export default ProtectedRoute;
