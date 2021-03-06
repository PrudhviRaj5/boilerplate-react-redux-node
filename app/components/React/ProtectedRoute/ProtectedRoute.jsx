import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  centralAuth,
  ...rest
}) => {
  return (
    <Route
      /* eslint react/jsx-props-no-spreading: 0 */
      {...rest}
      render={(props) => (centralAuth.isAuthenticated === true ? (
        <Component />
      ) : (
        <Redirect
          to={{ pathname: '/auth/login', state: { from: props.location } }}
        />
      ))}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.any.isRequired,
  centralAuth: PropTypes.any.isRequired,
};

export default withRouter(ProtectedRoute);
