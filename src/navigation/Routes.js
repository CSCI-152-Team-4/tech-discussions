import Screens from "../screens";

const Routes = [
  {
    Component: Screens.Home,
    name: "Home",
    path: "/home",
    locked: true
  },
  {
    Component: Screens.Login,
    name: "Login",
    path: "/login",
    locked: false
  },
  {
    Component: Screens.Signup,
    name: "Signup",
    path: "/signup",
    locked: false
  }
];

export default Routes;
