import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MessagesScreen from './MessagesScreen'

const MessagesNav = () => {
  return(
    <Switch>
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