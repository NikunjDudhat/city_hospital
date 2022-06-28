import { createStore } from 'redux'
import { rootRedux } from './Reducer/Index'

export const countorStore = () => {
 let Store = createStore(rootRedux)
}