import React from 'react'

import PostCard from '../../components/PostCard'
import { Container, makeStyles, ListItem, List } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  root: {
    height: "90vh",
    bottom: 0,
    top: 0,
    overflow: "scroll",
    padding: 0,
    backgroundColor: "rgba(232, 232, 232, 1)"
  }
}))

const HomeScreen = () => {
  const classes = useStyles()
  return(
    <Container className={classes.root}>
      <List>
        {[0,1,2,3,4,5,6,7,8].map((i)=>(
          <ListItem>
            <PostCard key={i}/>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default HomeScreen