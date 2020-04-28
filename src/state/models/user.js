import { persist, thunk, action } from "easy-peasy";
import localforage from "localforage";
import Auth from "../../services/Authentication";

const stall = async (time = 300) => {
  // stalling time to test thunks (mocks an api call to server)
  await new Promise((resolve) => setTimeout(resolve, time));
};

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  userId: "",
  loggedIn: false,
  loginError: "",
  stayLoggedIn: true,
  friendCode: "",
};

const userModel = persist(
  {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    userId: "",
    friendCode: "",
    loggedIn: false,
    loginError: "",
    stayLoggedIn: true,
    setLoggedIn: action((state, payload) => {
      state.loggedIn = payload;
    }),
    setLoginError: action((state, payload) => {
      state.loginError = payload;
    }),
    setId: action((state, payload) => {
      state.userId = payload;
    }),
    loginSetter: action((state, user) => {
      Object.assign(state, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.email,
        userId: user._id,
        friendCode: user.friendCode,
        loggedIn: true,
      });
    }),
    login: thunk(async (actions, { email, password }) => {
      let { status, user } = await Auth.login(email, password);
      if (status === "success") {
        actions.loginSetter(user);
      } else actions.setLoginError(status);
    }),
    signup: thunk(
      async (actions, { email, password, username, firstName, lastName }) => {
        console.log("creds", email, password, username, firstName, lastName);
        let { status, user } = await Auth.signup(
          email,
          password,
          username,
          firstName,
          lastName
        );
        if (status === "success") {
          actions.loginSetter(user);
        } else actions.setLoginError(status);
      }
    ),
    logout: action((state) => {
      Object.assign(state, initial);
    }),
  },
  {
    mergeStrategy: "mergeDeep",
    storage: localforage,
    blacklist: ["loginError"],
  }
);

export default userModel;
