import Axios from "axios";
import constants from "../configs/constants";

const changePass = async (newPass, oldPass, userId) => {
  try {
    let { data } = await Axios.post(
      `${constants.server_url}/users/changePass`,
      {
        newPassword: newPass,
        oldPassword: oldPass,
        userId: userId,
      }
    );
  } catch (err) {
    console.log("err", err);
  }
};

const login = async (email, pass) => {
  try {
    let { data } = await Axios.post(`${constants.server_url}/users/login`, {
      email: email,
      password: pass,
    });
    if (data.userFound && data.loggedIn)
      return {
        status: "success",
        user: data.user,
      };
    else if (data.userFound && !data.loggedIn)
      return {
        status: "Incorrect Credentials",
        user: {},
      };
    else
      return {
        status: "User Not Found",
        user: {},
      };
  } catch (err) {
    console.log("err", err);
    return "Error Logging In";
  }
};

const signup = async (email, pass, username, firstName, lastName) => {
  try {
    let { data } = await Axios.post(`${constants.server_url}/users/signup`, {
      email: email,
      password: pass,
      username,
      firstName,
      lastName,
    });
    if (!data.userExists && data.userCreated)
      return {
        status: "success",
        user: data.user,
      };
    else if (data.userExists && !data.userCreated)
      return {
        status: "User Already Exists",
        user: {},
      };
    else if (!data.userExists && !data.userCreated)
      return {
        status: "Error Creating User",
        user: {},
      };
  } catch (err) {
    console.log("err", err);
    return "Error Creating User";
  }
};

export default {
  login,
  signup,
  changePass,
};
