import {startUploading, errorUploading, finishUploading} from '../actions/creators'
import axios from 'axios'

export function getStory(file) {
    console.log('File in the getStory action', file)
    let data = new FormData()
    data.append('file', file)
    data.append('name', 'image')
    return dispatch => {
        dispatch(startUploading())
        axios.post('https://story-generator-169112.appspot.com/api/v1/understand_image', data)
            .then(response => {
                dispatch(finishUploading(response.data))
                return axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(response => {
                        console.log(response.data)
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => dispatch(errorUploading(error)))
    }
}
