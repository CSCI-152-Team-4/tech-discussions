import { persist } from 'easy-peasy'
import localforage from 'localforage'

const userModel = persist({
  email: "",
  password: "",
  username: ""
}, {
  mergeStrategy: 'mergeDeep',
  storage: localforage
})

export default userModel;