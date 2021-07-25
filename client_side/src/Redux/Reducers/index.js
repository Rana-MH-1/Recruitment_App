import { combineReducers } from "redux";
import AppStateReducer from './AppStateReducer'
import AuthReducer from './AuthReducer'

export const RootReducer= combineReducers({
    Auth: AuthReducer,
    appState: AppStateReducer
})