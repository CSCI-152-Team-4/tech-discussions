import React, { createContext, useContext } from 'react'
import { createStore } from 'easy-peasy'


import StoreModel from './models'

const store = createStore(StoreModel, {
  name: 'TD-State'
});

export const SocketContext = createContext();

export const SocketProvider = ({ children, socket }) => {
  console.log(socket)
  return (
    <SocketContext.Provider value={{socket: socket}}>
      {children}
    </SocketContext.Provider>
  )
};

export const useSocketState = () => useContext(SocketContext);

export default store
