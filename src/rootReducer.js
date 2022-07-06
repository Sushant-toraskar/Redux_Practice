import {combineReducers} from 'redux';
import { reducer as userReducer } from './Redux/reducers'; 
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };
const rootreducer = combineReducers({
    user : persistReducer(persistConfig, userReducer),
})
export {rootreducer};