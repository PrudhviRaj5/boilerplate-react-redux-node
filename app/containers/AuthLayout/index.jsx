import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage';
import authRoutes from './routes';

import './auth-layout.scss';

const AuthLayout = (props) => {
  const getRoutePath = (link, { match }) => (match.path + link.path);

  return (
    <div
      className="login-layout"
    >
      <div
        className="login__box"
      >
        <div
          // paper
          className="login__box-header"
        >
          <div
            className="login__box-icon"
          >
            <svg>icon here</svg>
          </div>
        </div>
        <Switch>
          {
            authRoutes.map((e) => (
              <Route
                key={e.key}
                path={getRoutePath(e, props)}
                component={e.component}
                exact={e.exact}
              />
            ))
          }
          <NotFoundPage />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(AuthLayout);
