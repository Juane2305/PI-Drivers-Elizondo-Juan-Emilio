import axios from "axios";
import { GET_ALL_DRIVERS, GET_BY_NAME, GET_BY_DETAIL, RESET_DETAIL } from "./action-types";

export const getAllDrivers = () => {
    return async function(dispatch){
        const response = await axios('http://localhost:3001/drivers')
        return dispatch({ type: GET_ALL_DRIVERS, payload: response.data});
    }
}


export const getByName = (name) => {
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/drivers/?name=${name}`)
        return dispatch({ type: GET_BY_NAME, payload: response.data});
    }
}



export const getByDetail = (id) => {
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/drivers/${id}`)
        return dispatch({ type: GET_BY_DETAIL, payload: response.data});
    }
}

export const resetDetail = ()=> {
    return{
        type: RESET_DETAIL
    }
}