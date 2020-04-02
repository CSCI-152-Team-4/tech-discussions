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
  TextField
} from "@material-ui/core";
import { Menu, Search, Add, Home } from "@material-ui/icons";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useLocation, useHistory } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const useStyles = makeStyles(theme => ({
  main: {
    height: "100%",
    justifyContent: "center"
  },
  drawer: {
    width: "75vw"
  },
  closeDrawer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  menuTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  menuTitle: {
    width: "100%",
    textAlign: "center"
  },
  search: {
    marginTop: "auto",
    marginBottom: "auto"
  }
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const logout = useStoreActions(actions => actions.User.logout);
  const setSearch = useStoreActions(actions=>actions.Posts.setSearch)

  const title = useMemo(() => {
    switch (location.pathname) {
      case "/home":
        return "Home";
      case "/test":
        return "Test";
      default:
        return "";
    }
  }, [location]);

  return (
    <AppBar position="static" className={classes.main}>
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
          {!showSearch && <Typography variant="h5" style={{ marginLeft: "0.5rem" }}>
            {title}
          </Typography>}
        </div>
        <div
          style={{ width: "70%", display: "flex", justifyContent: "flex-end" }}
        >
          {showSearch && <TextField placeholder="search by title..." className={classes.search} fullWidth autoFocus onChange={(e)=>setSearch(e.target.value)} />}
          <IconButton color="inherit" onClick={() => setShowSearch(!showSearch)}>
            <Search fontSize="large" />
          </IconButton>
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
              key={"logout"}
              onClick={() => {
                logout();
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
}
