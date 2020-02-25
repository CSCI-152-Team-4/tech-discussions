import React from 'react'

import PostCard from '../../components/PostCard'
import { Container, makeStyles, ListItem, List } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import usePosts from '../../hooks/usePosts'

const useStyles = makeStyles((theme)=>({
  root: {
    ['& > *']: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2)
    },
    height: "100%",
    width: "100%",
    overflowY: "scroll",
    padding: 0,
    backgroundColor: theme.palette.background.default
  }
}))

const HomeScreen = () => {
  const classes = useStyles()
  const history = useHistory()
  const {posts} = usePosts()
  return(
    <>
    <Container className={classes.root} maxWidth={false} color="secondary">
      <List>
        {posts.length && posts.map((post)=>(
          <ListItem>
            <PostCard 
              key={post._id} 
              views={post.views} 
              votes={post.votes} 
              answers={post.answers} 
              title={post.title} 
              body={post.body} 
              tags={post.tags} 
              handleClick={()=>history.push(`/post/${post._id}`)}
            />
          </ListItem>
        ))}
      </List>
    </Container>
    </>
  )
}

export default HomeScreen