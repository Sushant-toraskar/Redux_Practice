import createSagaMiddleware from "@redux-saga/core";
import {rootreducer} from '../rootReducer'
import { handler } from "./sagas";
import {createStore, applyMiddleware} from 'redux'

import { persistStore, persistReducer } from 'redux-persist';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootreducer, applyMiddleware(sagaMiddleWare))
console.log('store',store);
const persistor = persistStore(store);
sagaMiddleWare.run(handler);
export {store,persistor};