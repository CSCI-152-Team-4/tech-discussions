import Screens from "../screens";
import MainNav from "../screens/home/MainNav";
import PostNav from '../screens/posts/PostNav';

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
  },
  {
    Component: PostNav,
    name: "Posts",
    path: "/post",
    locked: true 
  }
];

export default Routes;
