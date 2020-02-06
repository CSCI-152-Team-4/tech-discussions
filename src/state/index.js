import { createStore } from 'easy-peasy'

import StoreModel from './models'

const store = createStore(StoreModel, {
  mergeStrategy: 'mergeDeep',
});

export default store
