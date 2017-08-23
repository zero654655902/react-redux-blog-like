import postReducer from './post'
import commentReducer from './comment'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentReducer
})

export default rootReducer