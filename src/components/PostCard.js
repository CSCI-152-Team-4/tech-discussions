import React from 'react'
import { Typography, Card, CardContent, makeStyles, Chip } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  card: {
    width: '100%',
    height: "20vh",
    marginBottom: theme.spacing(1)
  },
  content: {
   width: "100%",
   height: "100%",
   padding: 0,
   display: 'flex',
   flexDirection: "column",
   justifyContent: "space-around",
   paddingLeft: theme.spacing(2)
 },
 stat: {
   fontSize: "min(1rem, 4vw)",
   marginRight: theme.spacing(1)
 },
 tag: {
   width: "5rem"
 },
 title: {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "90%"
 }
}))

export default function PostCard(props){
  const classes = useStyles()
  return(
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div style={{height: "20%", width: "70%", display: 'flex', flexDirection: "row", justifyContent: "flex-start", paddingTop: ".5rem"}}>
          <Typography className={classes.stat}>12 Views</Typography>
          <Typography className={classes.stat}>5 Answers</Typography>
          <Typography className={classes.stat}>1 Votes</Typography>
        </div>
        <Typography className={classes.title}>this is the title of my question and this is what happens when there is a really long question</Typography>
        <Chip label="hello" className={classes.tag}/>
      </CardContent>
    </Card>
  )
}