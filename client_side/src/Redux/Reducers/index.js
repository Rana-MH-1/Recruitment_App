import { combineReducers } from "redux";
import AppStateReducer from './AppStateReducer'
import AuthReducer from './AuthReducer'
import PostReducer from './PostReducer'

export const RootReducer= combineReducers({
    Auth: AuthReducer,
    Posts: PostReducer,
    appState: AppStateReducer
})