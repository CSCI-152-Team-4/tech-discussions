import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

const HomeScreen = () => {
  const loggedIn = useStoreState((state)=>state.user.loggedIn)
  const { login, logout } = useStoreActions((actions)=>actions.user)


  return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      Home screen
      <button onClick={()=>login('1', '1')} style={{borderColor: 'black', borderWidth: '1px', width: 100}}>logged in: {loggedIn ? "yes" : "no"}</button>
      <button onClick={()=>logout()} style={{borderColor: 'black', borderWidth: '1px', width: 100}}>logout</button>
    </div>
  )
}

export default HomeScreen