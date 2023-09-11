import { GET_ALL_DRIVERS, GET_BY_NAME, GET_BY_DETAIL, RESET_DETAIL, GET_ALL_TEAMS, CREATE_NEW_DRIVER, FILTER_BY_BIRTHDATE, FILTER_BY_ORIGIN, FILTER_BY_TEAM } from "./action-types";

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
        case CREATE_NEW_DRIVER:
            return{...state}
        case FILTER_BY_ORIGIN:
            const filteredOrigin = payload === 'from_DB' ? state.allDrivers.filter(driver => driver.from_DB) : state.allDrivers.filter(driver=> !driver.from_DB)
            return{
                ...state,
                driver: payload === 'All' ? state.allDrivers : filteredOrigin
            }
        default:
            return{...state}
    }
}


export default reducer;