import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
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
      {'Copyright © tech-discussions '}
      <Link color="inherit" href="https://material-ui.com/">
        Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
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
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignupScreen() {
  const classes = useStyles();
  const history = useHistory();

  const { setLoggedIn, signup } = useStoreActions(({ User }) => User);
  const { loggedIn, loginError } = useStoreState(({User})=>User)
  const [creds, setCreds] = useState({email: "", password: ""})
  const [err, setErr] = useState("")

  useEffect(() => {
    setLoggedIn(false);
  }, [setLoggedIn]); // set logged out

  useEffect(() => {
    if (loggedIn) history.push("/home");
  }, [history, loggedIn]);

  useEffect(()=>{
    setErr(loginError)
  },[loginError])

  const handleClick = React.useCallback((e) => {
    e.preventDefault()
    if(creds.email.length > 0 && creds.password.length > 0){
      if(RegExp(/[\S]+.mail.fresnostate.edu/).test(creds.email.trim().toLowerCase()))
        signup(creds)
      else setErr("Must be a Fresno State email only")
    }
  }, [creds.email, creds.password, creds, signup])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <Typography style={{textAlign: 'center', color: 'red'}}>{err}</Typography>
          <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="fname"
                onChange={(e)=>{
                  setCreds(({firstName})=>({firstName, firstName: e.target.value}))
                  e.persist()
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
                onChange={(e)=>{
                  setCreds(({lastName})=>({lastName, lastName: e.target.value}))
                  e.persist()
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
            onChange={(e)=>{
              setCreds(({password})=>({password, email: e.target.value}))
              e.persist()
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
            onChange={(e)=>{
              setCreds(({email})=>({email, password: e.target.value}))
              e.persist()
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
            Sign Up
          </Button>
          <Grid container style={{justifyContent: 'center', alignItems: 'center'}}>
            <Grid item xs={12} style={{textAlign: 'center', marginTop: '.5rem'}}>
              <Link onClick={()=>history.push('/login')} variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
