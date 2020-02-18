import React from 'react'

import PostCard from '../../components/PostCard'
import { Container, makeStyles, ListItem, List } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { colors } from '../../configs/theme'

const useStyles = makeStyles((theme)=>({
  root: {
    height: "100%",
    width: "100%",
    overflowY: "scroll",
    padding: 0,
    backgroundColor: colors.screenBackground
  }
}))

const HomeScreen = () => {
  const classes = useStyles()
  const history = useHistory()
  return(
    <>
    <Container className={classes.root} maxWidth={false}>
      <List>
        {[0,1,2,3,4,5,6,7,8].map((i)=>(
          <ListItem>
            <PostCard key={i} handleClick={()=>history.push(`/home/p-${i}`)}/>
          </ListItem>
        ))}
      </List>
    </Container>
    </>
  )
}

export default HomeScreen