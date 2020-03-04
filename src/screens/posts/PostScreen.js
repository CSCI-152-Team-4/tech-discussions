import React, { useEffect, useState } from "react";
import { Container, Grid, Box, makeStyles, Typography } from '@material-ui/core'
import { useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import Highlighter from '../../components/Highlighter'

const useStyles = makeStyles((theme=>({
  root: {
    paddingTop: '1rem'
  },
  postBox: {
    padding: '1rem'
  }
})))

const PostScreen = () => {
  const { posts } = useStoreState((state)=>state.Posts);
  const { postId } = useParams();
  const [post] = useState(posts[postId])
  const classes = useStyles()
  
  return post ? (
    <Container className={classes.root}>
      <Grid container>
        <Typography>{post.title}</Typography>
        <Grid item xs={12}>
          <div border={1} borderRadius={".5rem"} borderColor={'secondary.main'}>
            <ReactMarkdown source={post.body} renderers={{code: Highlighter}}/>
          </div>
        </Grid>
        <Grid item xs={12}>
          <p>enter res here</p>
        </Grid>
      </Grid>
    </Container>
  ) : <div>loading...</div>;
};

export default PostScreen;
