import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {RootReducer} from '../Redux/Reducers'

export const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)))