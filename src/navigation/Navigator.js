import React, { useMemo } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { useStoreRehydrated, useStoreState } from "easy-peasy";

import Routes from "./Routes";
import NavBar from "./NavBar";
import { Grid, Box } from "@material-ui/core";

const Navigator = () => {
  const rehydrated = useStoreRehydrated();
  const loggedIn = useStoreState((state) => state.User.loggedIn); // todo add auth system
  const location = useLocation();

  const showNav = useMemo(
    () => !["/login", "/signup", "/not-found"].includes(location.pathname),
    [location.pathname]
  );

  return rehydrated ? (
    <Box
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {showNav && <NavBar />}
      <Box style={{ flex: 1, width: "100%" }}>
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
                render={(props) => <Component {...props} />}
              />
            );
          })}
          <Route
            exact
            path="/"
            render={(props) => <Redirect {...props} to="/home" />}
          />
          <Route exact path="/not-found">
            <div>not found</div>
          </Route>
          <Route render={() => <Redirect to="not-found" />} />
        </Switch>
      </Box>
    </Box>
  ) : (
    <div>loading state...</div>
  );
};

const PrivateRoute = ({ Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect {...props} to="/login" />
    }
  />
);
PrivateRoute.propTypes = {
  Component: PropTypes.elementType.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Navigator;
