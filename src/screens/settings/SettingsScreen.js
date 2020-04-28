import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import { Container, makeStyles, ListItem, List , Grid, Typography, responsiveFontSizes, Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import usePosts from '../../hooks/usePosts';
import { useStoreState , useStoreActions} from 'easy-peasy';
import Editor from "for-editor";
import { sizing } from '@material-ui/system';
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
          //color: 'Red',
          //borderColor:'red',
          //backgroundColor: 'red'
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

return(
    <Container className={classes.root} maxWidth = {false} >
        <form className = {classes.form}>
        <Typography style= { {textAlign :'center',fontSize: 30}} >
            Account Information
        </Typography>
        <Typography style = {{textAlign:'center'}}>
        <TextField
            variant="outlined"
            margin="normal"
            textAlign='center'
            required
            //width = '180%'
            id="oldPass"
            label="Current Password"
            name="oldPass"
            autoComplete="email"
            color="secondary"
            onChange={(e)=>setPassThree(e.target.value)}
            onChange={(e)=>setPassFour(e.target.value)}
            
            
          />
          </Typography>
          <Typography style = {{textAlign: 'center'}}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            //fullWidth
            id="email"
            label="New Password"
            name="email"
            autoComplete="email"
            color={passOne === passTwo ? "secondary" : "primary"}
            onChange={(e)=>setPassOne(e.target.value)}
          />
          </Typography>
          <Typography style = {{textAlign: 'center'}}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            //fullWidth
            id="email"
            label="Confirm Password"
            name="email"
            autoComplete="email"
            color={passOne === passTwo ? "secondary" : "primary"}
            onChange={(e)=>setPassTwo(e.target.value)}
            
          />

          </Typography >
          <Grid item container xs={12} justify="center" >
          <Button 
          
          onClick = {() => {
              AuthenticationService.changePass(passTwo, passFour, userId);
              history.push("/home");
            }
        }
        className = {classes.button}
        variant = 'contained'
        color = 'primary'
          >
          Confirm
          </Button>
          </Grid>

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
                Delete Account
            </Button>  
          </Grid>
        </form>

    </Container>
)
}

export default SettingScreen;
