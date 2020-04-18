import React from 'react'
import { createStore } from 'easy-peasy'
import useSocket from '../hooks/useSocket'

import StoreModel from './models'

const store = createStore(StoreModel, {
  name: 'TD-State'
});

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socket = useSocket()
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
};

export const useSocketState = () => useContext(SocketContext);

export default store
