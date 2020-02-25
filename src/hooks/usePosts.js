import React, { useState, useEffect } from 'react'
import PostService from '../services/Posts'

const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [set, setSet] = useState(false)
  const refresh = () => setSet(!set)
  
  useEffect(()=>{
    const getPosts = async () => {
      const p = await PostService.getPosts(20)
      console.log("posts", p)
      setPosts(p)
    }
    getPosts()
  },[set])

  return {posts, refresh}
}

export default usePosts