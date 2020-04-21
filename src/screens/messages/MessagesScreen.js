import React, { useEffect, useState } from "react";
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom'
import { Container, Grid, Box, makeStyles, ListItem, List } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background,
    },
    rt: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: theme.spacing(2.5),
    },
    rot: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
      width:"50%,"
    },
    inline: {
      display: 'inline',
    },
  }));

const MessagesScreen = () => {
  const classes = useStyles()
  const history = useHistory()
  const message = `Message preview if avaliable`;
  const handleClick = () => {
    console.log('Clicked add friends');
  };
  return (
  <Container className ={classes.root}>

        <Grid container wrap="nowrap" spacing={0} classname={classes.rot}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>R</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Friend Name"
              secondary={
                <React.Fragment>
                  <Typography
                    //component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                  </Typography>
                  {message}
                </React.Fragment>
              }
            />
          </ListItem>
        </Grid>

        <Divider variant="middle"/>
  
        <div className={classes.rt}>
          <Chip
            label="Add Friend"
            clickable
            color="primary"
            onClick={handleClick}
            icon={<FaceIcon />}
          />
        </div>
  </Container>
);}
  
export default MessagesScreen;
