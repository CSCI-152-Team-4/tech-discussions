import React, { useState, useEffect } from "react";
import PostService from "../services/Posts";
import { useStoreActions } from "easy-peasy";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const storePosts = useStoreActions(({Posts})=>Posts.setPosts)

  useEffect(() => {
    const getPosts = async () => {
      const p = await PostService.getPosts(20);
      console.log("posts", p);
      storePosts(p)
      setPosts(p);
    };
    getPosts();
  }, []);

  return { posts };
};

export default usePosts;
