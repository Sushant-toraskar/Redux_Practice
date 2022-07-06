import {takeEvery,put} from 'redux-saga/effects';
import {GET_USER_INFO,GET_USER,CLEAR_STORAGE_REQUIRED,CLEAR_STORAGE} from './action';

function* getUser(action){
    console.log('action in saga is : ',action);
    try {
        yield put({type :  GET_USER_INFO, payload : action.payload});
    } catch(err){
        //error
        console.log('Error in saga',err);
    }
}
function* clear(){
    try {
        yield put({type : CLEAR_STORAGE_REQUIRED});
    } catch(err){
        //error
        console.log('Error in saga',err);
    }
}

function* handler(action){
    console.log('Action in handler is : ',action);
    yield takeEvery(CLEAR_STORAGE,clear)
    yield takeEvery(GET_USER,getUser);
    
}



export {handler}