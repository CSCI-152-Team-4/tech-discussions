import Axios from "axios";
import constants from "../configs/constants";

const createPost = async post => {
  await Axios.post(`${constants.server_url}/posts`, post);
};

const getPosts = async limit => {
  let { data } = await Axios.get(`${constants.server_url}/posts/${limit}`);
  return data
};

export default {
  createPost,
  getPosts
};
