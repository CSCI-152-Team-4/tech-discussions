import React, { useState, useMemo } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import {
  Menu,
  Search,
  Add,
  Home,
  Settings,
  ExitToApp,
  Email,
} from "@material-ui/icons";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useLocation, useHistory } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const useStyles = makeStyles((theme) => ({
  main: {
    flex: 1,
    flexGrow: 0,
    position: 'sticky',
    top: 0
  },
  drawer: {
    width: "75vw",
  },
  closeDrawer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  menuTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuTitle: {
    width: "100%",
    textAlign: "center",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const logout = useStoreActions((actions) => actions.User.logout);

  const title = useMemo(() => {
    switch (location.pathname) {
      case "/home":
        return "Home";
      case "/messages":
        return "Messages";
      case "/settings":
        return "Settings";
      case "/test":
        return "Test";
      case '/settings': 
        return 'Settings';
      default:
        return "";
    }
  }, [location]);

  return (
    <AppBar className={classes.main}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "50%", display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            className={classes.menu}
            onClick={() => setDrawerOpen(true)}
          >
            <Menu fontSize="large" color="inherit" />
          </IconButton>
          {location.pathname !== "/home" && (
            <IconButton color="inherit" onClick={() => history.goBack()}>
              <ArrowBackIosIcon color="inherit" />
            </IconButton>
          )}
          <Typography variant="h5" style={{ marginLeft: "0.5rem" }}>
            {title}
          </Typography>
        </div>
        <div
          style={{ width: "70%", display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton
            style={{ marginRight: ".5rem" }}
            color="inherit"
            onClick={() => history.push("/post/new")}
          >
            <Add fontSize="large" />
          </IconButton>
        </div>
      </Toolbar>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className={classes.drawer}>
          <div className={classes.menuTop}>
            <Typography variant="h6" className={classes.menuTitle}>
              Menu
            </Typography>
            <IconButton
              className={classes.closeDrawer}
              onClick={() => setDrawerOpen(false)}
            >
              <ArrowBackIosIcon color="inherit" />
            </IconButton>
          </div>
          <List>
            <ListItem
              button
              key={"home"}
              onClick={() => {
                history.push("/home");
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>

            <ListItem
              button
              key={"messages"}
              onClick={() => {
                history.push("/messages");
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>
                {" "}
                <Email />{" "}
              </ListItemIcon>
              <ListItemText primary={"Messages"} />
            </ListItem>

            <ListItem
              button
              key={"settings"}
              onClick={() => {
                history.push("/settings");
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>
              <span class = 'Hey'>
                <Settings />
                </span>
              </ListItemIcon>
              <span class = 'hi'><ListItemText primary={"Settings"} /></span>
            </ListItem>
            
            <ListItem
              button
              key={"logout"}
              onClick={() => {
                logout();
                history.push('/login')
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
}
