import { createStore } from 'redux';
import rootReducer from './reducers'; // assuming you have reducers

const store = createStore(rootReducer);

export default store;