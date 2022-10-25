
import { createStore, combineReducers, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import reducers from './reducers/reducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['data']
};


const rootReducer = combineReducers({
    dataReducer: persistReducer(persistConfig, reducers)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
