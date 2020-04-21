import React from 'react'
import { Typography, Card, CardContent, makeStyles, Chip, Button } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  card: {
    width: '100%',
    height: "20vh",
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
   width: "5rem",
   marginRight: theme.spacing(1),
   //backgroundColor: theme.palette.grey.main
 },
 title: {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "90%"
 }
}))

export default function PostCard({handleClick, views, answers, votes, title, tags}){
  const classes = useStyles()
  return(
    <Card className={classes.card} onClick={handleClick}>
      <CardContent className={classes.content}>
        <div style={{height: "20%", width: "70%", display: 'flex', flexDirection: "row", justifyContent: "flex-start", paddingTop: ".5rem"}}>
          <Typography className={classes.stat}>{views ? Object.keys(views).length : 0} Views</Typography>
          <Typography className={classes.stat}>{answers} Answers</Typography>
          <Typography className={classes.stat}>{votes} Votes</Typography>
        </div>
        <Typography className={classes.title}>{title}</Typography>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          { tags && tags.length > 0 ?
            tags.map((tag, i)=><Chip key={`chip-${i}`}color="primary" label={tag} className={classes.tag}/>)
              :
            <Typography>No tags</Typography>
          }
        </div>
      </CardContent>
    </Card>
  )
}