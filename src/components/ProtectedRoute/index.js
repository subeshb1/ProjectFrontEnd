import React, { useContext } from "react";
import { LoadContext,AuthContext } from "context";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, roles = [], ...rest }) => {
  const { role } = useContext(AuthContext);
  const { loading } = useContext(LoadContext);

  if (loading && !role) 
    return "Loading";
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