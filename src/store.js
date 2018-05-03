import { createStore, combineReducers } from 'redux'

import modules from './modules'

const initialState = { }

const rootReducer = combineReducers(modules)

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
