// import { createStore, combineReducers } from 'redux';
// import pageReducer from './reducers/pageListReducer';
// import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// const rootReducer = combineReducers(
//     { pageList: pageReducer }
// );
// const configureStore = () => {
//     return createStore(rootReducer, applyMiddleware(thunk));
// }
// export default configureStore;



import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/reducer'; //Import the reducer

// Connect our store to the reducers
export default createStore(reducers, applyMiddleware(thunk));