import createSagaMiddleware from "@redux-saga/core";
import {rootreducer} from '../rootReducer'
import { handler } from "./sagas";
import {createStore, applyMiddleware} from 'redux'

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootreducer, applyMiddleware(sagaMiddleWare))
console.log('store',store);

sagaMiddleWare.run(handler);
export {store};