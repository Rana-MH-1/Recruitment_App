import {SEARCH_IN_STATE} from './FiltreTypes';


export const FiltreAction = (search)  => {
    return {
        type:SEARCH_IN_STATE,
        payload:search
    }
    
}  