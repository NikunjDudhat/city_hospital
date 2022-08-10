import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootRedux } from './Reducer/Index'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './ReduxSaga/RootSaga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootRedux)

const middlewares = [thunk, sagaMiddleware]
const countorStore = () => {
 let store = createStore(persistedReducer, applyMiddleware(...middlewares))

 sagaMiddleware.run(rootSaga)
 return store;
}

export const store = countorStore();

export let persistor = persistStore(store)