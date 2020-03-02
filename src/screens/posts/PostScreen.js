import React from "react";

import { useStoreState, useStoreActions } from "easy-peasy";
import { useParams } from "react-router-dom";

const PostScreen = () => {
  const { posts } = useStoreState(state => state.Posts);
  const findPost = useStoreActions((actions)=>actions.Posts.findPost);
  const { postId } = useParams();
  console.log('post', findPost)
  return (
    <div>{postId}</div>
  );
};

export default PostScreen;
