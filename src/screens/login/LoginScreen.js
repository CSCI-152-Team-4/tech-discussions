import React, { useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { useHistory } from 'react-router-dom'

const LoginScreen = () => {
  const loggedIn = useStoreState((state)=>state.user.loggedIn)
  const { login, logout, setLoggedIn } = useStoreActions((actions)=>actions.user)
  const history = useHistory()

  useEffect(()=>{
    setLoggedIn(false)
  },[]) // set logged out

  useEffect(()=>{
    if(loggedIn)
      history.push('/home')
  },[history, loggedIn])

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      login screen
      <button onClick={()=>login('1','1')} style={{borderColor: 'black', borderWidth: '1px', width: 100}}>logged in: {loggedIn ? "yes" : "no"}</button>
      <button onClick={()=>logout()} style={{borderColor: 'black', borderWidth: '1px', width: 100}}>logout</button>
    </div>
  )
}

export default LoginScreen