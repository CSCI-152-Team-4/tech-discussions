import React from 'react'

import { Route, Switch } from 'react-router-dom'
import SettingsScreen from './SettingsScreen'

const SettingsNav = () => {
  return(
    <Switch>
      <Route path="/settings">
        <SettingsScreen/>
      </Route>
      <Route>
        404 not found
      </Route>
    </Switch>
  )
}

export default SettingsNav