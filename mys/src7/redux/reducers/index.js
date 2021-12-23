import {
    combineReducers
} from 'redux'
import countReducer from './count'
import personResucer from './person'
export default combineReducers({
    countReducer,
    personResucer
})