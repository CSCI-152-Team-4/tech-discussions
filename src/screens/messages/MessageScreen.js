import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { Container, Grid, Box, makeStyles, ListItem, List, Button, Typography } from '@material-ui/core'
import { useStoreActions, useStoreState } from "easy-peasy";
import MessageService from '../../services/Messages'
import { useParams } from "react-router-dom";
import { useSocketState } from "../../state";

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      paddingTop: "1rem",
      backgroundColor: theme.palette.background,
    },
    chatArea: {
      width: '95%',
      height:'80%',
      backgroundColor: theme.palette.background,
    },
    chatInput: {
      width: '95%',
      height:'80%',
    },
  }));

const MessageScreen = () => {
    const classes = useStyles();

return(
    <Container className={classes.root}>

      <Grid container> 
        hello yo
      </Grid>

      </Container>
    
    
  )
}
export default MessageScreen;