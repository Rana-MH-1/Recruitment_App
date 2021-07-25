import * as types from './AppStateTypes'

export const startLoading = (ref) => {
    return {
        type: types.START_LOADING,
        payload: ref
    }
}

export const stopLoading = () => {
    return {
        type: types.STOP_LOADING
    }
}

export const setError = (errors) => {
    return {
        type: types.SET_ERROR,
        payload: errors
    }
}
export const clearError = () => {
    return {
        type: types.CLEAR_ERROR
    }
}