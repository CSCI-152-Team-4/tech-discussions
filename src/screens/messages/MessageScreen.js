import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  makeStyles,
  ListItem,
  List,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import { useStoreActions, useStoreState } from "easy-peasy";
import MessageService from "../../services/Messages";
import { useParams } from "react-router-dom";
import { useSocketState } from "../../state";

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
  const [typing, setTyping] = useState(false);
  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        alignContent="center"
        style={{ height: "100%" }}
      >
        <Grid
          item
          xs={11}
          md={8}
          lg={6}
          style={{ border: "1px solid green", width: "100%", flex: 1 }}
        >
          hello ther
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
            onBlur={() => {
              setTyping(false);
            }}
            style={{ maxHeight: "80%", width: "100%", overflowY: "scroll" }}
          />
          <Button
            style={{ height: "20%", width: "80%", margin: "auto" }}
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default MessageScreen;
