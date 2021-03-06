import React from 'react'

import { Route, Switch } from 'react-router-dom'
import NewPostScreen from './NewPostScreen'
import PostScreen from './PostScreen'

const PostNav = () => {
  return (
    <Switch>
      <Route path="/post/new">
        <NewPostScreen/>
      </Route>
      <Route path="/post/:postId">
        <PostScreen />
      </Route>
      <Route path="/post">
        <div>main post</div>
      </Route>
      <Route>
        404 not found
      </Route>
    </Switch>
  )
}

export default PostNav