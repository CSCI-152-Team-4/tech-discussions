import Axios from "axios";
import constants from "../configs/constants";

const createPost = async post => {
  try{
    await Axios.post(`${constants.server_url}/posts`, post);
  } catch(err){
    console.log('err creating post', err)
  }
};

const getPosts = async limit => {
  try{
    let { data } = await Axios.get(`${constants.server_url}/posts/${limit}`);
    return data
  } catch(err){
    console.log('err getting posts', err)
    return []
  }
};

export default {
  createPost,
  getPosts
};
