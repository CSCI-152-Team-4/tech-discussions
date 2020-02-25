import React from 'react'

import { Route, Switch } from 'react-router-dom'
import HomeScreen from './HomeScreen'

const MainNav = () => {
  return(
    <Switch>
      <Route path="/home">
        <HomeScreen/>
      </Route>
      <Route>
        404 not found
      </Route>
    </Switch>
  )
}

export default MainNav