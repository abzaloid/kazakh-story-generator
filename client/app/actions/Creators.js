import {START_UPLOADING, ERROR_UPLOADING, FINISH_UPLOADING} from './Types'

export const startUploading = () => {
    return {
        type: START_UPLOADING
    }
}

export const errorUploading = (error) => {
    return {
        type: ERROR_UPLOADING,
        payload: error
    }
}

export const finishUploading = (data) => {
    return {
        type: FINISH_UPLOADING,
        payload: data
    }
}
