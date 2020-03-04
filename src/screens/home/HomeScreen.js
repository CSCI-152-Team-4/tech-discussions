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
          {Object.keys(posts).length > 0 &&
            Object.keys(posts).map((id, index) => posts[id] && (
              <ListItem key={`li-${index}`}>
                <PostCard
                  key={posts[id]._id}
                  views={posts[id].views}
                  votes={posts[id].votes}
                  answers={posts[id].answers}
                  title={posts[id].title}
                  body={posts[id].body}
                  tags={posts[id].tags}
                  handleClick={() => history.push(`/post/${posts[id]._id}`)}
                />
              </ListItem>
            ))}
        </List>
      </Container>
    </>
  )
};

export default HomeScreen;
