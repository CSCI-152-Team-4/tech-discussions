import Screens from "../screens";
import MainNav from "../screens/main/MainNav";

const Routes = [
  {
    Component: MainNav,
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
