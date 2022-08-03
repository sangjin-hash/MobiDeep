import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer, {deviceReducer} from './reducers';

const rootReducer = combineReducers({userReducer, deviceReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
