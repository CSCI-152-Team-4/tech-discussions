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
  }
];

export default Routes;
