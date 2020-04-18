import React from 'react';
import Navigator from './navigation/Navigator'
import { StoreProvider } from 'easy-peasy'
import {ThemeProvider} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import store, { SocketProvider } from './state';
import { getTheme } from './configs/theme'

import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = React.useState(true)
  
  const theme = React.useMemo(()=>{
    return getTheme(darkMode ? 'dark' : 'light')
  },[darkMode])

  return (
    <StoreProvider store={store}>
      <SocketProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app-div">
            <Navigator/>
          </div>
        </ThemeProvider>
      </SocketProvider>
    </StoreProvider>
  );
}

export default App;
