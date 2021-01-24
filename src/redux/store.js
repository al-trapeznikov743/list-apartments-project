import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {rootReducer} from './rootReducer'


const reducers = combineReducers({
    rootReducer: rootReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.state = store.getState()

export default store