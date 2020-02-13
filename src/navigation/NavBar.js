import React, { useState } from 'react'
import { Drawer, AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemText, ListItemIcon, makeStyles } from '@material-ui/core'
import  { Menu, Search, Add } from '@material-ui/icons'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const useStyles = makeStyles((theme)=>({
  drawer: {
    width: "75vw"
  },
  closeDrawer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menu: {
    paddingLeft: 0,
  },
  menuTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuTitle: {
    width: "100%",
    textAlign: "center"
  }
}))
export default function NavBar(props) {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return(
    <AppBar position="static">
      <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{width: "30%", display: 'flex', alignItems: 'center'}}>
          <IconButton color="inherit" className={classes.menu} onClick={()=>setDrawerOpen(true)}>
            <Menu fontSize="large"/>
          </IconButton>
          <Typography variant="h5" style={{marginLeft: '0.5rem'}}>Home</Typography>
        </div>
        <div style={{width: "70%", display: 'flex', justifyContent: 'flex-end'}}>
          <IconButton color="inherit">
            <Search fontSize="large"/> 
          </IconButton>
          <IconButton style={{marginRight: '.5rem', marginRight: 0, paddingLeft: 0}} color="inherit">
            <Add fontSize="large"/>
          </IconButton>
        </div>
      </Toolbar>
      <Drawer open={drawerOpen} onClose={()=>setDrawerOpen(false)}>
        <div className={classes.drawer}>
          <div className={classes.menuTop}>
            <Typography variant="h6" className={classes.menuTitle}>Menu</Typography>
            <IconButton className={classes.closeDrawer} onClick={()=>setDrawerOpen(false)}>
              <ArrowBackIosIcon htmlColor="black"/>
            </IconButton>
          </div>
          <List>
            <ListItem button key={"text"}>
              <ListItemIcon><Menu/></ListItemIcon>
              <ListItemText primary={"text"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  )
}