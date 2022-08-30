import {applyMiddleware, createStore} from 'redux';
import { usersReducer } from './usersReducer/usersReducer';
import thunk from 'redux-thunk';

export const store = createStore(usersReducer, applyMiddleware(thunk))