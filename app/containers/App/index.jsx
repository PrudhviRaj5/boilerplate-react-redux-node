/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, {
  Suspense,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ProtectedRoute from 'components/React/ProtectedRoute';
import MainLayout from 'containers/MainLayout';
import AuthLayout from 'containers/AuthLayout/loadable';

import {
  makeSelectIsAuthenticated,
  makeSelectIsLoginFetching,
} from 'containers/App/selectors';
import { userAuthCheck } from 'containers/App/actions';

import '../../global-styles.scss';


const App = (props) => {
  const {
    isAuthenticated,
    isLoginFetching,
    tryAutoLogin,
  } = props;

  useEffect(() => {
    tryAutoLogin();
  }, [isAuthenticated]);

  return (
    <>
      <Helmet
        titleTemplate="%s - Boilerplate App"
        defaultTitle="Boilerplate App"
      >
        <title>Root</title>
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        {
          !isLoginFetching ? (
            <Switch>
              <Route path="/auth" component={AuthLayout} />
              <ProtectedRoute
                centralAuth={{ isAuthenticated }}
                path="/"
                component={MainLayout}
              />
            </Switch>
          ) : null
        }
      </Suspense>
    </>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isLoginFetching: PropTypes.bool.isRequired,
  tryAutoLogin: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
  isLoginFetching: makeSelectIsLoginFetching(),
});

export const mapDispatchToProps = (dispatch) => {
  return {
    tryAutoLogin: () => dispatch(userAuthCheck()),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(App);
