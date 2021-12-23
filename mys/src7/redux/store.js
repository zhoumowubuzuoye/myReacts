import {
    createStore,
    applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import allRenducer from './reducers'
import {
    composeWithDevTools
} from 'redux-devtools-extension'

export default createStore(allRenducer, composeWithDevTools(applyMiddleware(thunk)))