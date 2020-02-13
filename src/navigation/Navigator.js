import React, { useMemo } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { useStoreRehydrated, useStoreState } from "easy-peasy";

import Routes from "./Routes";
import NavBar from './NavBar'

const Navigator = () => {
  const history = useHistory();
  const rehydrated = useStoreRehydrated();
  const loggedIn = useStoreState(state => state.User.loggedIn); // todo add auth system
  
  const showNav = useMemo(
    () => !["/login", "/signup", "/not-found"].includes(history.location.pathname),
    [history.location.pathname]
  );

  return rehydrated ? (
    <div style={{height: "100vh", display: "flex", flexDirection: "column"}}>
        { showNav && (
          <div style={{flex: .1}}>
            <NavBar/> 
          </div>
        )}
      <div style={{flex: 1, height: "90%"}}>
        <Switch>
          {Routes.map(({ Component, path, locked }, index) => {
            return locked ? (
              <PrivateRoute
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
          <Route exact path="/not-found">
            <div>not found</div>
          </Route>
          <Route render={()=><Redirect to="not-found"/>} />
        </Switch>
      </div>
    </div>
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
