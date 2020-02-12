import React, { useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { useHistory } from 'react-router-dom'

import { Typography, Container } from '@material-ui/core'

const LoginScreen = () => {
  const loggedIn = useStoreState((state)=>state.User.loggedIn)
  const { login, logout, setLoggedIn } = useStoreActions((actions)=>actions.User)
  const history = useHistory()

  useEffect(()=>{
    setLoggedIn(false)
  }, [setLoggedIn]) // set logged out

  useEffect(()=>{
    if(loggedIn)
      history.push('/home')
  }, [history, loggedIn])

  return (
    <Container>
      <Typography>Login</Typography>
    </Container>
  )
}

export default LoginScreen