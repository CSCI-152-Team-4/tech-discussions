import { persist, thunk, action } from 'easy-peasy'
import localforage from 'localforage'
import Auth from '../../services/Authentication'

const stall = async (time=300) => { // stalling time to test thunks (mocks an api call to server)
  await new Promise(resolve=>setTimeout(resolve,time))
}

const initial = {
  email: "",
  password: "",
  username: "",
  userId: "",
  loggedIn: false,
  loginError: "",
  stayLoggedIn: true,
}

const userModel = persist({
  email: "",
  password: "",
  username: "",
  userId: "",
  loggedIn: false,
  loginError: "",
  stayLoggedIn: true,
  setLoggedIn: action((state, payload)=>{
    state.loggedIn=payload
  }),
  setLoginError: action((state, payload)=>{
    state.loginError = payload
  }),
  setId: action((state, payload)=>{
    state.userId = payload
  }),
  login: thunk(async (actions, {email, password})=>{
    let res = await Auth.login(email, password)
    if(res.status === "success"){
      actions.setLoggedIn(true)
      actions.setId(res.userId)
    } else actions.setLoginError(res.status)
  }),
  signup: thunk(async(actions, {email, password})=>{
    let res = await Auth.signup(email, password)
    if(res.status === "success"){
      actions.setLoggedIn(true)
      actions.setId(res.userId)
    } else actions.setLoginError(res.status)
  }),
  logout: action((state)=>{
    Object.assign(state, initial)
  })
}, {
  mergeStrategy: 'mergeDeep',
  storage: localforage,
  blacklist: ['loginError']
})

export default userModel;