// store.js
import { createStore } from 'redux';
import filmReducer from './reducers';

const store = createStore(filmReducer);

export default store;
