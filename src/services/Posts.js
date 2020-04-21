import Axios from "axios";
import constants from "../configs/constants";

const createPost = async post => {
  try {
    await Axios.post(`${constants.server_url}/posts`, post);
  } catch (err) {
    console.log("err creating post", err);
  }
};

const getPosts = async limit => {
  try {
    let { data } = await Axios.get(`${constants.server_url}/posts/${limit}`);
    return data;
  } catch (err) {
    console.log("err getting posts", err);
    return [];
  }
};

const viewPost = async (postId, userId) => {
  try {
     let { data } = await Axios.put(`${constants.server_url}/posts/view/${postId}`, { userId: userId })
  } catch(err) {
    console.log('err', err)
  }
}

const getOnePost = async postId => {
  try {
    let { data } = await Axios.get(`${constants.server_url}/posts/one/${postId}`);
    return data;
  } catch (err) {
    console.log("err getting posts", err);
    return [];
  }
};

const getComments = async postId => {
  try {
    let { data } = await Axios.get(
      `${constants.server_url}/comments/byPost/?postId=${postId}`
    );
    if (data.comments.length > 0) return data.comments;
    else return [];
  } catch (err) {
    console.log("err", err);
    return [];
  }
};

const addComment = async (postId, userId, body) => {
  try {
    var {
      data: { ok }
    } = await Axios.post(`${constants.server_url}/comments/new`, {
      postId,
      userId,
      body
    });
    return ok;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

export default {
  createPost,
  getPosts,
  getComments,
  addComment,
  getOnePost,
  viewPost
};
