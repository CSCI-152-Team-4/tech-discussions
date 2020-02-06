import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Routes from "./Routes";

const Navigator = () => {
  return (
    <Switch>
      {Routes.map(({ Component, path, locked }, index) => {
        return locked ? (
          <PrivateRoute
            exact
            path={path}
            Component={Component}
            key={`p-index-${index}`}
            loggedIn={true} // todo add auth system
          />
        ) : (
          <Route
            exact
            path={path}
            key={`p-index-${index}`}
            render={props => <Component {...props} />}
          />
        );
      })}
      <Route
        exact
        path="/"
        render={props => <Redirect {...props} to="/home" />}
      />
      <Route render={(props) => <div>not found 404</div>}/>
    </Switch>
  );
};

const PrivateRoute = ({ Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <>
          <div style={{ height: "10vh" }}>
            {" "}
            {/* todo add header nav component*/}
            header
          </div>
          <div style={{ height: "90vh" }}>
            <Component {...props} />
          </div>
        </>
      ) : (
        <Redirect {...props} to="/login" />
      )
    }
  />
);

export default Navigator;
