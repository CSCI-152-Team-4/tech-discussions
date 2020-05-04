import React, {useState} from 'react';
import { Container, makeStyles, Grid, Typography, Button, TextField} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import usePosts from '../../hooks/usePosts';
import { useStoreState , useStoreActions} from 'easy-peasy';
import AuthenticationService from '../../services/Authentication';

const useStyles = makeStyles( (theme)=> ({
  root: {
      height: "100%",
      width: "100%",
      overflowY: "scroll",
      padding: 0,
      backgroundColor: theme.palette.background.default
    },
  form: {
    width: "100%",
    marginTop: theme.spacing(5),
    color: 'White',
    fontSize:  100,
    '& > *': {
      borderColor: 'red'
    }
  },
  button:{
    width: "30%",
    marginTop : theme.spacing(2),
  },
   button1:{
     width: '50%',
     marginTop: theme.spacing(10),
   }
}))

const SettingScreen = () =>{
const classes = useStyles();
const userId = useStoreState(state => state.User.userId);
const history = useHistory();
const [passOne, setPassOne] = useState("");
const [passTwo, setPassTwo] = useState("");
const [passThree,setPassThree] = useState("");
const [passFour,setPassFour] = useState("");
const friendCode = useStoreState(({User})=>User.friendCode)
return(
    <Container className={classes.root} maxWidth = {false} >
      <Grid container direction="column" justify="center" alignItems="center" style={{margin: 'auto'}} xs={12} md={6} lg={4}>
        <Typography style= { {textAlign :'center',fontSize: 30}} >
          Account Information
        </Typography>
        <Typography>
          {"Friend Code: " + friendCode || "No Friend Code"}
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          textAlign='center'
          required
          id="oldPass"
          label="Current Password"
          name="oldPass"
          autoComplete="email"
          color="secondary"
          onChange={(e)=>setPassThree(e.target.value)}
          onChange={(e)=>setPassFour(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          id="new-pass"
          label="New Password"
          name="email"
          autoComplete="email"
          color={passOne === passTwo ? "secondary" : "primary"}
          onChange={(e)=>setPassOne(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          id="confirm-pass"
          label="Confirm Password"
          name="email"
          autoComplete="email"
          color={passOne === passTwo ? "secondary" : "primary"}
          onChange={(e)=>setPassTwo(e.target.value)}
        />
        <Button 
          onClick = {() => {
            AuthenticationService.changePass(passTwo, passFour, userId);
            history.push("/home");
          }}
          className = {classes.button}
          variant = 'contained'
          color = 'primary'>
          <span class = 'Q'>
          Confirm
          </span>
        </Button>
        <Grid item container xs= {12} justify ='center' >
            <Button
              onClick = {() => {
                AuthenticationService.deleteUser(userId);
                history.push('/signup')
              }}  
              className = {classes.button1}
              variant = 'contained'
              color = 'secondary'
              >
                <span class = 'W'>
                Delete Account
                </span>
            </Button>  
          </Grid>
      </Grid>
    </Container>
)
}

export default SettingScreen;
