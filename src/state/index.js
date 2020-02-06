import { createStore } from 'easy-peasy'

import StoreModel from './models'

const store = createStore(StoreModel, {
  name: 'TD-State'
});

export default store
