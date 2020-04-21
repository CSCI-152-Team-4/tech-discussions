import React, { useState, useEffect } from "react";
import PostService from "../services/Posts";
import useSocket from "./useSocket";
import constants from '../configs/constants'
import io from 'socket.io-client'

const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

const usePosts = (socket) => {
  const [posts, setPosts] = useState({});

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
    socket.on("new-post", async (newPost) => {
      const data = await PostService.getOnePost(newPost)
      if(data) setPosts((prevPosts) => ({ [newPost]: data, ...prevPosts }))
    })
    socket.on("delete-post", (deletedPost) => {
        setPosts((prevPosts)=>{
          const { [deletedPost]: _, ...rest } = prevPosts
          return rest
        })
    })
  }, [socket])

  return posts;
};

export default usePosts;
