import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootRedux } from './Reducer/Index'

export const countorStore = () => {
 let store = createStore(rootRedux, applyMiddleware(thunk))

 return store;
}