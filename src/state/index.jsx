import React, { createContext, useContext } from 'react'
import { createStore } from 'easy-peasy'


import StoreModel from './models'
import usePosts from '../hooks/usePosts';

const store = createStore(StoreModel, {
  name: 'TD-State'
});

export const SocketContext = createContext();

export const SocketProvider = ({ children, socket }) => {
  console.log(socket)
  const posts = usePosts(socket)
  return (
    <SocketContext.Provider value={{posts: posts}}>
      {children}
    </SocketContext.Provider>
  )
};

export const useSocketState = () => useContext(SocketContext);

export default store
