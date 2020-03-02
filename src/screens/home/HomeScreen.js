import React, { useEffect } from "react";

import PostCard from "../../components/PostCard";
import { Container, makeStyles, ListItem, List } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
    overflowY: "scroll",
    padding: 0,
    backgroundColor: theme.palette.background.default
  }
}));

const HomeScreen = () => {
  const classes = useStyles();
  const history = useHistory();
  const { posts, search } = useStoreState(state => state.Posts);

 // const [posts, setPosts] = React.useState([]);
  const { getPosts } = useStoreActions(actions => actions.Posts);

  useEffect(() => {
    getPosts();
  }, []);

  // useEffect(() => {
  //   setPosts(posts);
  // }, [_posts]);

  // useEffect(() => {
  //   if (search.length > 0) {
  //     setPosts(
  //       _posts.filter(post =>
  //         post.title.toLowerCase().includes(search.toLowerCase())
  //       )
  //     );
  //   } else {
  //     setPosts(_posts);
  //   }
  // }, [search, posts, setPosts]);

  return (
    <>
      <Container className={classes.root} maxWidth={false} color="secondary">
        <List>
          {posts.length > 0 &&
            posts.map((post, index) => (
              <ListItem key={`li-${index}`}>
                <PostCard
                  key={post._id}
                  views={post.views}
                  votes={post.votes}
                  answers={post.answers}
                  title={post.title}
                  body={post.body}
                  tags={post.tags}
                  handleClick={() => history.push(`/post/${post._id}`)}
                />
              </ListItem>
            ))}
        </List>
      </Container>
    </>
  )
};

export default HomeScreen;
