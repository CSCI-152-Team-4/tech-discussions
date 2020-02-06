import React, { useMemo } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { useStoreRehydrated, useStoreState } from "easy-peasy";

import Routes from "./Routes";

const Navigator = () => {
  const history = useHistory();
  const rehydrated = useStoreRehydrated();
  const loggedIn = useStoreState(state => state.User.loggedIn); // todo add auth system

  const showNav = useMemo(
    () => history.location.pathname !== "/login",
    [history.location.pathname]
  );

  return rehydrated ? (
    <>
      {showNav && (
        <div style={{ height: "10vh", backgroundColor: "grey" }}>NavBar</div>
      )}
      {/*TODO: make navbar*/}
      <Switch>
        {Routes.map(({ Component, path, locked }, index) => {
          return locked ? (
            <PrivateRoute
              exact
              path={path}
              Component={Component}
              key={`p-index-${index}`}
              loggedIn={loggedIn}
            />
          ) : (
            <Route
              exact
              path={path}
              key={`r-index-${index}`}
              render={props => <Component {...props} />}
            />
          );
        })}
        <Route
          exact
          path="/"
          render={props => <Redirect {...props} to="/home" />}
        />
        <Route render={props => <div>not found 404</div>} />
      </Switch>
    </>
  ) : (
    <div>loading state...</div>
  );
};

const PrivateRoute = ({ Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect {...props} to="/login" />
    }
  />
);
PrivateRoute.propTypes = {
  Component: PropTypes.elementType.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

export default Navigator;
