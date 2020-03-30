import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Button,
  makeStyles,
  Typography
} from "@material-ui/core";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useParams } from "react-router-dom";
import MdEditor from "for-editor";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "1rem"
  },
  postBox: {
    padding: "1rem"
  },
  commentBox: {
    marginTop: "1rem"
  },
  button: {
    width: "60%",
    margin: "auto",
    marginTop: "2rem",
    marginBottom: "2rem"
  },
  marginLeft: {
    maxWidth: "95%",
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    "& > *": {
      marginTop: theme.spacing(1)
    },
    marginBottom: theme.spacing(1)
  }
}));

const PostScreen = () => {
  const { posts } = useStoreState(state => state.Posts);
  const userId = useStoreState(state => state.User.userId);
  const { getComments, addComment } = useStoreActions(actions => actions.Posts);
  const { postId } = useParams();
  const [post] = useState(posts[postId]);
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const replyRef = React.useRef(null);

  const fetchComments = async () => {
    if (postId) setComments(await getComments(postId));
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  React.useLayoutEffect(() => {
    const els = document.getElementsByClassName(
      "for-editor-edit for-panel for-edit-preview"
    );
    for (var i = 0; i < els.length; i++) {
      els.item(i).style.display = "none";
    }
  }, [comments.length]);

  const submit = async () => {
    if (postId.length > 0 && userId && comment.length > 0) {
      await addComment({ postId, userId, comment });
      await fetchComments(postId)
    }
  };

  return post ? (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <MdEditor
              toolbar={{}}
              preview={true}
              value={`# ${post.title}\n\n${post.body}`}
              style={{ width: "100%", height: "100%" }}
              placeholder="Enter post here..."
              language="en"
            />
          </div>
        </Grid>
        <Grid className={classes.marginLeft}>
          <Typography>Reply</Typography>
          <MdEditor
            ref={replyRef}
            toolbar={{
              img: false,
              save: false,
              code: true,
              expand: true,
              h1: true,
              h2: true,
              link: true,
              preview: true,
              undo: true,
              redo: true
            }}
            value={comment}
            style={{ marginLeft: "auto", width: "100%" }}
            height={"auto"}
            placeholder="Enter comment here..."
            onChange={e => setComment(e)}
            language="en"
          />
          <Button
            onClick={submit}
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Typography>Previous Replies</Typography>
          {comments.length > 0 &&
            comments.map((c, i) => (
              <div className={classes.comment}>
                <MdEditor
                  key={`post-${postId}-comment-${c._id}`}
                  toolbar={{}}
                  className="comment-container"
                  preview
                  value={
                    c.body +
                    `<div align="right">${"\n\nPosted by: "}${
                      c.commenter.email
                    }</div>`
                  }
                  language="en"
                  height={"auto"}
                />
              </div>
            ))}
        </Grid>
      </Grid>
    </Container>
  ) : (
    <div>loading...</div>
  );
};

export default PostScreen;
