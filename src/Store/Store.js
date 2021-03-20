 import { createStore, applyMiddleware, compose } from 'redux';
 import ItemReducer from './Reducers/ItemReducer';
 
 const initialState = {};
 
 const store = createStore(ItemReducer);
 
 export default store;
 