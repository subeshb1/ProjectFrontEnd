import React, { useContext } from "react";
import { LoadContext, AuthContext } from "context";
import { Route, withRouter } from "react-router-dom";
import {ContainerLoad} from 'components/Loading';
const ProtectedRoute = ({
  component: Component,
  roles = [],

  ...rest
}) => {
  const { role } = useContext(AuthContext);
  const { loading } = useContext(LoadContext);

  return (
    <Route
      {...rest}
      render={props => {
        if (loading && !role)
          return (
            <ContainerLoad />
          );
        return roles.includes(role) ? (
          <Component {...props} />
        ) : (
          <h1>Not Authorized</h1>
        );
      }}
    />
  );
};

export default withRouter(ProtectedRoute);
