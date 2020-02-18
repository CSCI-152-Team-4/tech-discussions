import React, { useState } from 'react'
import { TextField, Container, makeStyles, Box, Button, Grid } from '@material-ui/core'
import Editor from 'for-editor'
import { useStoreActions, useStoreState } from 'easy-peasy'

import { colors } from '../../configs/theme'

const useStyles = makeStyles((theme)=>({
  container: {
    backgroundColor: colors.screenBackground,
    padding: theme.spacing(1),
    height: "100vh",
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: "center",
    flexDirection: "column"
  },
  title: {
    backgroundColor: 'white',
    borderRadius: ".5rem",
    width: "100%",
    height: "2rem"
  },
  post: {
    height: "100%",
    width: "100%"
  },
  button: {
    width: "60%"
  }
}))

const capitalizeWords = (content) => {
  return content.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

const NewPostScreen = () => {
  const classes = useStyles()
  const [title, setTitle] = useState("")
  const [post, setPost] = useState("")
  const [split, setSplit] = useState(false)
  const createPost = useStoreActions((actions)=>actions.Posts.createPost)
  const userId = useStoreState((state)=>state.User.userId)

  return(
    <Container className={classes.container}>
      <TextField
          placeholder="Title"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>setTitle(capitalizeWords(e.target.value))}
          value={title}
          autoCapitalize="on"
        />
      <div style={{height: "70%", width: "100%"}}>
        <Editor 
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
          value={post}
          style={{width: "100%", height: "100%"}}
          placeholder="Enter post here..."
          onChange={(e)=>setPost(e)}
          subfield={split}
          language="en"
        />
      </div>
      <Button onClick={()=>createPost({
        title: title,
        body: post,
        poster: userId
      })} className={classes.button} variant="contained" color="primary">
        Post
      </Button> 
    </Container>
  )
}

export default NewPostScreen