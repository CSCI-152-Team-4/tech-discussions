import { persist, thunk, action } from 'easy-peasy'
import localforage from 'localforage'

const stall = async (time=300) => { // stalling time to test thunks (mocks an api call to server)
  await new Promise(resolve=>setTimeout(resolve,time))
}
const userModel = persist({
  email: "",
  password: "",
  username: "",
  loggedIn: false,
  setLoggedIn: action((state, payload)=>{
    state.loggedIn=payload
  }),
  login: thunk(async (actions, {email, password})=>{
    await stall()
    const loggedIn = email === password // add auth service
    if(loggedIn)
      actions.setLoggedIn(true)
  }),
  logout: thunk(async (actions)=>{
    await stall()
    actions.setLoggedIn(false)
  })
}, {
  mergeStrategy: 'mergeDeep',
  storage: localforage
})

export default userModel;