import React, { useState, useEffect } from "react";
import PostService from "../services/Posts";
import { useSocketState } from '../state'

const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

const usePosts = () => {
  const [posts, setPosts] = useState({});
  const [socket,] = useSocketState()

  const getPosts = async () => {
    const p = await PostService.getPosts(20);
    setPosts(convertArrayToObject(p, "_id"));
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(()=>{
    socket.on("update-post", async (newPost) => {
      const data = await PostService.getOnePost(newPost)
      if(data) setPosts((prevPosts) => ({ ...prevPosts, [newPost]: data}))
    })
    socket.on("new-post", (newPost) => {
      const data = await PostService.getOnePost(newPost)
      if(data) setPosts((prevPosts) => ({ ...prevPosts, [newPost]: data}))
    })
    socket.on("delete-post", (deletedPost) => {
        setDBs((prevPosts)=>{
          const { [deletedPost]: _, ...rest } = prevPosts
          setPosts(rest)
        })
    })
  }, [socket])

  return posts;
};

export default usePosts;
