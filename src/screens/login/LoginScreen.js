import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import {
  TextField,
  Container,
  makeStyles,
  Box,
  Button,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © tech-discussions "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    height: "100%"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(5)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  rightSide: {
    padding: theme.spacing(1)
  }
}));

const splash = require("./splash.jpg");

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  const { setLoggedIn, login } = useStoreActions(({ User }) => User);
  const { loggedIn, loginError } = useStoreState(({ User }) => User);
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  
  useEffect(() => {
    setLoggedIn(false);
  }, [setLoggedIn]); // set logged out

  useEffect(() => {
    if (loggedIn) history.push("/home");
  }, [history, loggedIn]);

  useEffect(() => {
    setErr(loginError);
  }, [loginError]);

  const handleClick = React.useCallback(
    e => {
      e.preventDefault();
      if (creds.email.length > 0 && creds.password.length > 0) {
        if (
          RegExp(/[\S]+.mail.fresnostate.edu/).test(
            creds.email.trim().toLowerCase()
          )
        )
          login(creds);
        else setErr("Email must be a Fresno State Account only");
      }
    },
    [creds.email, creds.password, creds, login]
  );

  return (
    <Grid container maxWidth className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src={splash}  alt="splash image" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        elevation={6}
        square
        className={classes.rightSide}
      >
        <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Tech-Discussions
          </Typography>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form className={classes.form} noValidate>
            <Typography  style={{ textAlign: "center", color: "red" }}> {err} </Typography>
            <Typography component="h1" variant="h5">
             Sign In
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => {
                setCreds(({ password }) => ({
                  password,
                  email: e.target.value
                }));
                e.persist();
              }}
              color="primary"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => {
                setCreds(({ email }) => ({
                  email,
                  password: e.target.value
                }));
                e.persist();
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              Sign In
            </Button>
            <Grid
              container
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ textAlign: "center", marginTop: ".5rem" }}
              >
                <span class = "Dt">
                <Link onClick={() => history.push("/signup")} variant="body2">
                 <span class = 'Da'> Don't have an account? Sign Up</span>
                </Link>
                </span>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
