import { combineReducers } from "redux";
import AppStateReducer from './AppStateReducer'
import AuthReducer from './AuthReducer'
import { FilterReducer } from "./FiltreReducer";
import { getIdApplyReducer } from "./getIdApplyReducer";
import { getIdPostReducer } from "./getIdPostReducer";
import PostReducer from './PostReducer'


export const RootReducer= combineReducers({
    Auth: AuthReducer,
    Posts: PostReducer,
    appState: AppStateReducer,
    Filtre :FilterReducer,
    PostId: getIdPostReducer,
    ApplyId:getIdApplyReducer
})