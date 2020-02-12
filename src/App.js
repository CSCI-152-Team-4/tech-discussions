import React from 'react';
import Navigator from './navigation/Navigator'
import { StoreProvider } from 'easy-peasy'
import store from './state';

import './App.css'

const App = () => {
  return (
    <StoreProvider store={store}>
      <div className="app-div">
        <Navigator/>
      </div>
    </StoreProvider>
  );
}

export default App;
