import React, { useState, useEffect } from "react";
import PostService from "../services/Posts";

const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

const usePosts = (_socket) => {
  const [posts, setPosts] = useState({});
  const socket = React.useRef(_socket).current

  const getPosts = async () => {
    const p = await PostService.getPosts(20);
    setPosts(convertArrayToObject(p, "_id"));
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(()=>{
    if(socket){
      socket.on("update-post", async (newPost) => {
        const data = await PostService.getOnePost(newPost)
        if(data) setPosts((prevPosts) => ({ ...prevPosts, [newPost]: data}))
      })
      socket.on("new-post", async (newPost) => {
        console.log("new post", newPost)
        const data = await PostService.getOnePost(newPost)
        if(data) setPosts((prevPosts) => ({ [newPost]: data, ...prevPosts }))
      })
      socket.on("delete-post", (deletedPost) => {
        setPosts((prevPosts)=>{
          const { [deletedPost]: deleted, ...rest } = prevPosts
          return rest
        })
      })
    }
    return () => {
      socket.off("update-post")
      socket.off("new-post")
      socket.off("delete-post")
    }
  }, [socket])

  return posts;
};

export default usePosts;
