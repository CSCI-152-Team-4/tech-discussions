import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
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
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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

export default function SignupScreen() {
  const classes = useStyles();
  const history = useHistory();

  const { setLoggedIn, signup } = useStoreActions(({ User }) => User);
  const { loggedIn, loginError } = useStoreState(({ User }) => User);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
  });
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

  const handleClick = React.useCallback((e) => {
    e.preventDefault()
    if(creds.email.length > 0 && creds.password.length > 0){
      if(RegExp(/[\S]+.mail.fresnostate.edu/).test(creds.email.trim().toLowerCase()))
        signup(creds)
      else setErr("Email must be a Fresno State Account only")
    }
  }, [creds.email, creds.password, creds, signup])

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
          <Typography style={{textAlign: 'center', color: 'red'}}> {err} </Typography>
          <Typography style ={{textAlign: 'center'}} component="h1" variant="h5">
             Sign Up
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            onChange={(e) => {
              setCreds((prevCreds) => ({
                ...prevCreds,
                username: e.target.value,
              }));
              e.persist();
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="fname"
            autoFocus
            onChange={(e) => {
              setCreds((prevCreds) => ({
                ...prevCreds,
                firstName: e.target.value,
              }));
              e.persist();
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            onChange={(e) => {
              setCreds((prevCreds) => ({
                ...prevCreds,
                lastName: e.target.value,
              }));
              e.persist();
            }}
          />
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
            onChange={(e) => {
              setCreds((prevCreds) => ({
                ...prevCreds,
                email: e.target.value,
              }));
              e.persist();
            }}
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
            onChange={(e) => {
              setCreds((prevCreds) => ({
                ...prevCreds,
                password: e.target.value,
              }));
              e.persist();
            }}
          />
          <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive updates via email."
              />
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Submit
          </Button>
          <Grid
            container
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid
              item
              xs={12}
              style={{ textAlign: "center", marginTop: ".5rem" }}
            >
              <Link onClick={() => history.push("/login")} variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
          <Box mt={8}>
            <Copyright />
          </Box>
        </form>
      </div>
    </Grid>
   </Grid>   
  );
}
