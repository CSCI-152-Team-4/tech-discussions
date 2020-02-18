import Axios from 'axios'
import constants from '../configs/constants'

const createPost = async (post) => {
  await Axios.post(`${constants.server_url}/posts`, post)
}

export default {
  createPost
}