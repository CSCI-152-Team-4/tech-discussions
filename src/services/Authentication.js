import Axios from 'axios'
import constants from '../configs/constants'

const login = async (email, pass) => {
  try{
    let { data } = await Axios.post(`${constants.server_url}/users/login`, {
      email: email,
      password: pass
    })
    if (data.userFound && data.loggedIn) return "success" 
    else if (data.userFound && !data.loggedIn) return "Incorrect Credentials"
    else return "User Not Found"
  } catch(err){
    console.log('err', err)
    return "Error Logging In"
  }
}

const signup = async (email, pass) => {
  try{
    let { data } = await Axios.post(`${constants.server_url}/users/signup`, {
      email: email, password: pass
    })
    if(!data.userExists && data.userCreated) return "success"
    else if(data.userExists && !data.userCreated) return "User Already Exists"
    else if (!data.userExists && !data.userCreated) return "Error Creating User"
  } catch(err){
    console.log('err', err)
    return "Error Creating User"
  }
}

export default {
  login, signup
}