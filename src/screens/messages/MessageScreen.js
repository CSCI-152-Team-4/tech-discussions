import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Button,
  TextField,
  Typography,
  Card,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import MessagesService from "../../services/Messages";
import { useStoreState } from "easy-peasy";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    paddingTop: "1rem",
    backgroundColor: theme.palette.background.default,
  },
  chatArea: {
    width: "95%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
  },
  chatInput: {
    width: "95%",
    height: "80%",
  },
}));

const MessageScreen = () => {
  const classes = useStyles();
  const { friendId } = useParams();
  const { userId, firstName } = useStoreState(({ User }) => User);
  const inputRef = React.useRef();
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [friendName, setFriendName] = useState("");

  useEffect(() => {
    const getMessages = async () => {
      const { friendName, messages } = await MessagesService.getMessages(
        userId,
        friendId
      );
      console.log(friendName, messages);
      setMessages(messages);
      setFriendName(friendName.firstName);
    };
    if (userId.length && friendId.length) getMessages();
  }, [userId, friendId]);

  const handleSend = async () => {
    console.log(userId, friendId, message);
    if (userId && friendId && message.length > 0) {
      await MessagesService.sendMessage(userId, friendId, message);
      setMessage("");
    }
  };

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
        style={{ height: "100%" }}
      >
        <Grid item style={{ flex: 0.1 }}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            {friendName}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            width: "100%",
            flex: 0.8,
            maxHeight: "70vh",
            display: "block",
            overflowY: "auto",
          }}
        >
          <List style={{ flex: 1 }}>
            {messages.map((m, i) => {
              return (
                <ListItem
                  alignItems="center"
                  style={{
                    margin: ".5rem",
                    paddingLeft: 0,
                  }}
                >
                  {m.sender === friendId ? (
                    <ListItemAvatar>
                      <Avatar>{friendName[0]}</Avatar>
                    </ListItemAvatar>
                  ) : (
                    <Typography
                      style={{
                        border: "1px solid grey",
                        borderRadius: ".2rem",
                        height: "100%",
                        padding: ".5rem",
                        marginRight: "1rem",
                        marginLeft: "auto",
                        textAlign: "left",
                      }}
                    >
                      {m.body}
                    </Typography>
                  )}
                  {m.sender === userId ? (
                    <ListItemAvatar>
                      <Avatar>{firstName[0]}</Avatar>
                    </ListItemAvatar>
                  ) : (
                    <Typography
                      style={{
                        border: "1px solid grey",
                        borderRadius: ".2rem",
                        height: "100%",
                        padding: ".5rem",
                        marginLeft: "1rem",
                        marginRight: "auto",
                        textAlign: "left",
                      }}
                    >
                      {m.body}
                    </Typography>
                  )}
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid
          item
          container
          justify="center"
          xs={11}
          md={8}
          lg={6}
          style={{ width: "100%", flex: 0.25 }}
        >
          <TextField
            fullWidth
            placeholder="..."
            multiline
            rows={typing ? 3 : 1}
            variant="outlined"
            onFocus={() => {
              setTyping(true);
            }}
            onBlur={(e) => {
              e.persist();
              setTyping(false);
            }}
            onChange={(e) => setMessage(e.target.value)}
            style={{ maxHeight: "80%", width: "100%", overflowY: "scroll" }}
          />
          <Button
            style={{ height: "20%", width: "80%" }}
            variant="contained"
            color="primary"
            onClick={() => handleSend()}
            type="button"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default MessageScreen;
