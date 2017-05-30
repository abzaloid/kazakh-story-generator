import {START_UPLOADING, ERROR_UPLOADING, FINISH_UPLOADING} from '../actions/Types'

const initialState = {
    loading: false,
    loaded: false,
    error: null,
    data: null
}

export const inputReducer = (state=initialState, action) => {
    const { type, payload } = action

    switch(type) {
        case START_UPLOADING: {
            return {
                ...state,
                loaded: false,
                loading: true
            }
        }
        case ERROR_UPLOADING: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: payload
            }
        }
        case FINISH_UPLOADING: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload
            }
        }
    }

    return state
}
