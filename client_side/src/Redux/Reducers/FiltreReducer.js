import { SEARCH_IN_STATE } from "../Actions/FiltreTypes";


export const FilterReducer =(state='',{type,payload})=>{
    switch (type) {
        case SEARCH_IN_STATE:
            return payload;
        default:
            return state;
    }

}