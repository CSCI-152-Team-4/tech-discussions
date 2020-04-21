import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MessagesScreen from './MessagesScreen'
import MessageScreen from './MessageScreen'

const MessagesNav = () => {
  return (
    <Switch>
      <Route path="/messages/message">
        <MessageScreen/>
      </Route>
      <Route path="/messages">
        <MessagesScreen/>
      </Route>
      <Route>
        404 not found
      </Route>
    </Switch>
  )
}

export default MessagesNav