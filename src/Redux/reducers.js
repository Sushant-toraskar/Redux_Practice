import { GET_USER_INFO,CLEAR_STORAGE_REQUIRED } from "./action";

const initialState = {
    data : []
}
const reducer = (state = initialState,action) => {
    console.log('in the reducers',action);
    switch (action.type) {
        case GET_USER_INFO : {
            console.log('in the reducers',action);
            const userdata = action.payload;
            console.log('data is :',userdata);
            return{
                data : [...state.data,userdata]
            };
        }
        case CLEAR_STORAGE_REQUIRED : {
            console.log('in the reducers',action);
            return{
                data : []
            };
        }
        default : 
        return state;
    } 
};
export {reducer};