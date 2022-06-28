import { combineReducers } from 'redux'
import { CounterReducer } from './counter.reducer'

export const rootRedux = combineReducers({
    count : CounterReducer
})