import React from "react";
import { Route, Switch } from "react-router-dom";
import { Box } from "@material-ui/core";
import MessagesScreen from "./MessagesScreen";
import MessageScreen from "./MessageScreen";

const MessagesNav = () => {
  return (
    <Box style={{ height: "100%", width: "100%" }}>
      <Switch>
        <Route path="/messages/:friendId">
          <MessageScreen />
        </Route>
        <Route path="/messages">
          <MessagesScreen />
        </Route>
        <Route>404 not found</Route>
      </Switch>
    </Box>
  );
};

export default MessagesNav;
