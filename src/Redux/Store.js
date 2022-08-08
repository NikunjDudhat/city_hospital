import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootRedux } from './Reducer/Index'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './ReduxSaga/RootSaga'

const sagaMiddleware = createSagaMiddleware()



const middlewares = [thunk, sagaMiddleware]
const countorStore = () => {
 let store = createStore(rootRedux, applyMiddleware(...middlewares))

 sagaMiddleware.run(rootSaga)
 return store;
}


export const store = countorStore();