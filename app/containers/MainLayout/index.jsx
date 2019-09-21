import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { compose } from 'redux';
import NotFoundPage from '../NotFoundPage';
import mainRoutes from './routes';


const MainLayout = (props) => {
  const getRoutePath = (link) => {
    const routePath = link.path;
    return routePath;
  };

  return (
    <Switch>
      {mainRoutes.map((eachLink) => (
        <Route
          key={eachLink.key}
          path={getRoutePath(eachLink, props)}
          component={eachLink.component}
          exact={eachLink.exact}
        />
      ))}
      <Redirect
        to={{ pathname: '/home' }}
      />
      <NotFoundPage />
    </Switch>
  );
};


export default compose(
  withRouter,
)(MainLayout);
