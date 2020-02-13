import { persist, thunk, action } from 'easy-peasy'
import localforage from 'localforage'
import Auth from '../../services/Authentication'

const stall = async (time=300) => { // stalling time to test thunks (mocks an api call to server)
  await new Promise(resolve=>setTimeout(resolve,time))
}
const userModel = persist({
  email: "",
  password: "",
  username: "",
  loggedIn: false,
  loginError: "",
  stayLoggedIn: true,
  setLoggedIn: action((state, payload)=>{
    state.loggedIn=payload
  }),
  setLoginError: action((state, payload)=>{
    state.loginError = payload
  }),
  login: thunk(async (actions, {email, password})=>{
    let res = await Auth.login(email, password)
    if(res === "success"){
      actions.setLoggedIn(true)
    } else actions.setLoginError(res)
  }),
  signup: thunk(async(actions, {email, password})=>{
    let res = await Auth.signup(email, password)
    if(res === "success"){
      actions.setLoggedIn(true)
    } else actions.setLoginError(res)
  }),
  logout: thunk(async (actions)=>{
    await stall()
    actions.setLoggedIn(false)
  })
}, {
  mergeStrategy: 'mergeDeep',
  storage: localforage,
  blacklist: ['loginError']
})

export default userModel;