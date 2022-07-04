import { GET_USER_INFO } from "./action";

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
        default : 
        return state;
    } 
};
export {reducer};