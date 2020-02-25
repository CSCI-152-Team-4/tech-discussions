import React, { useState } from 'react'
import { TextField, Container, makeStyles, Box, Button, Grid, Typography } from '@material-ui/core'
import Editor from 'for-editor'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme)=>({
  container: {
    height: "100vh",
    width: "100vw",
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.grey.main
  },
  title: {
      width: "95%",
      height: "3rem",
      paddingLeft: '.5rem',
      paddingRight: '.5rem',
  },
  editorContainer: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '.55rem'
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
  const history = useHistory()

  return(
    <Container className={classes.container}>
      <Typography variant="h5">Ask Your Question Here</Typography>
      <div style={{width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <TextField
            placeholder="Title"
            fullWidth
            margin="normal"
            onChange={(e)=>setTitle(capitalizeWords(e.target.value))}
            value={title}
            autoCapitalize="on"
            className={classes.title}
          />
      </div>
      <div className={classes.editorContainer} style={{height: "60%", width: "100%"}}>
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
      <Button onClick={()=>{createPost({
        title: title,
        body: post,
        poster: userId
      }); history.push("/home")}} className={classes.button} variant="contained" color="primary">
        Post
      </Button> 
    </Container>
  )
}

export default NewPostScreen