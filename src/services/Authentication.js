import Axios from 'axios'
import constants from '../configs/constants'

router.post('/changePass', async (req, res) => {
const user = await Users.findById(req.body.id);
if(user){
  if(encryptPass(req.body.password) === user.oldPassword){
    user.password = encryptPass(req.body.newPassword);
    user.save();
  }
}
}
)

const login = async (email, pass) => {
  try{
    let { data } = await Axios.post(`${constants.server_url}/users/login`, {
      email: email,
      password: pass
    })
    if (data.userFound && data.loggedIn) return {
      status: "success",
      userId: data.userId
    }
    else if (data.userFound && !data.loggedIn) return {
      status: "Incorrect Credentials",
      userId: ""
    }
    else return {
      status: "User Not Found",
      userId: ""
    }
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
    if(!data.userExists && data.userCreated) return {
      status: "success",
      userId: data.userId
    }
    else if(data.userExists && !data.userCreated) return {
      status: "User Already Exists",
      userId: ""
    }
    else if (!data.userExists && !data.userCreated) return {
      status: "Error Creating User",
      userId: ""
    }
  } catch(err){
    console.log('err', err)
    return "Error Creating User"
  }
}

export default {
  login, signup
}
