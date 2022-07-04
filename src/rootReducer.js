import {combineReducers} from 'redux';
import { reducer as userReducer } from './Redux/reducers'; 

const rootreducer = combineReducers({
    user : userReducer,
})
export {rootreducer};