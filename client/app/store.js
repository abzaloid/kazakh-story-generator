import {createStore, applyMiddleware} from 'redux'
import {inputReducer} from './reducers/inputReducer'
import {getStory} from './middlewares/getStory'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk)

export const store = createStore(inputReducer, middleware)
