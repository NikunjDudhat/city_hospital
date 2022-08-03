import { combineReducers } from 'redux'
import { AlertReducer } from './alert.reducer'
import { CounterReducer } from './counter.reducer'
import { LoginReducer } from './login.reducer'

export const rootRedux = combineReducers({
    count : CounterReducer,
    auth : LoginReducer,
    alert : AlertReducer
})