import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import authentication from '../Reducer';

const reducer = combineReducers({
  authentication,
});
const store = configureStore({
  reducer,
});
export default store;
