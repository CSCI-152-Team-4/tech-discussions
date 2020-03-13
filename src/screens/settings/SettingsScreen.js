import React, {useState} from 'react'
import TextField from "@material-ui/core/TextField";
import PostCard from '../components/PostCard'
import { Container, makeStyles, ListItem, List , Grid, Typography, responsiveFontSizes, Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import usePosts from '../hooks/usePosts'
import { useStoreState , useStoreActions} from 'easy-peasy'
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
          width: "60%"
        }
      

}))

const SettingScreen = () =>{
const classes = useStyles();
const userId = useStoreState(state => state.User.userid) 
const history = useHistory();
const [passOne, setPassOne] = useState("");
const [passTwo, setPassTwo] = useState("");


return(
    <Container className={classes.root} maxWidth = {false} >
        <form className = {classes.form}>
        <Typography style= { {textAlign :'center',fontSize: 30}} >
            Account Information
        </Typography>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Current Password"
            name="email"
            autoComplete="email"
            color="secondary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
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
            fullWidth
            id="email"
            label="Confirm Password"
            name="email"
            autoComplete="email"
            color={passOne === passTwo ? "secondary" : "primary"}
            onChange={(e)=>setPassTwo(e.target.value)}
          />
          <Grid item container xs={12} justify="center">
          <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick = {(newPass, oldPass, userId) => {
              AuthenticationService.changePass(newPass, oldPass, userId)
          }}
          >
          Confirm
          </Button>
          </Grid>
        </form>

    </Container>
)
}

export default SettingScreen;
