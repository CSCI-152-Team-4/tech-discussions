import Screens from "../screens";
import MainNav from "../screens/home/MainNav";
import PostNav from '../screens/posts/PostNav';
import SettingsNav from '../screens/settings/SettingsNav';
import MessagesNav from '../screens/messages/MessagesNav';

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
    Component: SettingsNav,
    name: "Settings",
    path: "/settings",
    locked: true
  },
  {
    Component: MessagesNav,
    name: "Messages",
    path: "/messages",
    locked: true
  },
  {
    Component: PostNav,
    name: "Posts",
    path: "/post",
    locked: true 
  }
];

export default Routes;
