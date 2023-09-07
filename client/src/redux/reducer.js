import { GET_ALL_DRIVERS } from "./action-types";

const initialState = {
    allDrivers: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case GET_ALL_DRIVERS:
            return{ ...state, allDrivers:payload }
        default:
            return{...state}
    }
}


export default reducer;