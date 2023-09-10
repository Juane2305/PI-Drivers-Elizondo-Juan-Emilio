import { GET_ALL_DRIVERS, GET_BY_NAME, GET_BY_DETAIL, RESET_DETAIL, GET_ALL_TEAMS } from "./action-types";

const initialState = {
    allDrivers: [],
    allTeams: [],
    driversCopy: [],
    driverDetail: {}
};

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case GET_ALL_DRIVERS:
            return{ ...state, allDrivers:payload, driversCopy: payload }
        case GET_BY_NAME:
            return {...state, allDrivers:payload}
        case GET_BY_DETAIL:
            return {...state, driverDetail:payload}
        case RESET_DETAIL:
            return {...state, driverDetail:{}}
        case GET_ALL_TEAMS:
            return{...state, allTeams:payload}
        default:
            return{...state}
    }
}


export default reducer;