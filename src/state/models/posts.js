import { persist, thunk, action, computed } from 'easy-peasy'
import localforage from 'localforage'
import PostService from '../../services/Posts'

const stall = async (time=300) => { // stalling time to test thunks (mocks an api call to server)
  await new Promise(resolve=>setTimeout(resolve,time))
}
const postsModel = {
  posts: [],
  postCount: computed((state)=>state.posts.length),
  storePost: action((state, payload)=>{
    state.posts.push(payload)
  }),
  createPost: thunk(async(actions, payload)=>{
    try{
      await PostService.createPost(payload)
      actions.storePost(payload)
    } catch(err){
      console.log('err', err)
    }
  })
}

export default postsModel;