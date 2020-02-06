import React from 'react';
import Navigator from './navigation/Navigator'
import { StoreProvider } from 'easy-peasy'
import store from './state';

const App = () => {
  return (
    <StoreProvider store={store}>
      <Navigator/>
    </StoreProvider>
  );
}

export default App;
