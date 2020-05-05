import React from "react";

import PostCard from "../../components/PostCard";
import { Container, makeStyles, ListItem, List, TextField, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {useSocketState} from '../../state'
import {
  Search,
} from "@material-ui/icons";
const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
    overflowY: "scroll",
    padding: 0,
    backgroundColor: theme.palette.background.default
  },
  search: {
    marginTop: "auto",
    marginBottom: "auto",
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  const history = useHistory();
  const {posts} = useSocketState()
  const [search, setSearch] = React.useState("")

  const RenderPosts = () => {
    let postIds = Object.keys(posts)
    if(search.length > 0)
      postIds = postIds.filter((id)=>posts[id].title.toLowerCase().includes(search.toLowerCase()))
    return (
      postIds.map((id, index)=>(<>
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
      </>))
    )
  }

  return (
    <>
      <Container className={classes.root} maxWidth={false} color="secondary">
        <Box width={'60%'} display="flex" margin="auto" padding=".25rem">
          <TextField
            placeholder="search by title..."
            className={classes.search}
            fullWidth
            autoFocus
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              endAdornment: <Search fontSize="large" />
            }}
          />
        </Box>
        <List>
          <RenderPosts />
        </List>
      </Container>
    </>
  )
};

export default HomeScreen;
