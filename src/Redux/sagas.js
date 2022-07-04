import {takeEvery,put} from 'redux-saga/effects';
import {GET_USER_INFO,GET_USER} from './action';

function* getUser(action){
    console.log('action in saga is : ',action);
    try {
        yield put({type :  GET_USER_INFO, payload : action.payload});
    } catch(err){
        //error
        console.log('Error in saga',err);
    }
}

function* handler(action){
    console.log('Action in handler is : ',action);
    yield takeEvery(GET_USER,getUser);
}



export {handler}