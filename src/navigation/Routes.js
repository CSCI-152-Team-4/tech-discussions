import Components from "../screens";

const Routes = [
  {
    Component: Components.Home,
    name: "Home",
    path: "/home",
    locked: true
  },
  {
    Component: Components.Login,
    name: "Login",
    path: "/login",
    locked: false
  }
];

export default Routes;
