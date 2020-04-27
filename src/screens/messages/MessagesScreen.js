import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  makeStyles,
  ListItem,
  Modal,
  List,
  Button,
  TextField,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  rt: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: theme.spacing(2.5),
  },
  rot: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
    width: "50%,",
  },
  inline: {
    display: "inline",
  },
  modal: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
  },
  addFriendForm: {
    backgroundColor: theme.palette.background.default,
    height: "60%",
    margin: "auto",
    padding: theme.spacing(3),
  },
}));

const MessagesScreen = () => {
  const classes = useStyles();
  const history = useHistory();
  const message = `Message preview if avaliable`;
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleClick = () => {
    console.log("Clicked add friends");
    setModalOpen(true);
  };

  return (
    <Container className={classes.root}>
      <Grid container wrap="nowrap" spacing={0} className={classes.rot}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>R</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Friend Name"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                ></Typography>
                {message}
              </React.Fragment>
            }
          />
        </ListItem>
      </Grid>

      <Divider variant="middle" />

      <div className={classes.rt}>
        <Chip
          label="Add Friend"
          clickable
          color="primary"
          onClick={handleClick}
          icon={<FaceIcon />}
        />
      </div>
      <Modal open={modalOpen} className={classes.modal}>
        <Grid
          container
          direction="column"
          justify="space-around"
          className={classes.addFriendForm}
          xs={11}
          md={8}
          lg={6}
        >
          <Grid item style={{ flex: 1, flexGrow: 1.5 }}>
            <Typography
              variant="h5"
              style={{ width: "100%", textAlign: "center" }}
            >
              Add Friend
            </Typography>
          </Grid>
          <Grid item style={{ flex: 1, margin: "auto" }}>
            <TextField placeholder="Friend code..." />
          </Grid>
          <Grid item style={{ flex: 1 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setModalOpen(false)}
              fullWidth
            >
              confirm
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </Container>
  );
};

export default MessagesScreen;
