import { GET_ALL_DRIVERS, GET_BY_NAME, GET_BY_DETAIL, RESET_DETAIL, GET_ALL_TEAMS, CREATE_NEW_DRIVER, ORDER_BY_BIRTHDATE_ASC, ORDER_BY_BIRTHDATE_DESC, FILTER_BY_ORIGIN, FILTER_BY_TEAM, ORDER_BY_NAME } from "./action-types";

const initialState = {
    allDrivers: [],
    drivers: [],
    allTeams: [],
    driverDetail: {}
};

const reducer = (state = initialState, { type, payload }) => {

    let aux = [];

    switch(type){
        case GET_ALL_DRIVERS:
            return{
                ...state,
                drivers: payload,
                allDrivers:payload
            }
        case GET_ALL_TEAMS:
            return{...state, allTeams:payload}
        case GET_BY_NAME:
            return {...state, drivers:payload}
        case ORDER_BY_NAME:
            console.log("Reducer: ORDER_BY_NAME payload:", payload);
            let ordered = payload === 'a-z' ? state.drivers.sort((a, b) => {
                if(a.name > b.name) {
                    return 1;
                }
                if(b.name > a.name) {
                    return -1;
                }
                return 0;
            }) : state.drivers.sort((a, b) => {
                if(a.name > b.name) {
                    return -1;
                }
                if(b.name > a.name) {
                    return 1;
                }
                return 0;
            })
            console.log("Reducer: Ordered drivers:", ordered);
            return {
                ...state,
                drivers: ordered
            }
        case ORDER_BY_BIRTHDATE_ASC:
            return {...state, drivers: payload}
        case ORDER_BY_BIRTHDATE_DESC:
            return {...state, drivers: payload}
        case GET_BY_DETAIL:
            return {...state, driverDetail:payload}
        case RESET_DETAIL:
            return {...state, driverDetail:{}}
        case CREATE_NEW_DRIVER:
            return{...state}
        case FILTER_BY_TEAM:
            let driversWithTeams = payload === 'all' ? state.allDrivers : state.allDrivers?.filter((driver) =>{
                if(!driver.team) return undefined
                else return driver.team.split(', ').includes(payload)
            })
            return{
                ...state,
                drivers: driversWithTeams,
            }
        case FILTER_BY_ORIGIN:
            const filteredOrigin = payload === 'from_DB' ? state.allDrivers.filter(driver => driver.from_DB) : state.allDrivers.filter(driver => !driver.from_DB)
            return{
                ...state,
                drivers: payload === 'All' ?   state.allDrivers : filteredOrigin
            }
        default:
            return{...state}
    }
}


export default reducer;