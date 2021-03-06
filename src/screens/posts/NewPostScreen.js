import React, { useState } from "react";
import {
  TextField,
  Container,
  makeStyles,
  Box,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import Editor from "for-editor";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useHistory } from "react-router-dom";
import PostService from "../../services/Posts";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "70vw",
    },
    height: "100%",
    width: "100vw",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: theme.palette.grey.main,
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  title: {
    width: "100%",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  editorContainer: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: ".55rem",
    height: "60vh",
  },
  post: {
    height: "100%",
    width: "100%",
  },
  button: {
    width: "60%",
  },
}));

const capitalizeWords = (content) => {
  return content
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const NewPostScreen = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [split, setSplit] = useState(false);
  const userId = useStoreState((state) => state.User.userId);
  const history = useHistory();

  const makePost = () => {
    if (post.length > 0 && title.length > 0) {
      PostService.createPost({
        title: title,
        body: post,
        poster: userId,
        tags: [],
      });
      history.push("/home");
    }
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      justify="flex-start"
      className={classes.container}
    >
      <Grid item xs={12}>
        <TextField
          placeholder="Title"
          fullWidth
          margin="normal"
          onChange={(e) => setTitle(capitalizeWords(e.target.value))}
          value={title}
          autoCapitalize="on"
          className={classes.title}
        />
      </Grid>
      <Grid item className={classes.editorContainer} xs={12}>
        <Editor
          toolbar={{
            save: false,
            code: true,
            expand: true,
            h2: true,
            h3: true,
            link: true,
            preview: true,
            undo: true,
            redo: true,
          }}
          value={post}
          style={{ width: "100%", height: "100%" }}
          placeholder="Enter post here..."
          onChange={(e) => setPost(e)}
          subfield={split}
          language="en"
        />
      </Grid>
      <Grid item container xs={12} justify="center">
        <Button
          onClick={makePost}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Post
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewPostScreen;
