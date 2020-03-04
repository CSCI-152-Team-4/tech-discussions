import { persist, thunk, action, computed } from "easy-peasy";
import localforage from "localforage";
import PostService from "../../services/Posts";

const postsModel = persist(
  {
    posts: {},
    search: "",
    setSearch: action((state, payload) => {
      console.log("state.search", state.search);
      state.search = payload;
    }),
    findPost: computed(state => id => state.posts[id]),
    //searchedPosts: computed((state)=>state.posts.filter((post)=>post.title.toLowerCase().includes(state.search.toLowerCase()))),
    postCount: computed(state => state.posts.length),
    storePost: action((state, payload) => {
      state.posts[payload._id] = payload;
    }),
    setPosts: action((state, payload) => {
      payload.forEach(post => {
        state.posts[post._id] = post;
      });
    }),
    getPosts: thunk(async (actions, payload) => {
      let posts = await PostService.getPosts(10);
      actions.setPosts(posts);
    }),
    createPost: thunk(async (actions, payload) => {
      try {
        await PostService.createPost(payload);
        actions.storePost(payload);
      } catch (err) {
        console.log("err", err);
      }
    })
  },
  {
    storage: localforage,
    mergeStrategy: "mergeDeep"
  }
);

export default postsModel;
